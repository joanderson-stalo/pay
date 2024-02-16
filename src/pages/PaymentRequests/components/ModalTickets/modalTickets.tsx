import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import * as S from './styled';
import { CustomInput } from '@/components/Input/input';
import { CustomSelect } from '@/components/Select/select';
import { useLogin } from '@/context/user.login';
import { useFilterLicensed } from '../../hooks/useFilterLicensed';
import axios from 'axios';
import { ThemeColor } from '@/config/color';

interface IModalSucesso {
  visible: boolean;
  onClose: () => void;
}

export function ModalTickets({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setTrue } = useFilterLicensed();
  const { dataUser } = useLogin();
  const [fetchedOptions, setFetchedOptions] = useState([]);

  const onSubmit = (data: any) => {
    const newSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      if (value) newSearchParams.set(key, String(value));
    }
    setSearchParams(newSearchParams);
    setTrue();
    onClose();
  };


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
          const options = data.sellers.map((seller: any) => ({
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
  }, [dataUser?.token]);

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

  if (!visible) return null;

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
            <CustomInput
              label='Data Inicial'
              {...register("dataInicial")}
              defaultValue={searchParams.get("dataInicial") || ""}
              colorInputDefault={ThemeColor.primaria}
              colorInputSuccess={ThemeColor.secundaria}
              hasError={!!errors.dataInicial}
              type='date'
            />

            <CustomInput
              label='Data Final'
              {...register("dataFinal")}
              defaultValue={searchParams.get("dataFinal") || ""}
              colorInputDefault={ThemeColor.primaria}
              colorInputSuccess={ThemeColor.secundaria}
              hasError={!!errors.dataFinal}
              type='date'
            />
          </S.ContainerSelect>

          <S.ContainerSelect>
            <CustomSelect
              {...register("fornecedor")}
              optionsData={{ options: fetchedOptions }}
              placeholder="Digite aqui ou clique para ver a lista"
              label="Fornecedor"
              onChange={(selectedOption: any) => {
                setValue('fornecedor', selectedOption.value);
              }}
            />

            <CustomSelect
              {...register("status")}
              optionsData={{ options: fetchedOptions }}
              placeholder="Digite aqui ou clique para ver a lista"
              label="Status"
              onChange={(selectedOption: any) => {
                setValue('status', selectedOption.value);
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
