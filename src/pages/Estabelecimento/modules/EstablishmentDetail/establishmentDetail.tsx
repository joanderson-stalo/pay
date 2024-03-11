import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './styled';
import { GraficoCicle } from '@/components/GraficoCicleNew/graficoCicle';
import { GraficoBar } from '@/components/GraficoBarNew/graficoBar';
import { CaretLeft } from '@phosphor-icons/react';
import { useLogin } from '@/context/user.login';
import { useEstablishment } from '@/context/useEstablishment';
import { Loading } from '@/components/Loading/loading';
import Swal from 'sweetalert2';
import { LatestSales } from '@/pages/Home/components/LAHome/components/LatestSales/latestSales';

type PaymentTypes = {
  credit: string;
  debit: string;
  pix: string;
};


type HourlyTransactionTotals = {
  [key: string]: string;
};

type TransactionDetail = {
  captured_in: string;
  payment_type: string;
  brand: string;
  amount: string;
};

type EstablishmentDetailType = {
  seller_name: string;
  transactions_TPV: string;
  payment_types: PaymentTypes;
  hourly_transaction_totals: HourlyTransactionTotals;
  latest_transactions: TransactionDetail[];
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

  const handEditRegistrationEC = () => {
    // navigate('/sellers-ec-edit');
  };

  const handManage = () => {
    navigate('/sellers-ec-manage');
  };

  

  return (
    <>
      {loading && <Loading />}
      <S.Container>
      <S.ButtonBlack onClick={handEstabelecimentos}><CaretLeft size={18} />Voltar</S.ButtonBlack>
      <S.ContainerInfo>
        <S.Title>{establishmentDetails?.seller_name || 'Nome do Estabelecimento'}</S.Title>
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
    
      <LatestSales latest_transactions={establishmentDetails?.latest_transactions || []} />

      < S.ContainerBnt>
        <S.ButtonEditRegistration type='button' onClick={handEditRegistrationEC}>Editar cadastro</S.ButtonEditRegistration>
        <S.ButtonManageAccess  type='button' onClick={handManage}>Gerenciar acessos</S.ButtonManageAccess>
        <S.ButtonDelete type='button' onClick={handleDeleteConfirmation}>Excluir EC</S.ButtonDelete>
        </S.ContainerBnt>
      </S.Container>



    </>
  );
}
