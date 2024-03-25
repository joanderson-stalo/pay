import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import { CustomSelect } from '@/components/Select/select';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { useFilterLicensed } from '../../hooks/useFilterLicensed';
import { CustomInput } from '@/components/Input/input';
import {  baseURL } from '@/config/color';
import { useTenantData } from '@/context';

interface IModalSucesso {
  visible: boolean;
  onClose: () => void;
}

export function ModalBilling({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { setTrue } = useFilterLicensed();
  const { dataUser } = useLogin();
  const [fetchedOptions, setFetchedOptions] = useState([]);

  const onSubmit = (data: any) => {
    localStorage.setItem('@licenciadoAutorizadoLicensed', data.licenciadoAutorizado || '');
    setTrue();
    onClose();
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

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}seller/indexla`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      const data = response.data;

      if (data && data.sellers) {
        const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, cnpj_cpf: any }, index: number) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
        }));

        setFetchedOptions(options);
      }
    } catch (error) {
      console.error('Houve um erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {

    fetchData();
  }, []);

  if (!visible) {
    return null;
  }

  const tenantData = useTenantData();

  return (
    <S.Overlay>
      <S.ContainerModal>
        <S.ContainerTitle  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
          <p>Adicionar Filtros</p>
          <span>Preencha os campos que deseja filtrar</span>
        </S.ContainerTitle>
        <S.Linha />
        <form onSubmit={handleSubmit(onSubmit)}>

        <S.ContainerSelect>
        <         CustomInput
                    label='Data Inicial'
                    {...register("captured_in_end")}
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    hasError={!!errors.captured_in_end}
                    type='date' />


           <         CustomInput
                    label='Data Final'
                    {...register("captured_in_end")}
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    hasError={!!errors.captured_in_end}
                    type='date' />
          </S.ContainerSelect>


          <S.ContainerSelect>
            <CustomSelect
              {...register("licenciadoAutorizado")}
              optionsData={{ options: fetchedOptions }}
              placeholder="Digite aqui ou clique para ver a lista"
              label="Licenciado Autorizado"
              onChange={(selectedOption: { value: string }) => {
                setValue('licenciadoAutorizado', selectedOption.value);
              }}
            />
               <CustomSelect
              {...register("licenciadoAutorizado")}
              optionsData={{ options: fetchedOptions }}
              placeholder="Digite aqui ou clique para ver a lista"
              label="Tipo"
              onChange={(selectedOption: { value: string }) => {
                setValue('licenciadoAutorizado', selectedOption.value);
              }}
            />
          </S.ContainerSelect>


          <S.ContainerSelect>
          <         CustomInput
                    label='Tarifa mínima'
                    {...register("captured_in_end")}
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    placeholder='R$'
                    hasError={!!errors.captured_in_end}
                    type='number' />
       <         CustomInput
                    label='Tarifa máxima'
                    {...register("captured_in_end")}
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    placeholder='R$'
                    hasError={!!errors.captured_in_end}
                    type='number' />
          </S.ContainerSelect>


          <S.ContextButton>
            <S.ButtonCancelar onClick={onClose}>Cancelar</S.ButtonCancelar>
            <S.ButtonSalvar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='submit'>Salvar</S.ButtonSalvar>
          </S.ContextButton>
        </form>
      </S.ContainerModal>
    </S.Overlay>
  );
}
