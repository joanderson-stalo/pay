import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import { CustomSelect } from '@/components/Select/select';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { CustomInput } from '@/components/Input/input';
import { ThemeColor } from '@/config/color';
import { useFilterBilling } from '../../hooks/useFilterBilling';
import { Loading } from '@/components/Loading/loading';

interface IModalSucesso {
  visible: boolean;
  onClose: () => void;
}

export function ModalBilling({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setValue, formState: { errors }, setError,  reset } = useForm();
  const { setTrue } = useFilterBilling();
  const [fetchedOptionsLA, setFetchedOptionsLA] = useState([]);
  const [fetchedOptionsEC, setFetchedOptionsEC] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dataUser } = useLogin();

  const onSubmit = (data: any) => {
 
      localStorage.setItem('@billingStartDate', data.billing_start_date || '');
      localStorage.setItem('@billingEndDate', data.billing_end_date || '');
      localStorage.setItem('@billingEstablishment', data.estabelecimento || '');
      localStorage.setItem('@billingLicensed', data.licenciadoAutorizado || '');
      setTrue();
      onClose();
      reset();
  };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const validateDate = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return false;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start >= end) {
      setError('billing_start_date', {
        type: 'validate',
        message: 'A data inicial deve ser anterior à data final.',
      });
      setError('billing_end_date', {
        type: 'validate',
        message: 'A data final deve ser posterior à data inicial.',
      });
      return false;
    }

    return true;
  };

  useEffect(() => {
    fetchDataLA();
    fetchDataEC();
  }, []);

  const fetchDataLA = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api-pagueassim.stalopay.com.br/seller/indexla', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      if (data && data.sellers) {
        const options = data.sellers.map((seller: { id: any; trading_name: any; type: any; cnpj_cpf: any; }) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
        }));
        setFetchedOptionsLA(options);
      }
    } catch (error: any) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEC = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api-pagueassim.stalopay.com.br/seller/indexec', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data.sellers;
      if (data) {
        const options = data.map((seller: { id: any; company_name: any; }) => ({
          value: seller.id,
          label: seller.company_name
        }));
        setFetchedOptionsEC(options);
      }
    } catch (error: any) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  if (!visible) {
    return null;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <S.Overlay>
        <S.ContainerModal>
          <S.ContainerTitle>
            <p>Adicionar Filtros</p>
            <span>Preencha os campos que deseja filtrar</span>
          </S.ContainerTitle>
          <S.Linha />
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.ContainerSelect>
              <CustomInput 
                label='Data Inicial'
                {...register("billing_start_date")}
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.billing_start_date}
                type='date' />
              <CustomInput 
                label='Data Final'
                {...register("billing_end_date")}
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.billing_end_date}
                type='date' />
            </S.ContainerSelect>

            <S.ContainerSelect>
              <CustomSelect
                {...register("estabelecimento")}
                optionsData={{ options: fetchedOptionsEC }}
                placeholder="Clique para ver a lista"
                label="Estabelecimento"
                onChange={(selectedOption: { value: string; }) => {
                  setValue('estabelecimento', selectedOption.value);
                }}
              />
              <CustomSelect
                {...register("licenciadoAutorizado")}
                optionsData={{ options: fetchedOptionsLA }}
                placeholder="Clique para ver a lista"
                label="Licenciado"
                onChange={(selectedOption: { value: string; }) => {
                  setValue('licenciadoAutorizado', selectedOption.value);
                }}
              />
            </S.ContainerSelect>

            <S.ContextButton>
              <S.ButtonCancelar onClick={onClose}>Cancelar</S.ButtonCancelar>
              <S.ButtonSalvar type='submit'>Salvar</S.ButtonSalvar>
            </S.ContextButton>
          </form>
        </S.ContainerModal>
      </S.Overlay>
    </>
  );
}
