
import * as S from './styled';
import { CustomInput } from '@/components/Input/input';
import { useFormContext } from 'react-hook-form';
import { CustomSelect } from '@/components/Select/select';
import { optionsData } from '../Step1/option';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import { Infos } from './components/step5';
import { Loading } from '@/components/Loading/loading';
import { useEffect, useState } from 'react';
import { bancos } from '@/json/bancos';
import { accountType } from '@/json/accountType';
import axios from 'axios';
import { useTenantData } from '@/context';

interface IStep5 {
  Avançar: () => void;
  Voltar: () => void;
  isLoading: boolean;
}

interface BankOption {
  value: string;
  label: string;
}

export function Step4({ Avançar, Voltar, isLoading }: IStep5) {
  const {
    register,
    setValue,
    formState: { errors },
    getValues,
    watch
  } = useFormContext();

  const isFornecedorFieldsFilled = (index: number) => {
    const fields = [
        `Bancof${index}`,
        `TipoDeContaf${index}`,
        `Agênciaf${index}`,
        `Contaf${index}`,
        `CpfCnpjf${index}`
    ];

    return fields.every(field => !!getValues(field));
};




const areAllFieldsFilled = () => {
  if (!(
      !!watch('Banco') &&
      !!watch('TipoDeConta') &&
      !!watch('Agência') &&
      !!watch('Conta') &&
      !!watch('CpfCnpj')
  )) {
      return false;
  }

  for (let i = 2; i <= quantidadeFornecedores; i++) {
      if (!isFornecedorFieldsFilled(i)) {
          return false;
      }
  }

  return true;
};

const formatCpfOrCnpj = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, "");

  if (onlyNumbers.length > 11) {
    return onlyNumbers.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
      "$1.$2.$3/$4-$5"
    );
  }
  return onlyNumbers.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
    "$1.$2.$3-$4"
  );
};


const handleCpfCnpjChange = (event: { target: { value: any; }; }) => {
  const formattedValue = formatCpfOrCnpj(event.target.value);
  setValue('CpfCnpj', formattedValue);
};


  const cpfOuCnpjValue = watch('CpfCnpj');

  const mask =
    cpfOuCnpjValue && cpfOuCnpjValue.length > 14
      ? '99.999.999/9999-99'
      : '999.999.999-99';

      const quantidadeFornecedores = Object.keys(getValues())
      .filter(key => key.startsWith('Fornecedor'))
      .length;

    const renderInfosForFornecedores = () => {
      const infosComponents = [];

      for (let i = 2; i <= quantidadeFornecedores; i++) {
        infosComponents.push(<Infos stepName={`F${i}`} key={i} />);
      }

      return infosComponents;
    };


    const Banco = watch('Banco');
    const bancoSelecionado = bancos.options.find((option: { value: string; label: string }) => option.value === Banco);
    const tipoDeContaValue = watch('TipoDeConta');
    const tipoDeContaSelecionado = accountType.options.find((option: { value: string; label: string }) => option.value === tipoDeContaValue);

    const tenantData = useTenantData();


  return (
    <>
   {isLoading && <Loading />}
      <S.ContainerStep>
        <S.ContextStepContainer>
          <S.ContextStep>
            <S.TitleStep>Dados Bancários - F1</S.TitleStep>
            <S.Line />
            <S.ContainerForm>
              <S.ContainerInput>
                <S.Banco>
                  <CustomSelect
                    {...register('Banco', { required: true })}
                    label="Banco"
                    value={bancoSelecionado}
                    optionsData={bancos}
                    placeholder={'Clique para ver a lista'}
                    hasError={!!errors.Banco}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Banco', selectedOption.value);
                    }}
                  />
                </S.Banco>
                <S.TipoConta>
                  <CustomSelect
                    {...register('TipoDeConta', { required: true })}
                    label="Tipo de Conta"
                    placeholder={''}
                    value={tipoDeContaSelecionado}
                    optionsData={accountType}
                    hasError={!!errors['Tipo de Conta']}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('TipoDeConta', selectedOption.value);
                    }}
                  />
                </S.TipoConta>
              </S.ContainerInput>
              <S.ContainerInput>
                <S.Agencia>
                  <CustomInput
                    {...register('Agência', { required: true })}
                    label="Agência"
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    hasError={!!errors.Agência}
                    hasSuccess={false}
                  />
                </S.Agencia>
                <S.Conta>
                  <CustomInput
                    {...register('Conta', { required: true })}
                    label="Conta"
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    hasError={!!errors.Conta}
                    hasSuccess={false}
                  />
                </S.Conta>
              </S.ContainerInput>
              <S.ContainerInput2>
              <CustomInput
                  key={mask}
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  {...register('CpfCnpj', { required: true })}
                  label="CPF ou CNPJ"
                  placeholder="--.---.---/---.--"
                  hasError={!!errors.CpfCnpj}
                  onChange={handleCpfCnpjChange}
                />
              </S.ContainerInput2>
            </S.ContainerForm>
          </S.ContextStep>
          {renderInfosForFornecedores()}
          <S.ContainerButton>
            <S.ButtonVoltar onClick={Voltar}>Voltar</S.ButtonVoltar>
            <S.ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}  disabled={!areAllFieldsFilled()} onClick={Avançar}>
              Finalizar
            </S.ButtonAvançar>
          </S.ContainerButton>
        </S.ContextStepContainer>
      </S.ContainerStep>
    </>
  );
}
