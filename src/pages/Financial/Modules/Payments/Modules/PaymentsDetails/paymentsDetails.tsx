import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TitleH } from '@/components/Title/title';
import { CardInfo } from '@/components/CardInfo/cardInfo';
import { CustomSelect } from '@/components/Select/select';
import { CustomInput } from '@/components/Input/input';
import * as S from './styled';
import { useTenantData } from '@/context';
import { bancos } from '@/json/bancos';
import { accountType } from '@/json/accountType';
import { paymentOptions } from '@/json/paymentOptions';
import { CloudArrowUp, CheckCircle, ArrowLineDown } from '@phosphor-icons/react';
import { Loading } from '@/components/Loading/loading';
import { baseURL } from '@/config/color';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import s3Client from '@/s3Config';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { usePaymentID } from '@/context/id/paymentsID';

interface FormData {
  paymentType: string;
  cpfCnpjTitular: string;
  pixkey?: string;
  agency?: string;
  account?: string;
  bankName?: string;
  accountType?: string;
  comment_text?: string;
}

interface PaymentData {
  id: number;
  amount: number;
  amount_nf: number;
  receiver_id: number;
  status: string;
  nf_link: string;
  type: string;
  pix_key: string;
  type_pix_key: string;
  comprovante_link: string;
}


export function PaymentsDetails() {
  const { register, setValue, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>({ mode: 'onChange' });
  const tenantData = useTenantData();
  const paymentType = watch('paymentType');
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const { selectedPaymentID} = usePaymentID();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const { dataUser } = useLogin();




  useEffect(() => {
    fetchData();
    fetchBank();
  }, []);

  const fetchData = async () => {


    let apiUrl = `${baseURL}payments/show/1`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      if (response.status === 200 && response.data.success) {
        setPaymentData(response.data.payment);
        setValue('paymentType', response.data.payment.type);
        setValue('pixkey', response.data.payment.pix_key);
      }

    } catch (error) {

    } finally {
      setLoading(false);
    }
  };



  const fetchBank = async () => {
    let apiUrl = `${baseURL}seller/show/${selectedPaymentID}`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      if (response.status === 200 && response.data.success) {
        const { banks } = response.data.seller;


        if (banks && banks.length > 0) {
          const bankInfo = banks[0];
          setValue('agency', bankInfo.agency);
          setValue('account', bankInfo.account);
          setValue('bankName', bankInfo.code);
          setValue('accountType', bankInfo.type_account);
          const formattedCpfCnpj = formatCpfCnpj(bankInfo.document);
          setValue('cpfCnpjTitular', formattedCpfCnpj);
        }
      }


    } catch (error) {
      toast.error('Erro ao buscar dados.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  function formatCpfCnpj(value: string): string {
    const cleanValue = value.replace(/[^\d]/g, '');
    if (cleanValue.length <= 11) {
      return cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    } else {
      return cleanValue.slice(0, 14).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
    }
  }

  function handleDelete(event: React.KeyboardEvent<HTMLInputElement>) {
    const selectionStart = event.currentTarget.selectionStart;
    const selectionEnd = event.currentTarget.selectionEnd;

    if (selectionStart !== null && selectionEnd !== null) {
      if (selectionStart === selectionEnd || selectionStart === selectionEnd - 1) {
        const value = event.currentTarget.value;
        const cursorPosition = selectionStart;

        if (event.key === 'Backspace' && cursorPosition !== 0 && (value[cursorPosition - 1] === '.' || value[cursorPosition - 1] === '-')) {
          event.currentTarget.value = value.slice(0, cursorPosition - 1) + value.slice(cursorPosition);
          event.currentTarget.selectionStart = cursorPosition - 1;
          event.currentTarget.selectionEnd = cursorPosition - 1;
          event.preventDefault();
        }
      }
    }
  }

  const getStatusDescription = (status: string | undefined) => {
    switch (status) {
      case 'requested':
        return 'Pagamento em análise';
      case 'closed':
        return 'Pagamento efetuado';
      case 'returned':
        return 'Pagamento recusado';
      default:
        return 'Status desconhecido';
    }
  };


  return (
    <>
      <S.Container>
        <S.ContainerTitle>
          <TitleH title="Detalhes do pagamento" />
          <S.ContainerStatus>  status: <S.Status>{getStatusDescription(paymentData?.status)}</S.Status></S.ContainerStatus>
          <S.TitlePage>Detalhes do pagamento</S.TitlePage>
        </S.ContainerTitle>

        <S.ContainerCard>
          <S.InfoContainer>
            <span>Licenciado ou operação que irá receber o pagamento:</span>
            <h3>{tenantData.page_title} - Operações</h3>
          </S.InfoContainer>

          <S.ContainerCardInfo>
          <CardInfo label="Valor nota fiscal" value={paymentData?.amount_nf || 0} />
          <CardInfo label="Valor de tarifa" value={(paymentData?.amount ?? 0) - (paymentData?.amount_nf ?? 0)} />

              <CardInfo label="Valor a receber" value={paymentData?.amount || 0} />
          </S.ContainerCardInfo>
        </S.ContainerCard>

        <S.ContainerDados>
          <S.TitlePage>Dados bancários para recebimento</S.TitlePage>
          <S.FormRow>
            <S.FormGroup>
            <CustomInput
                  {...register('paymentType', { required: true })}
                  label="Tipo de pagamento"
                  placeholder="Clique para ver a lista"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  disabled
                />
            </S.FormGroup>
            <S.FormGroup>
              <CustomInput
                {...register('cpfCnpjTitular', { required: true })}
                label="CPF ou CNPJ do titular"
                placeholder="000.000.000-00/00.000.000/0000-00"
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                disabled
                onChange={(e) => {
                  setValue('cpfCnpjTitular', formatCpfCnpj(e.target.value), { shouldValidate: true });
                }}
                onKeyDown={(e) => handleDelete(e)}
              />
            </S.FormGroup>
          </S.FormRow>

          {paymentType === 'pix' && (
            <S.FormRow>
              <S.FormGroup>
                <CustomInput
                  {...register('pixkey', { required: paymentType === 'pix' ? true : false })}
                  label="Chave Pix"
                  placeholder="00000-0"
                  disabled
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                />
              </S.FormGroup>
            </S.FormRow>
          )}

          {paymentType !== 'pix' && (
            <>
              <S.FormRow>
                <S.FormGroup>
                  <CustomInput
                    {...register('agency', { required: paymentType === 'ted' ? true : false })}
                    label="Agência"
                    placeholder="00000"
                    disabled
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <CustomInput
                    {...register('account', { required: paymentType === 'ted' ? true : false })}
                    label="Conta"
                    disabled
                    placeholder="00000-0"
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                  />
                </S.FormGroup>

                <S.FormGroup>
                <CustomInput
                     {...register('bankName', { required: paymentType === 'ted' ? true : false })}
                     label="Banco"
                     disabled
                    placeholder="00000-0"
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                  />
                </S.FormGroup>
                <S.FormGroup>
                <CustomInput
                      {...register('accountType', { required: paymentType === 'ted' ? true : false })}
                      label="Tipo de conta"
                      disabled
                    placeholder="00000-0"
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                  />

                </S.FormGroup>
              </S.FormRow>
            </>
          )}

<S.TitlePage>Baixar arquivos</S.TitlePage>
<S.SubTitle>Clique nos arquivos que deseja baixar no seu dispositivo</S.SubTitle>



<S.ContainerLink>
{paymentData?.nf_link && (<S.InvoiceLink href={paymentData?.nf_link} target="_blank">
  <ArrowLineDown weight="bold" />
  Nota Fiscal
</S.InvoiceLink>)}


{paymentData?.comprovante_link && (<S.InvoiceLink href={paymentData?.comprovante_link} target="_blank">
  <ArrowLineDown weight="bold" />
  Comprovante
</S.InvoiceLink>)}

</S.ContainerLink>




        </S.ContainerDados>



        <S.ButtonContainer>
          <S.CancelButton type="button" onClick={() => navigate(-1)}>Cancelar</S.CancelButton>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
