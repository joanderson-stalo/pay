import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import {
  ButtonBlack,
  ButtonGroup,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  StyledTable,
  TableAndButtonsContainer,
  TitleStep,
} from './styled';
import { useTenantData } from '@/context';

import master from '@/assets/Card/master.svg';
import elo from '@/assets/Card/elos.svg';
import visa from '@/assets/Card/visas.svg';
import diners from '@/assets/Card/dinerss.svg';
import hyper from '@/assets/Card/hypers.svg';
import pix from '@assets/Card/pix.svg';
import amex from '@assets/Card/amex.svg'
import cabal from '@assets/Card/cabral.svg'
import { usePlanID } from '@/context/id/planID';
import { baseURL } from '@/config/color';
import { Loading } from '@/components/Loading/loading';
import { CaretLeft } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface Rate {
  id: number;
  plan_base_id: string;
  plan_base_name: string;
  brand: string;
  payment_type: string;
  installments: number;
  fee: string;
  fee_base: string;
  mdr: string;
}

interface RateData {
  brand: string;
  total_rates: number;
  rates: Rate[];
}

interface PlanData {
  status: number;
  success: boolean;
  plan_id: number;
  plan_name: string;
  rates: RateData[];
  current_page: number;
  last_page: number;
}

const cardLogos: Record<string, string> = {
  mastercard: master,
  visa: visa,
  elo: elo,
  diners: diners,
  hipercard: hyper,
  pix: pix,
  amex: amex,
  cabal: cabal
};

export function PlansDetails() {
  const [planData, setPlanData] = useState<PlanData | null>(null);
  const [selectedTableType, setSelectedTableType] = useState<string>('pix');
  const [loading, setLoading] = useState<boolean>(true);
  const { dataUser } = useLogin();
  const { selectedPlanID } = usePlanID();
  const tenantData = useTenantData();
  const navigate = useNavigate();


  const fetchPlanData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
       `${baseURL}plan/show/${selectedPlanID}/rate`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`,
          },
        }
      );
      setPlanData(response.data);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }, [dataUser?.token, selectedPlanID]);

  useEffect(() => {
    fetchPlanData();
  }, [fetchPlanData]);

  const renderTable = (tableType: string) => {
    const tenantData = useTenantData();
    const rateData = planData?.rates.find((rate) => rate.brand === tableType);

    if (!rateData) {
      return null;
    }

    return (
      <StyledTable
        primary={tenantData.primary_color_identity}
        secundary={tenantData.secondary_color_identity}
      >
        <thead>
          <tr>
            <th>Forma de Pagamento</th>
            <th>Taxa Base</th>
            <th>Taxa</th>
            <th>Spread</th>
          </tr>
        </thead>
        <tbody>
          {rateData.rates.map((rate) => (
            <tr key={rate.id}>
              <td>
                {rate.payment_type === 'debit'
                  ? 'Débito'
                  : rate.installments === 0
                  ? 'Crédito à vista'
                  : `Parcelado ${rate.installments}x`}
              </td>
              <td>{rate.fee_base}%</td>
              <td>{rate.fee}%</td>
              <td>{(Number(rate.fee) - Number(rate.fee_base)).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ContainerStep>
      <ContextStepContainer>
        <ButtonBlack
          primary={tenantData.primary_color_identity}
          secundary={tenantData.secondary_color_identity}
          onClick={() => navigate(-1)}
        >
          <CaretLeft size={18} /> Voltar
        </ButtonBlack>
        <ContextStep>
          <TitleStep>Taxas do Plano</TitleStep>
          <Line />
          <TableAndButtonsContainer>
            <ButtonGroup>
              {planData?.rates.map((rate) => (
                <button
                  key={rate.brand}
                  type='button'
                  onClick={() => setSelectedTableType(rate.brand)}
                  className={selectedTableType === rate.brand ? 'selected' : 'not-selected'}
                >
                  {cardLogos[rate.brand] ? (
                    <img src={cardLogos[rate.brand]} alt={rate.brand} />
                  ) : (
                    rate.brand
                  )}
                </button>
              ))}
            </ButtonGroup>
            {renderTable(selectedTableType)}
          </TableAndButtonsContainer>
        </ContextStep>
      </ContextStepContainer>
    </ContainerStep>
  );
}
