import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import { CustomSelect } from '@/components/Select/select';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { useFilterLicensed } from '../../hooks/useFilterLicensed';

interface IModalSucesso {
  visible: boolean;
  onClose: () => void;
}

export function ModalLicensed({ onClose, visible }: IModalSucesso) {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-pagueassim.stalopay.com.br/seller/indexla', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${dataUser?.token}`
          }
        });

        const data = response.data;

        if (data && data.sellers) {
          console.log(data.sellers.trading_name)
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

    fetchData();
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <S.Overlay>
      <S.ContainerModal>
        <S.ContainerTitle>
          <p>Adicionar Filtros</p>
          <span>Preencha os campos que deseja filtrar</span>
        </S.ContainerTitle>
        <S.Linha />
        <form onSubmit={handleSubmit(onSubmit)}>
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
          </S.ContainerSelect>
          <S.ContextButton>
            <S.ButtonCancelar onClick={onClose}>Cancelar</S.ButtonCancelar>
            <S.ButtonSalvar type='submit'>Salvar</S.ButtonSalvar>
          </S.ContextButton>
        </form>
      </S.ContainerModal>
    </S.Overlay>
  );
}
