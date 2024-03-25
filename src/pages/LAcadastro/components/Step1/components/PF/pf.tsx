import { useFormContext } from 'react-hook-form'
import * as S from './styled'
import { CustomInput } from '@/components/Input/input'
import { LabelCustomInputMask } from '@/components/CustomInputMask'
import {  validateCPF } from 'validations-br'
import { validateDataCriacao } from '@/utils/dataValid'
import { validateTelefone } from '@/utils/telefoneValid'
import { validateEmail } from '@/utils/validateEmail'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/Loading/loading'
import { useTenantData } from '@/context'

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
    watch
  } = useFormContext()

  const [isLoading, setIsLoading] = useState(false)

  const allFieldsFilled =
    !!watch('NascimentoSocio') &&
    !!watch('CPFEstabelecimento') &&
    !!watch('NomeSocioEstabelecimento') &&
    !!watch('EmailEstabelecimento') &&
    !!watch('TelefoneEstabelecimento')


  const navigate = useNavigate()

  const  handleLicenciado = () => {
      navigate('/sellers-la')
  }

  const cpfValue = watch('CPFEstabelecimento');
  const fetchPersonDataByCPF = async (cpf: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${cpf}&token=119905575VQLhxBIJgu216485880`);

      const { result } = response.data;
      const { nome_da_pf, data_nascimento } = result;

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

  const tenantData = useTenantData();

  return (
    <>
    {isLoading && <Loading />}
     <S.ContainerStep>
      <S.ContextStepContainer>
        <S.ContextStep>
          <S.ContainerDados>
            <S.TitleStep>Dados do Licenciado</S.TitleStep>
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
                {...register('NomeSocioEstabelecimento')}
                label="Nome Completo"
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                hasError={!!errors.NomeSocioEstabelecimento}
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
            <S.ContainerInput>
              <CustomInput
                {...register('EmailEstabelecimento', {
                  validate: validateEmail
                })}
                label="E-mail"
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                hasError={!!errors.EmailEstabelecimento}
              />

            </S.ContainerInput>

          </S.ContainerForm>
        </S.ContextStep>
        <S.ContainerButton>
          <S.ButtonVoltar onClick={handleLicenciado} >Cancelar</S.ButtonVoltar>
          <S.ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={Avançar}>Avançar</S.ButtonAvançar>
        </S.ContainerButton>
      </S.ContextStepContainer>
    </S.ContainerStep>
    </>
  )
}
