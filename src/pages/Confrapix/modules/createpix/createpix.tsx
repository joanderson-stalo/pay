  import { useForm, SubmitHandler } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  import * as Yup from 'yup';
  import { CustomInputPix, CustomTextareaPix } from '@/components/Confrapix/confrapix';
  import * as S from './styled';
  import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance';
  import { BtnReturn } from '@/components/BtnReturn/btnReturn';
  import { TitleH } from '@/components/Title/title';
  import { useNavigate } from 'react-router-dom';

  interface FormData {
    amount: string;
    dateExpiration: string | undefined;
    customer_name: string;
    customer_document: string;
    description: string;
  }

  const today = new Date();
  const todayString = today.toISOString().split('T')[0];

  const schema = Yup.object().shape({
    amount: Yup.string().required('Valor é obrigatório'),
    dateExpiration: Yup.string().test(
      'minDate',
      'A data de vencimento não pode ser inferior ao dia atual',
      (value) => !value || new Date(value) >= today
    ),
    customer_name: Yup.string().test('customer-name', 'Nome é obrigatório se o CPF for preenchido', function (value) {
      const { customer_document } = this.parent;
      return !customer_document || (customer_document && value);
    }),
    customer_document: Yup.string()
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
      .test('customer-document', 'CPF é obrigatório se o nome for preenchido', function (value) {
        const { customer_name } = this.parent;
        return !customer_name || (customer_name && value);
      }),
    description: Yup.string(),
  });

  export function ConfraPix() {
    const { register, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<FormData>({
      resolver: yupResolver(schema) as any,
      mode: 'onChange',
    });
    const navigate = useNavigate();


    const customer_document = watch('customer_document');

    const onSubmit: SubmitHandler<FormData> = data => {
      const formattedData = {
        ...data,
        amount: parseFloat(data.amount),
        dateExpiration: data.dateExpiration ? `${data.dateExpiration} 23:59:59` : undefined,
        customer_document: data.customer_document.replace(/\D/g, ''),
        acquires: [{ id: 1 }]
      };

      console.log(formattedData);
    };

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
                  const valorStr = e.target.value === "" ? "" : e.target.value;
                  setValue('amount', valorStr, { shouldValidate: true });
                }}
              />
              {errors.amount && <span>{errors.amount.message}</span>}

              <CustomInputPix
                label="Data de vencimento"
                placeholder="Digite a data que o pix irá expirar"
                type="date"
                required
                min={todayString}
                {...register('dateExpiration', {
                  onChange: (e) => {
                    const data = e.target.value;
                    setValue('dateExpiration', data, { shouldValidate: true });
                  }
                })}
              />
              {errors.dateExpiration && <span>{errors.dateExpiration.message}</span>}
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
              {errors.customer_name && <span>{errors.customer_name.message}</span>}

              <CustomInputPix
                label="CPF"
                placeholder="000.000.000-00"
                value={customer_document}
                {...register('customer_document')}
                onChange={handleCpfChange}
              />
              {errors.customer_document && <span>{errors.customer_document.message}</span>}
            </S.ContainerInput>

            <S.ContainerInput2>
              <CustomTextareaPix
                label="Descrição"
                placeholder="Digite uma breve descrição"
                {...register('description')}
              />
              {errors.description && <span>{errors.description.message}</span>}
            </S.ContainerInput2>

            <S.ContainerButton>
              <BtnReturn title="Cancelar" onClick={() => navigate(-1)} />
              <BtnAdvance title="Gerar Pix" onClick={handleSubmit(onSubmit)} disabled={!isValid} />
            </S.ContainerButton>
          </S.ContainerForm>
        </S.Container>
      </>
    );
  }
