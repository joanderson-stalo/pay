import {  baseURL } from '@/config/color'
import { useFormContext } from 'react-hook-form'
import {
  ButtonAvançar,
  ButtonPF,
  ButtonPJ,
  ButtonVoltar,
  ContainerButton,
  ContainerDados,
  ContainerForm,
  ContainerInput,
  ContainerInput2,
  ContainerPJPF,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  TitleStep
} from './styled'
import { CustomInput } from '@/components/Input/input'
import { LabelCustomInputMask } from '@/components/CustomInputMask'
import { validateCNPJ, validateCPF } from 'validations-br'
import { validateDataCriacao } from '@/utils/dataValid'
import { validateTelefone } from '@/utils/telefoneValid'
import { validateEmail } from '@/utils/validateEmail'
import { CustomSelect } from '@/components/Select/select'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLogin } from '@/context/user.login'
import { useEstablishment } from '@/context/useEstablishment'
import { optionsCnae } from '@/json/cnae'
import Swal from 'sweetalert2'
import { Loading } from '@/components/Loading/loading'
import { useNavigate } from 'react-router-dom'
import { useTenantData } from '@/context'

interface IStep1 {
  Avançar: () => void

}

export function PJ({ Avançar }: IStep1) {
  const {
    register,
    setValue,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext()

  const { dataUser } = useLogin();
  const { establishmentId } = useEstablishment();

  const [loading, setLoading] = useState(false);
  const [sellerData, setSellerData] = useState(null);
  const [typeDocument, setTypeDocument] = useState(null);
  const navigate = useNavigate()


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

      Avançar()
  }

  useEffect(() => {
    const fetchSellerData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseURL}seller/show/${establishmentId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${dataUser?.token}`,
            },
          }
        );
        setSellerData(response.data.seller);
        setValue('EmailEstabelecimento', response.data.seller.email);
        setValue('CNPJEstabelecimento', response.data.seller.document);
        setValue('RazaoSocialEstabelecimento', response.data.seller.company_name);
        setValue('NomeFantasiaEstabelecimento', response.data.seller.trading_name);
        const dataCriacao = new Date(response.data.seller.opening_date).toLocaleDateString('pt-BR');
        setValue('DataCriacaoEstabelecimento', dataCriacao);
        const nascimentoSocio = new Date(response.data.seller.owner_birthday).toLocaleDateString('pt-BR');
        setValue('NascimentoSocio', nascimentoSocio);
        setValue('CPFEstabelecimento', response.data.seller.owner_cpf);
        setValue('TelefoneEstabelecimento', response.data.seller.phone);
        setValue('NomeSocioEstabelecimento', response.data.seller.owner_name);
        setValue('AreaAtuacaoEstabelecimento', response.data.seller.mcc);
        setTypeDocument(response.data.seller.type_document);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setSellerData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchSellerData();
  }, []);

  const areaAtuacaoValue = watch('AreaAtuacaoEstabelecimento');


  const handleSalvar = async () => {
    try {
      setLoading(true);

      const formatDate = (dateString: { split: (arg0: string) => [any, any, any] }) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
      };

      const updatedData = {
        mcc: areaAtuacaoValue,
        company_name: watch('RazaoSocialEstabelecimento'),
        trading_name: watch('NomeFantasiaEstabelecimento'),
        opening_date: formatDate(watch('DataCriacaoEstabelecimento')),
        owner_birthday: formatDate(watch('NascimentoSocio')),
        owner_cpf: watch('CPFEstabelecimento'),
        owner_name: watch('NomeSocioEstabelecimento'),
        email: watch('EmailEstabelecimento'),
        phone: watch('TelefoneEstabelecimento'),
        document: watch('CNPJEstabelecimento'),
        type_document: typeDocument
      };

      await axios.put(`${baseURL}seller/update/${establishmentId}`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });

      setLoading(false);

      Swal.fire({
        icon: 'success',
        title: 'Licenciado atualizado com sucesso!',
        showConfirmButton: true,
        confirmButtonText: 'Continuar',
        showCancelButton: true,
        cancelButtonText: 'OK',
        showCloseButton: true,
        closeButtonAriaLabel: 'Fechar modal'
      }).then((result) => {
        if (result.isConfirmed) {
          Avançar();
        } else {
          handleEC();
        }
      });
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao atualizar dados',
        text: 'Ocorreu um erro ao tentar atualizar os dados do licenciado. Por favor, tente novamente mais tarde.',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleEC = () => {
    navigate('/sellers-ec')
  }

  const tenantData = useTenantData();

  return (
    <>
    {loading && <  Loading />}
      <ContainerStep>
      <ContextStepContainer>
        <ContextStep>
          <ContainerDados>
            <TitleStep>Dados do Estabelecimento</TitleStep>

          </ContainerDados>
          <Line />
          <ContainerForm>
            <ContainerInput>
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
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity
}
                hasError={!!errors.RazaoSocialEstabelecimento}
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


            </ContainerInput>



            <ContainerInput>
              <CustomInput
                {...register('NomeFantasiaEstabelecimento')}
                label="Nome Fantasia"
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity
}
                hasError={!!errors.NomeFantasiaEstabelecimento}
              />

<LabelCustomInputMask
                {...register('CPFEstabelecimento', { validate: validateCPF })}
                label="CPF"
                mask="999.999.999-99"
                placeholder="---.---.---.--"
                hasError={!!errors.CPFEstabelecimento}
              />
              <CustomInput
                {...register('NomeSocioEstabelecimento')}
                label="Nome do Sócio"
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity
}
                hasError={!!errors.NomeSocioEstabelecimento}
              />




            </ContainerInput>



            <ContainerInput>
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
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity
}
                hasError={!!errors.EmailEstabelecimento}
              />
            </ContainerInput>


            <ContainerInput2>
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
            </ContainerInput2>


          </ContainerForm>
        </ContextStep>
        <ContainerButton>
        <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button'   disabled={!allFieldsFilled} onClick={handleEC} >Cancelar</ButtonVoltar>
          <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button'  disabled={!allFieldsFilled} onClick={handleSalvar}>Salvar</ButtonAvançar>
        <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}  type='button' disabled={!allFieldsFilled} onClick={handleAvancar}>
          Avançar
        </ButtonAvançar>
        </ContainerButton>
      </ContextStepContainer>
    </ContainerStep>
    </>
  )
}
