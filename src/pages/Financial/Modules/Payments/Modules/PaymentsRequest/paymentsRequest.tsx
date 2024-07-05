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
import { CloudArrowUp, CheckCircle } from '@phosphor-icons/react';
import { Loading } from '@/components/Loading/loading';
import { baseURL } from '@/service/api';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import s3Client from '@/s3Config';
import { PutObjectCommand } from '@aws-sdk/client-s3';

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

export function PaymentsRequest() {
  const { register, setValue, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>({ mode: 'onChange' });
  const tenantData = useTenantData();
  const paymentType = watch('paymentType');

  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);

  const [fileUploaded, setFileUploaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { dataUser } = useLogin();
  const [cardData, setCardData] = useState({
    valorNotaFiscal: 0,
    valorTarifa: 0,
    valorReceber: 0
  });

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      setFileUploaded(true);
    } else {
      setFileUploaded(false);
    }
  };

  const uploadFileToS3 = async (file: File): Promise<string> => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/[-:.]/g, '');
    const fileNameWithTimestamp = `${formattedDate}${file.name.replace(/\s/g, '-')}`;

    const params = {
      Bucket: 'stalopay',
      Key: `${tenantData.name}/payments_request/${fileNameWithTimestamp}`,
      Body: file,
    };

    await s3Client.send(new PutObjectCommand(params));
    return `https://usc1.contabostorage.com/d6d39f0192924488b37d9be5d805e5e8:stalopay/${params.Key}`;
  };

  useEffect(() => {
    fetchData();
    fetchBank();
  }, []);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);

      let imageUrl = null;
      if (file) {
        imageUrl = await uploadFileToS3(file);
      }

      const paymentPayload = {
        payments: [{
          amount: cardData.valorNotaFiscal,
          amount_nf: cardData.valorNotaFiscal,
          receiver_id: dataUser?.seller_id,
          status: "requested",
          user_payer: "",
          nf_link: imageUrl,
          pix_key: data.pixkey || "",
          type_pix_key: data.pixkey?.replace(/\D/g, '').length === 11 ? 'cpf' : 'cnpj',
          type: data.paymentType,
          comment_text: data.comment_text || "",
          return_text: "",
          payment_date: ""
        }]
      };

      await axios.post(`${baseURL}payments/create`, paymentPayload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      toast.success('Pagamento solicitado com sucesso!');
      navigate(-1);

    } catch (error) {
      toast.error('Erro ao solicitar pagamento.');
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    const currentDate = new Date();
    const lastMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    const lastMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

    let apiUrl = `${baseURL}getStatementLA?startDate=${lastMonthStart.toISOString().split('T')[0]}&endDate=${lastMonthEnd.toISOString().split('T')[0]}`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      if (response.status === 200 && response.data.success) {
        const { total_in_account, total_inflows, total_outflows } = response.data;
        setCardData({
          valorNotaFiscal: total_in_account,
          valorTarifa: total_inflows,
          valorReceber: total_in_account
        });
      }
    } catch (error) {
      toast.error('Erro ao buscar dados.');
    } finally {
      setLoading(false);
    }
  };



  const fetchBank = async () => {
    let apiUrl = `${baseURL}seller/show/${dataUser?.seller_id}`;

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.ContainerTitle>
          <TitleH title="Solicitar pagamentos" />
          <S.TitlePage>Detalhes do pagamento</S.TitlePage>
        </S.ContainerTitle>

        <S.ContainerCard>
          <S.InfoContainer>
            <span>Licenciado ou operação que irá receber o pagamento:</span>
            <h3>{tenantData.page_title} - Operações</h3>
          </S.InfoContainer>

          <S.ContainerCardInfo>
            <CardInfo label="Valor nota fiscal" value={cardData.valorNotaFiscal} />
            <CardInfo label="Valor de tarifa" value={cardData.valorTarifa} />
            <CardInfo label="Valor a receber" value={cardData.valorReceber} />
          </S.ContainerCardInfo>
        </S.ContainerCard>

        <S.ContainerDados>
          <S.TitlePage>Dados bancários para recebimento</S.TitlePage>
          <S.FormRow>
            <S.FormGroup>
              <CustomSelect
                {...register('paymentType', { required: true })}
                optionsData={paymentOptions}
                placeholder="Clique para ver a lista"
                label="Tipo de pagamento"
                onChange={(selectedOption: { value: any; }) =>
                  setValue('paymentType', selectedOption.value, { shouldValidate: true })
                }
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

          <S.TitlePage>Anexar nota fiscal</S.TitlePage>
          <S.FileInputContainer>
            <S.HiddenInput
              type="file"
              id="file-upload"
              onChange={onFileInputChange}
            />
            <label htmlFor="file-upload">
              {fileUploaded ? <CheckCircle size={56} /> : <CloudArrowUp size={56} />}
              {fileUploaded ? <S.InputLabel>Arquivo anexado com sucesso!</S.InputLabel> : <S.InputLabel>Clique para buscar no seu computador</S.InputLabel>}
            </label>
          </S.FileInputContainer>
        </S.ContainerDados>
        <S.ButtonContainer>
          <S.CancelButton type="button" onClick={() => navigate(-1)}>Cancelar</S.CancelButton>
          <S.Button disabled={!isValid || !fileUploaded || !paymentType} type="submit">Solicitar</S.Button>
        </S.ButtonContainer>
      </S.Container>
    </form>
  );
}
