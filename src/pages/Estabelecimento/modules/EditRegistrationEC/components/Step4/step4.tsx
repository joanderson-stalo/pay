
import { ThemeColor } from '@/config/color';
import * as S from './styled';
import { CustomInput } from '@/components/Input/input';
import { useFormContext } from 'react-hook-form';
import { CustomSelect } from '@/components/Select/select';
import { optionsData } from '../Step1/option';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import { Infos } from './components/step5';
import { Loading } from '@/components/Loading/loading';
import { useEffect } from 'react';

interface IStep5 {
  Avançar: () => void;
  Voltar: () => void;
  isLoading: boolean;
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

    const mockFillInputsStep4 = () => {
      setValue('Banco', '001'); // Banco do Brasil, for example
      setValue('TipoDeConta', 'Corrente'); // Assuming 'Corrente' is one of the option values for TipoDeConta
      setValue('Agência', '1234-5');
      setValue('Conta', '67890-1');
      setValue('CpfCnpj', formatCpfOrCnpj('12345678909')); // This will mock an individual (CPF). If you want to mock a company (CNPJ) just use a valid CNPJ format instead.

      // If there are dynamic fornecedor fields
      const mockFornecedores = [
        { banco: '341', tipoConta: 'Poupança', agencia: '9876-5', conta: '43210-0', cpfCnpj: '98765432109' }, // Itaú, as an example
        // Add more fornecedores mock data if necessary...
      ];

      mockFornecedores.forEach((fornecedor, index) => {
        setValue(`Bancof${index+2}`, fornecedor.banco);
        setValue(`TipoDeContaf${index+2}`, fornecedor.tipoConta);
        setValue(`Agênciaf${index+2}`, fornecedor.agencia);
        setValue(`Contaf${index+2}`, fornecedor.conta);
        setValue(`CpfCnpjf${index+2}`, formatCpfOrCnpj(fornecedor.cpfCnpj));
      });
    };

    useEffect(() => {
      mockFillInputsStep4();
    }, []);



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
                    optionsData={optionsData}
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
                    optionsData={optionsData}
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
              <S.ContainerInput2>
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
              </S.ContainerInput2>
            </S.ContainerForm>
          </S.ContextStep>
          {renderInfosForFornecedores()}
          <S.ContainerButton>
            <S.ButtonVoltar onClick={Voltar}>Voltar</S.ButtonVoltar>
            <S.ButtonAvançar disabled={!areAllFieldsFilled()} onClick={Avançar}>
              Salvar
            </S.ButtonAvançar>
          </S.ContainerButton>
        </S.ContextStepContainer>
      </S.ContainerStep>
    </>
  );
}
