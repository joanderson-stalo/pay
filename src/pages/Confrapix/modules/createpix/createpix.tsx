import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomInputPix, CustomTextareaPix } from '@/components/Confrapix/confrapix';
import * as S from './styled';
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance';
import { BtnReturn } from '@/components/BtnReturn/btnReturn';
import { TitleH } from '@/components/Title/title';
import { useNavigate } from 'react-router-dom';

interface FormData {
  amount: string | undefined;
  dateExpiration: string | undefined;
  customer_name: string;
  customer_document: string;
  description: string;
}

export function ConfraPix() {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>();
  const navigate = useNavigate();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const amount = watch('amount');
  const dateExpiration = watch('dateExpiration');
  const customer_document = watch('customer_document');

  const onSubmit: SubmitHandler<FormData> = data => {
    const formattedData = {
      ...data,
      amount: parseFloat(data.amount || "0"),
      dateExpiration: data.dateExpiration ? `${data.dateExpiration} 23:59:59` : undefined,
      customer_document: data.customer_document.replace(/\D/g, ''),
      acquires: [{ id: 1 }]
    };

    console.log(formattedData);
  };

  const isDisabled = !amount || !dateExpiration;

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setValue('customer_document', value, { shouldValidate: true });
  };

  return (
    <>
      <S.Container>
        <S.ContainerTitleHeader>
          <TitleH title="Confrapix" />
          <S.Description>Crie o QR Code e o copia e cola PIX</S.Description>
        </S.ContainerTitleHeader>

        <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <S.ContainerInput>
            <CustomInputPix
              label="Valor (R$)"
              placeholder="Digite o valor do pix que será gerado"
              required
              {...register('amount')}
              onChange={(e) => {
                const valorStr = e.target.value === "" ? undefined : e.target.value;
                setValue('amount', valorStr, { shouldValidate: true });
              }}
            />

<CustomInputPix
  label="Data de vencimento"
  placeholder="Digite a data que o pix irá expirar"
  type="date"
  required
  min={formatDate(today)}
  {...register('dateExpiration', {
    onChange: (e) => {
      const data = e.target.value;
      setValue('dateExpiration', data, { shouldValidate: true });
    }
  })}
/>


          </S.ContainerInput>

          <S.DescriptionInfo>
            Ao preencher as informações do destinatário do PIX, apenas a pessoa
            com o nome e CPF vinculados poderá realizar o pagamento.
          </S.DescriptionInfo>

          <S.ContainerInput>
            <CustomInputPix
              label="Nome"
              placeholder="Digite o nome completo"
              {...register('customer_name')}
            />
            <CustomInputPix
              label="CPF"
              placeholder="000.000.000-00"
              value={customer_document}
              {...register('customer_document')}
              onChange={handleCpfChange}
            />
          </S.ContainerInput>

          <S.ContainerInput2>
            <CustomTextareaPix
              label="Descrição"
              placeholder="Digite uma breve descrição"
              {...register('description')}
            />
          </S.ContainerInput2>

          <S.ContainerButton>
            <BtnReturn title="Cancelar" onClick={() => navigate(-1)} />
            <BtnAdvance title="Gerar Pix" onClick={handleSubmit(onSubmit)} disabled={isDisabled} />
          </S.ContainerButton>
        </S.ContainerForm>
      </S.Container>
    </>
  );
}
