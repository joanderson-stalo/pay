
import { ThemeColor } from '@/config/color';
import * as S from './styled';
import { CustomInput } from '@/components/Input/input';
import { useForm, useFormContext } from 'react-hook-form';
import { CustomSelect } from '@/components/Select/select';
import { optionsData } from '../Step1/option';
import { Loading } from '@/components/Loading/loading';
import { useState } from 'react';



export function Step4() {
  const [isLoading, setIsLoading] = useState(false)


  const {
    register,
    setValue,
    formState: { errors },
    getValues,
    watch
  } = useForm({
    mode: 'onChange'
  });
  ;



const areAllFieldsFilled = () => {
  if (!(
      !!watch('Banco') &&
      !!watch('TipoDeConta') &&
      !!watch('Agência') &&
      !!watch('Conta') &&
      !!watch('CpfCnpj') &&
      !!watch('pix')
  )) {
      return false;
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



  return (
    <>
   {isLoading && <Loading />}
      <S.ContainerStep>
        <S.ContextStepContainer>
          <S.ContextStep>
            <S.TitleStep>Dados Bancários</S.TitleStep>
            <S.Line />
            <S.ContainerForm>
              <S.ContainerInput>

                  <CustomSelect
                    {...register('Banco', { required: true })}
                    label="Banco"
                    optionsData={optionsData}
                    placeholder={'Clique para ver a lista'}
                    hasError={!!errors.Banco}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Banco', selectedOption.value);
                    }}
                  />


                  <CustomSelect
                    {...register('TipoDeConta', { required: true })}
                    label="Tipo de Conta"
                    placeholder={''}
                    optionsData={optionsData}
                    hasError={!!errors['Tipo de Conta']}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('TipoDeConta', selectedOption.value);
                    }}
                  />

              </S.ContainerInput>

              <S.ContainerInput>
              <CustomInput
                  key={mask}
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  {...register('CpfCnpj', { required: true })}
                  label="CPF ou CNPJ"
                  placeholder="--.---.---/---.--"
                  hasError={!!errors.CpfCnpj}
                  onChange={handleCpfCnpjChange}
                />

<CustomInput
                    {...register('pix', { required: true })}
                    label="Chave PIX"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    hasError={!!errors.Agência}
                    hasSuccess={false}
                  />
              </S.ContainerInput>

              <S.ContainerInput>
                <S.Agencia>
                  <CustomInput
                    {...register('Agência', { required: true })}
                    label="Agência"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    hasError={!!errors.Agência}
                    hasSuccess={false}
                  />
                </S.Agencia>
                <S.Conta>
                  <CustomInput
                    {...register('Conta', { required: true })}
                    label="Conta"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    hasError={!!errors.Conta}
                    hasSuccess={false}
                  />
                </S.Conta>
              </S.ContainerInput>




            </S.ContainerForm>
          </S.ContextStep>
          <S.ContainerButton>

            <S.ButtonAvançar disabled={!areAllFieldsFilled()} >
              Salvar
            </S.ButtonAvançar>
          </S.ContainerButton>
        </S.ContextStepContainer>
      </S.ContainerStep>
    </>
  );
}
