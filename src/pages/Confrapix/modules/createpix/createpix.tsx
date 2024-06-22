import {
  CustomInputPix,
  CustomTextareaPix
} from '@/components/Confrapix/confrapix'
import * as S from './styled'
import { useTenantData } from '@/context'
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance'
import { BtnReturn } from '@/components/BtnReturn/btnReturn'
import { TitleH } from '@/components/Title/title'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';

interface FormData {
  valor: string | number
  dataNascimento: string
  name: string
  cpf: string
  description: string
}


export function ConfraPix() {

  const schema = Yup.object().shape({
    valor: Yup.number().required('Valor é obrigatório').positive('Valor deve ser positivo'),
    dataNascimento: Yup.string().required('Data de vencimento é obrigatória'),
    name: Yup.string().required('Nome é obrigatório'),
    cpf: Yup.string().required('CPF é obrigatório').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
    description: Yup.string()
  });


  // const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
  //   resolver: yupResolver(schema),
  //   defaultValues: {
  //     valor: '',
  //     dataNascimento: '',
  //     name: '',
  //     cpf: '',
  //     description: ''
  //   }
  // });

  return (
    <>
      <S.Container>
        <S.ContainerTitleHeader>
          <TitleH title="Confrapix" />
          <S.Description>Crie o QR Code e o copia e cola PIX</S.Description>
        </S.ContainerTitleHeader>

        <S.ContainerForm>
          <S.ContainerInput>
            <CustomInputPix
              label="Valor (R$)"
              placeholder="Digite o valor do pix que será gerado"
              required
            />

            <CustomInputPix
              label="Data de vencimento"
              placeholder="Digite a data que o pix irá expirar"
              required
            />
          </S.ContainerInput>

          <S.DescriptionInfo>
            Ao preencher as informações do destinatário do PIX, apenas a pessoa
            com o nome e CPF vinculados poderá realizar o pagamento.
          </S.DescriptionInfo>

          <S.ContainerInput>
            <CustomInputPix label="Nome" placeholder="Digite o nome completo" />

            <CustomInputPix label="CPF" placeholder="000.000.000-0" />
          </S.ContainerInput>

          <S.ContainerInput2>
            <CustomTextareaPix
              label="Descrição"
              placeholder="Digite uma breve descrição"
            />
          </S.ContainerInput2>
        </S.ContainerForm>

        <S.ContainerButton>
          <BtnReturn title="Cancelar" onClick={() => false} />
          <BtnAdvance onClick={() => false} title="Gerar Pix" />
        </S.ContainerButton>
      </S.Container>

      {/* primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} */}
    </>
  )
}
