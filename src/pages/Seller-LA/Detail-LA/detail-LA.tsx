import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './styled';
import { GraficoCicle } from '@/components/GraficoCicleNew/graficoCicle';
import { GraficoBar } from '@/components/GraficoBarNew/graficoBar';
import { useLicensed } from '@/context/useLicensed';
import { useLogin } from '@/context/user.login';
import Swal from 'sweetalert2';
import { Loading } from '@/components/Loading/loading';
import { TopEstabelecimentos } from '@/pages/Home/Modules/LAHome/components/TopEstabelecimento/topEstabelecimentos';
import { DetalhesTable } from '@/components/DetalhesTableNew/detalhesTable';
import { baseURL } from '@/config/color';
import { useTenantData } from '@/context';
import { ArrowBack } from '@/components/BtnArrowBack/btnArrowBack';

interface TransactionsGroupedByAcquireIdType {
  total_amount: number;
  total_transactions: number;
}

interface TopSellerType {
  seller_id: number;
  trading_name: string;
  total_amount: string;
}

interface LicensedDetailType {
  trading_name: string;
  seller_name: string;
  payment_types: {
    credit: string;
    debit: string;
    pix: string;
  };
  transactions_TPV: string;
  hourly_transaction_totals: Record<string, string>;
  top_Seller: TopSellerType[];
  transactions_grouped_by_acquire_id: Record<string, TransactionsGroupedByAcquireIdType>;
}

export function DetailLA() {
  const navigate = useNavigate();
  const [licensedDetail, setLicensedDetail] = useState<LicensedDetailType | null>(null);
  const [loading, setLoading] = useState(false);
  const { licensedId } = useLicensed();
  const { dataUser } = useLogin();

  const fetchLicensedDetail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}detail/la/${licensedId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      setLicensedDetail(response.data);
    } catch (error) {

    }
    finally {
      setLoading(false);
    }
  }, [licensedId, dataUser?.token]);

  useEffect(() => {
    if (licensedId) {
      fetchLicensedDetail();
    }
  }, [licensedId, fetchLicensedDetail]);

  const navigateToManageAccessLicensed = () => {
    navigate('/sellers-la-manage');
  };


  const handleEdit = () => {
    navigate('/sellers-la-edit');
  };

  const handleDeleteLicensed = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${baseURL}seller/delete/${licensedId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });


        navigate('/sellers-la');

    } catch (error) {

    }
    finally {
      setLoading(false);
    }
  };

  const handleDeleteConfirmation = () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Esta ação é irreversível!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteLicensed();
      }
    });
  };

  const tenantData = useTenantData();
  return (
    <>
    {loading && <Loading />}
      <S.Container>

        <S.ContainerInfo>
          <S.WrapperInfo>
            <ArrowBack/>
            <S.Title  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
>{licensedDetail?.seller_name || 'Nome do Vendedor'}</S.Title>
          </S.WrapperInfo>

          < S.ContainerBnt>
        <S.ButtonEditRegistration  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 onClick={handleEdit} type='button'>Editar cadastro</S.ButtonEditRegistration>
        <S.ButtonManageAccess   primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 type='button' onClick={navigateToManageAccessLicensed}>Gerenciar acessos</S.ButtonManageAccess>
        <S.ButtonDelete type='button' onClick={handleDeleteConfirmation}>Deletar</S.ButtonDelete>
        </S.ContainerBnt>
        </S.ContainerInfo>



        <S.ContainerGrafico>
          <GraficoCicle
            credit={licensedDetail?.payment_types?.credit || '0.00'}
            debit={licensedDetail?.payment_types?.debit || '0.00'}
            pix={licensedDetail?.payment_types?.pix || '0.00'}
            total={licensedDetail?.transactions_TPV || '0.00'}
          />
          <GraficoBar hourly_transaction_totals={licensedDetail?.hourly_transaction_totals || {}} />
        </S.ContainerGrafico>

        <S.ContainerTable>
        <DetalhesTable transactions_grouped_by_acquire_id={licensedDetail?.transactions_grouped_by_acquire_id || {}} />
          <TopEstabelecimentos topSellers={licensedDetail?.top_Seller || []} />
        </S.ContainerTable>



      </S.Container>
    </>
  );
}
