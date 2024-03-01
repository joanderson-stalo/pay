import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './styled';
import { GraficoCicle } from '@/components/graficoCicle/graficoCicle';
import { GraficoBar } from '@/components/graficoBar/graficoBar';
import { CaretLeft } from '@phosphor-icons/react';
import { useLogin } from '@/context/user.login';
import { useEstablishment } from '@/context/useEstablishment';
import { Loading } from '@/components/Loading/loading';
import { DetalhesTable } from '@/components/detalhesTable/detalhesTable';
import Swal from 'sweetalert2';

type PaymentTypes = {
  credit: string;
  debit: string;
  pix: string;
};


type HourlyTransactionTotals = {
  [key: string]: string;
};

type EstablishmentDetailType = {
  trading_name: string;
  transactions_TPV: string;
  payment_types: PaymentTypes;
  hourly_transaction_totals: HourlyTransactionTotals;
};

export function EstablishmentDetail() {
  const navigate = useNavigate();
  const { establishmentId } = useEstablishment();
  const { dataUser } = useLogin();
  const [loading, setLoading] = useState(false);
  const [establishmentDetails, setEstablishmentDetails] = useState<EstablishmentDetailType | null>(null);

  const fetchEstablishmentDetail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api-pagueassim.stalopay.com.br/detail/ec/${establishmentId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      setEstablishmentDetails(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [establishmentId, dataUser?.token]);

  useEffect(() => {
    if (establishmentId) {
      fetchEstablishmentDetail();
    }
  }, [establishmentId, fetchEstablishmentDetail]);


  const handleEstablishment = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`https://api-pagueassim.stalopay.com.br/seller/delete/${establishmentId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });


        navigate('/sellers-ec');

    } catch (error) {
      console.error(error);
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
        handleEstablishment();
      }
    });
  };

  const handEstabelecimentos = () => {
    navigate('/sellers-ec');
  };

  return (
    <>
      {loading && <Loading />}
      <S.Container>
      <S.ButtonBlack onClick={handEstabelecimentos}><CaretLeft size={18} />Voltar</S.ButtonBlack>
      <S.ContainerInfo>
        <S.Title>{establishmentDetails?.trading_name || 'Nome do Estabelecimento'} <span>| CNPJ aqui</span></S.Title>
      </S.ContainerInfo>

      <S.ContainerGrafico>
        <GraficoCicle
          credit={establishmentDetails?.payment_types?.credit || '0.00'}
          debit={establishmentDetails?.payment_types?.debit || '0.00'}
          pix={establishmentDetails?.payment_types?.pix || '0.00'}
          total={establishmentDetails?.transactions_TPV || '0.00'}
        />
        <GraficoBar hourly_transaction_totals={establishmentDetails?.hourly_transaction_totals || {}} />
      </S.ContainerGrafico>
      <DetalhesTable  />


      < S.ContainerBnt>
        <S.ButtonEditRegistration type='button'>Editar cadastro</S.ButtonEditRegistration>
        <S.ButtonManageAccess  type='button' >Gerenciar acessos</S.ButtonManageAccess>
        <S.ButtonDelete type='button' onClick={handleDeleteConfirmation}>Excluir EC</S.ButtonDelete>
        </S.ContainerBnt>
      </S.Container>



    </>
  );
}
