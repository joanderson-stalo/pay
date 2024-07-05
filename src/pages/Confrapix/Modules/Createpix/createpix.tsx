  import { useForm, SubmitHandler } from 'react-hook-form';
  import { CustomInputPix, CustomTextareaPix } from '@/components/Confrapix/confrapix';
  import * as S from './styled';
  import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance';
  import { BtnReturn } from '@/components/BtnReturn/btnReturn';
  import { TitleH } from '@/components/Title/title';
  import { useNavigate } from 'react-router-dom';
  import { toast } from 'react-toastify';
  import { useOrderPix } from '@/context/id/orderPixID';
  import axios, { AxiosError } from 'axios';
  import { useLogin } from '@/context/user.login';
  import { useState } from 'react';
  import { Loading } from '@/components/Loading/loading';
import { QRcodeCPF } from '../QrcodeCPF/qrcodeCPF';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';

  interface FormData {
    amount: string | undefined;
    dateExpiration: string | undefined;
    customerName: string;
    customerDocument: string;
    description: string;
  }

  export function ConfraPix() {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>();
    const navigate = useNavigate();
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [loading, setLoading] = useState(false);
    const { dataUser } = useLogin();
    const [transactionResponse, setTransactionResponse] = useState(null);

    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    };

    const amount = watch('amount');
    const customerDocument = watch('customerDocument');


    const onSubmit: SubmitHandler<FormData> = async data => {
      if (data.customerDocument && !data.customerName) {
        toast.error('Nome é obrigatório quando o CPF é informado');
        return;
      }

      if (!data.customerDocument && data.customerName) {
        toast.error('CPF é obrigatório quando o nome é informado');
        return;
      }

      if (data.customerDocument && data.customerDocument.replace(/\D/g, '').length !== 11) {
        toast.error('O CPF deve ter exatamente 11 dígitos.');
        return;
      }

      if (data.amount) {
        const amountNum = parseFloat(data.amount.replace(/\./g, '').replace(',', '.'));
        if (isNaN(amountNum) || !/^\d+(\.\d{1,2})?$/.test(amountNum.toString())) {
          toast.error('O valor deve ter no máximo duas casas decimais.');
          return;
        }
        if (amountNum <= 0) {
          toast.error('O valor deve ser maior que zero.');
          return;
        }
      }

      if (data.dateExpiration && new Date(data.dateExpiration) < today) {
        toast.error('A data de vencimento não pode ser anterior ao dia atual.');
        return;
      }

      const formattedData = {
        ...data,
        amount: data.amount ? parseFloat(data.amount.replace('.', '').replace(',', '.')) : 0,
        dateExpiration: data.dateExpiration ? `${data.dateExpiration} 23:59:59` : undefined,
        customerDocument: data.customerDocument.replace(/\D/g, ''),
        acquires: [{ id: 1 }],
        sellerId: dataUser?.seller_id,
      };

      try {
        setLoading(true);
        const response = await axios.post('https://api.confrapix.com.br/api/transaction/store', formattedData, {
          headers: {
            Authorization: `Bearer 2|we03xUflx4rWWktVqzAElAmv1vtlu7lGzZtyqTVre24cea11`,
          },
        });
        toast.success('Pix gerado com sucesso!');

        const transaction = response.data.response[0];
        setTransactionResponse(transaction);

      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
      } finally {
        setLoading(false);
      }
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setValue('customerDocument', value, { shouldValidate: true });
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value.replace(/\D/g, '');

      if (value.length === 0) {
        setValue('amount', undefined, { shouldValidate: true });
        return;
      }

      value = (parseFloat(value) / 100).toFixed(2).replace('.', ',');
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

      setValue('amount', value, { shouldValidate: true });
    };

    const isDisabled = !amount;

    const handleResetTransaction = () => {
      setTransactionResponse(null);
  };

    if (loading) {
      return <Loading />;
    }

    if(transactionResponse){
      return <QRcodeCPF onClick={handleResetTransaction} transaction={transactionResponse} />
    }

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
                type='text'
                placeholder="Digite o valor do pix que será gerado"
                required
                {...register('amount')}
                onChange={handleAmountChange}
              />

              <CustomInputPix
                label="Data de vencimento"
                placeholder="Digite a data que o pix irá expirar"
                type="date"
                min={formatDate(today)}
                defaultValue={formatDate(tomorrow)}
                {...register('dateExpiration', {
                  onChange: (e) => {
                    const data = e.target.value;
                    setValue('dateExpiration', data, { shouldValidate: true });
                  },
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
                {...register('customerName')}
              />
              <CustomInputPix
                label="CPF"
                placeholder="000.000.000-00"
                value={customerDocument}
                {...register('customerDocument')}
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
