import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';
import hipercard from '@assets/bandeiras/hipercard.svg';
import { useTenantData } from '@/context';

interface Sale {
  label: string;
  name: string;
  statusDescription: string
}
interface SituationSalesProps {
  status_acquire: Sale[];
}

export function SituationTable({ status_acquire }: SituationSalesProps) {

  console.log('teeeeeeest',status_acquire)
  const navigate = useNavigate();

  const formatDateAndTime = (dateTimeStr: string) => {
    const date = new Date(dateTimeStr);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    const formattedTime = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate}\n${formattedTime}`;
  };



  // const sortedTransactions = [...latest_transactions].sort((a, b) => new Date(b.captured_in).getTime() - new Date(a.captured_in).getTime()).slice(0, 6);

  const handleButtonClick = () => {
    navigate('/transaction');
  };

  const tenantData = useTenantData();

  return (
    <>
      <S.Context>
      <S.Container>
        <S.Header  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
          <h2>Situação do fornecedor</h2>

        </S.Header>
        <S.Table>
          <thead>
            <tr>
              <S.TableHeader>Fornecedor</S.TableHeader>
              <S.TableHeader>Situação</S.TableHeader>

            </tr>
          </thead>
          <tbody>
            {status_acquire.map((item, index) => (
              <tr key={index}>
                <S.TableCell>

                  {item.label}
                </S.TableCell>

                <S.TableCell>


                  {item.statusDescription === 'enable' ? <S.TagSituation active>Ativo</S.TagSituation>:   <S.TagSituation active>Inativo</S.TagSituation>}


                </S.TableCell>


              </tr>
            ))}
          </tbody>
        </S.Table>

      </S.Container>
      <S.CustomButtonLink onClick={handleButtonClick}>Ver todas as vendas</S.CustomButtonLink>
      </S.Context>

    </>
  );
}
