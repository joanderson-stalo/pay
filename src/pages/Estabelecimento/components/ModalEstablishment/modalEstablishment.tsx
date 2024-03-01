import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import { CustomSelect } from '@/components/Select/select';
import { optionsData } from '@/pages/ECcadastro/components/Step1/option';
import { useFilterEstablishment } from '../../hooks/useFilterEstablishment';
import { useLogin } from '@/context/user.login';
import axios from 'axios';

interface IModalSucesso {
  visible: boolean;
  onClose: () => void;
}

export function ModalEstablishment({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { setTrue } = useFilterEstablishment();
  const { dataUser } = useLogin();
  const [acquires, setAcquires] = useState<any[]>([]);
  const [dataLA, setDataLA] = useState<any[]>([]); // Novo estado para armazenar os dados de LA

  const onSubmit = (data: any) => {
    localStorage.setItem('@licenciadoAutorizadoEstablishment', data.licenciadoAutorizado || '');
    localStorage.setItem('@fornecedorEstablishment', data.fornecedor || '');

    setTrue();
    onClose();
  };

  useEffect(() => {
    fetchData();
    fetchDataLA(); // Chamar a função fetchDataLA ao montar o componente
  }, [dataUser?.token]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-pagueassim.stalopay.com.br/acquire/index', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      if (data && data.acquires) {
        const options = data.acquires.map((acquire: { id: any; acquire_label: any }) => ({
          value: acquire.id,
          label: acquire.acquire_label,
        }));
        setAcquires(options);
        console.log(options);
      }
    } catch (error) {
      console.error('Houve um erro ao buscar os dados de acquires:', error);
    }
  };

  const fetchDataLA = async () => {
    try {
      const response = await axios.get('https://api-pagueassim.stalopay.com.br/seller/indexla', {
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
        setDataLA(options); // Salvar os dados de LA no estado dataLA
        console.log(options);
      }
    } catch (error) {
      console.error('Houve um erro ao buscar os dados de LA:', error);
    }
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
            <div>
              <CustomSelect
                {...register("licenciadoAutorizado")}
                optionsData={{ options: dataLA }}
                placeholder="Digite aqui ou clique para ver a lista"
                label="Licenciado Autorizado"
                onChange={(selectedOption: { value: string }) => {
                  setValue('licenciadoAutorizado', selectedOption.value);
                }}
              />
              <CustomSelect
                {...register("fornecedor")}
                optionsData={{ options: acquires }} // Usar acquires ou dataLA dependendo do caso
                placeholder="Digite aqui ou clique para ver a lista"
                label="Fornecedor"
                onChange={(selectedOption: { value: string }) => {
                  setValue('fornecedor', selectedOption.value);
                }}
              />
            </div>
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
