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
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '@/components/Loading/loading'

interface IStep1 {
  Avançar: () => void
  BPJ: () => void
  BPF: () => void
}

export function PJ({ Avançar, BPF, BPJ }: IStep1) {
  const {
    register,
    setValue,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext()

  const [isLoading, setIsLoading] = useState(false)

  const allFieldsFilled =
    !!watch('CNPJEstabelecimento') &&
    !!watch('RazaoSocialEstabelecimento') &&
    !!watch('NomeFantasiaEstabelecimento') &&
    !!watch('DataCriacaoEstabelecimento') &&
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

  const handleLicenciado = () => {
    navigate('/licenciados')
  }



  const cnpjValue = watch('CNPJEstabelecimento');
  const cpfValue = watch('CPFEstabelecimento');
  



  const fetchCompanyDataByCNPJ = async (cnpj: string) => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cnpj/?cnpj=${cnpj}&token=YOUR_TOKEN`);
      const { result } = response.data;
      const { abertura, nome, fantasia } = result; // Destruturando o valor fantasia também
       
      setValue('DataCriacaoEstabelecimento', abertura);
      setValue('RazaoSocialEstabelecimento', nome);
      setValue('NomeFantasiaEstabelecimento', fantasia); // Adicionando essa linha
  
    } catch (error) {
      console.error('Error fetching company data by CNPJ:', error);
    } finally {
      setIsLoading(false)
    }
  };

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
    if (validateCNPJ(cnpjValue)) {
      fetchCompanyDataByCNPJ(cnpjValue);
    }
  }, [cnpjValue]);
  
useEffect(() => {
    if (validateCPF(cpfValue)) {
      fetchPersonDataByCPF(cpfValue.replace(/\D/g, ''));
    }
  }, [cpfValue]);



  return (


    <>

    {isLoading && <Loading />}

  

      <S.ContainerStep>
      <S.ContextStepContainer>
        <S.ContextStep>
          <S.ContainerDados>
            <S.TitleStep>Dados do Licenciado</S.TitleStep>
            <S.ContainerPJPF>
              <S.ButtonPJ active onClick={BPJ}>PJ</S.ButtonPJ>
              <S.ButtonPF active={false} onClick={BPF}>PF</S.ButtonPF>
            </S.ContainerPJPF>
          </S.ContainerDados>
          <S.Line />
          <S.ContainerForm>
            <S.ContainerInput>
              <LabelCustomInputMask
                {...register('CNPJEstabelecimento', { validate: validateCNPJ })}
                mask="99.999.999/9999-99"
                placeholder="--.---.---/---.--"
                hasError={!!errors.CNPJEstabelecimento}
                label="CNPJ"
              />
              <CustomInput
                {...register('RazaoSocialEstabelecimento')}
                label="Razão Social"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.RazaoSocialEstabelecimento}
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
              <LabelCustomInputMask
                {...register('DataCriacaoEstabelecimento', {
                  validate: validateDataCriacao
                })}
                label="Data de Criação"
                mask="99/99/9999"
                placeholder="dd/mm/aaaa"
                hasError={!!errors.DataCriacaoEstabelecimento}
              />
            </S.ContainerInput>
            <S.ContainerInput>
              <LabelCustomInputMask
                {...register('CPFEstabelecimento', { validate: validateCPF })}
                label="CPF do Sócio"
                mask="999.999.999-99"
                placeholder="---.---.---.--"
                hasError={!!errors.CPFEstabelecimento}
              />
              <CustomInput
                {...register('NomeSocioEstabelecimento')}
                label="Nome Completo do Sócio"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.NomeSocioEstabelecimento}
              />
            </S.ContainerInput>
            <S.ContainerInput>
              <LabelCustomInputMask
                {...register('NascimentoSocio', {
                  validate: validateDataCriacao
                })}
                label="Nascimento Sócio"
                mask="99/99/9999"
                placeholder="dd/mm/aaaa"
                hasError={!!errors.NascimentoSocio}
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
              <CustomInput
                {...register('EmailEstabelecimento', {
                  validate: validateEmail
                })}
                label="E-mail"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.EmailEstabelecimento}
              />
            </S.ContainerInput>
            <S.ContainerInput2>
              <CustomSelect
                optionsData={optionsData}
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
          <S.ButtonVoltar onClick={handleLicenciado}>Cancelar</S.ButtonVoltar>
          <S.ButtonAvançar disabled={!allFieldsFilled} onClick={handleAvancar}>Avançar</S.ButtonAvançar>
        </S.ContainerButton>
      </S.ContextStepContainer>
    </S.ContainerStep>



    </>
    
  )
}
