import { ThemeColor } from '@/config/color'
import { useFormContext } from 'react-hook-form'
import * as S from './styled'
import { CustomInput } from '@/components/Input/input'
import { LabelCustomInputMask } from '@/components/CustomInputMask'
import { validateCNPJ, validateCPF } from 'validations-br'
import { validateDataCriacao } from '@/utils/dataValid'
import { validateTelefone } from '@/utils/telefoneValid'
import { validateEmail } from '@/utils/validateEmail'
import { CustomSelect } from '@/components/Select/select'
import { optionsData } from './option'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/Loading/loading'
import { optionsCnae } from '@/json/cnae'

interface IStep1 {
  Avançar: () => void
  BPJ: () => void
  BPF: () => void
}

export function PF({ Avançar, BPF, BPJ }: IStep1) {
  const {
    register,
    setValue,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext()

  const [isLoading, setIsLoading] = useState(false)

  const allFieldsFilled =
    !!watch('NomeFantasiaEstabelecimento') &&
    !!watch('NascimentoSocio') &&
    !!watch('CPFEstabelecimento') &&
    !!watch('NomeSocioEstabelecimento') &&
    !!watch('EmailEstabelecimento') &&
    !!watch('AreaAtuacaoEstabelecimento') &&
    !!watch('TelefoneEstabelecimento')

  const handleAvancar = async () => {
    const result = await trigger()
    if (
      result &&
      !errors.CNPJEstabelecimento &&
      !errors.CPFEstabelecimento &&
      allFieldsFilled &&
      formIsValid
    ) {
      Avançar()
    }
  }

  const navigate = useNavigate()

  const handleEstabelecimentos = () => {
    navigate('/sellers-ec')
  }

  const cpfValue = watch('CPFEstabelecimento');
  const fetchPersonDataByCPF = async (cpf: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${cpf}&token=119905575VQLhxBIJgu216485880`);

      const { result } = response.data;
      const { nome_da_pf, data_nascimento } = result;

      console.log(nome_da_pf, data_nascimento)

      setValue('NomeSocioEstabelecimento', nome_da_pf);
      setValue('NascimentoSocio', data_nascimento);

    } catch (error) {
      console.error('Error fetching person data by CPF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (validateCPF(cpfValue)) {
      fetchPersonDataByCPF(cpfValue.replace(/\D/g, ''));
    }
  }, [cpfValue]);

  const areaAtuacaoValue = watch('AreaAtuacaoEstabelecimento');


  return (
    <>
    {isLoading && <Loading />}
    <S.ContainerStep>
      <S.ContextStepContainer>
        <S.ContextStep>
          <S.ContainerDados>
            <S.TitleStep>Dados do Estabelecimento</S.TitleStep>
            <S.ContainerPJPF>
            <S.ButtonPJ active={false} onClick={BPJ}>PJ</S.ButtonPJ>
            <S.ButtonPF active onClick={BPF}>PF</S.ButtonPF>
            </S.ContainerPJPF>
          </S.ContainerDados>
          <S.Line />
          <S.ContainerForm>
            <S.ContainerInput>
            <LabelCustomInputMask
                {...register('CPFEstabelecimento', { validate: validateCPF })}
                label="CPF"
                mask="999.999.999-99"
                placeholder="---.---.---.--"
                hasError={!!errors.CPFEstabelecimento}
              />
              <LabelCustomInputMask
                {...register('NascimentoSocio', {
                  validate: validateDataCriacao
                })}
                label="Data de Nascimento"
                mask="99/99/9999"
                placeholder="dd/mm/aaaa"
                hasError={!!errors.NascimentoSocio}
              />
            </S.ContainerInput>
            <S.ContainerInput>
            <CustomInput
                {...register('NomeFantasiaEstabelecimento')}
                label="Nome Fantasia"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.NomeFantasiaEstabelecimento}
              />

              <CustomInput
                {...register('NomeSocioEstabelecimento')}
                label="Nome Completo"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.NomeSocioEstabelecimento}
              />
            </S.ContainerInput>
            <S.ContainerInput>
              <CustomInput
                {...register('EmailEstabelecimento', {
                  validate: validateEmail
                })}
                label="E-mail"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.EmailEstabelecimento}
              />
              <LabelCustomInputMask
                {...register('TelefoneEstabelecimento', {
                  validate: validateTelefone
                })}
                label="Telefone/Celular"
                mask="(99) 99999-9999"
                placeholder="(--) ----.----"
                hasError={!!errors.TelefoneEstabelecimento}
              />
            </S.ContainerInput>
            <S.ContainerInput2>
              <CustomSelect
                optionsData={optionsCnae}
                value={optionsCnae.options.find(option => option.value === areaAtuacaoValue)}
               {...register('AreaAtuacaoEstabelecimento')}
               placeholder="Digite aqui ou clique para ver a lista"
               label="Área de Atuação"
               onChange={(selectedOption: { value: string }) => {
                 setValue('AreaAtuacaoEstabelecimento', selectedOption.value)
               }}
               hasError={!!errors.AreaAtuacaoEstabelecimento}
              />
              <button>Pesquise pelo CNAE ou Nome</button>
            </S.ContainerInput2>
          </S.ContainerForm>
        </S.ContextStep>
        <S.ContainerButton>
          <S.ButtonVoltar onClick={ handleEstabelecimentos} >Cancelar</S.ButtonVoltar>
          <S.ButtonAvançar disabled={!allFieldsFilled} onClick={Avançar}>Avançar</S.ButtonAvançar>
        </S.ContainerButton>
      </S.ContextStepContainer>
    </S.ContainerStep>
    </>

  )
}
