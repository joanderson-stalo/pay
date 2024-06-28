
import {  baseURL } from '@/config/color';
import * as S from './styled';
import { CustomInput } from '@/components/Input/input';
import { useFormContext } from 'react-hook-form';
import { CustomSelect } from '@/components/Select/select';
import { Loading } from '@/components/Loading/loading';
import { useEffect, useState } from 'react';
import { bancos } from '@/json/bancos';
import { accountType } from '@/json/accountType';
import axios from 'axios';
import { useLicensed } from '@/context/useLicensed';
import { useLogin } from '@/context/user.login';
import { useTenantData } from '@/context';

interface IStep5 {
  Avançar: () => void;
  Voltar: () => void;
  isLoading: boolean;
}

export function Step4({ Avançar, Voltar, isLoading }: IStep5) {
  const { licensedId } = useLicensed();
  const [loading, setLoading] = useState(false);
  const { dataUser } = useLogin();
  const {
    register,
    setValue,
    formState: { errors },
    getValues,
    watch
  } = useFormContext();



const areAllFieldsFilled = () => {
  if (!(
      !!watch('Banco') &&
      !!watch('TipoDeConta') &&
      !!watch('Agência') &&
      !!watch('Conta') &&
      !!watch('CpfCnpj') &&
      !!watch('pix')
  )) {
      return false;
  }



  return true;
};

const formatCpfOrCnpj = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, "");

  if (onlyNumbers.length > 11) {
    return onlyNumbers.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
      "$1.$2.$3/$4-$5"
    );
  }
  return onlyNumbers.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
    "$1.$2.$3-$4"
  );
};




const handleCpfCnpjChange = (event: { target: { value: any; }; }) => {
  const formattedValue = formatCpfOrCnpj(event.target.value);
  setValue('CpfCnpj', formattedValue);
};


  const cpfOuCnpjValue = watch('CpfCnpj');

  const mask =
    cpfOuCnpjValue && cpfOuCnpjValue.length > 14
      ? '99.999.999/9999-99'
      : '999.999.999-99';

      const quantidadeFornecedores = Object.keys(getValues())
      .filter(key => key.startsWith('Fornecedor'))
      .length;



      useEffect(() => {
        const fetchSellerData = async () => {
          setLoading(true);
          try {
            const response = await axios.get(
              `${baseURL}seller/show/${licensedId}`,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${dataUser?.token}`,
                },
              }
            );

            const sellerData = response.data;
            if (sellerData && sellerData.seller && sellerData.seller.banks && sellerData.seller.banks.length > 0) {
              const banco = sellerData.seller.banks[0];
              setValue('Banco', banco.code);
              setValue('Agência', banco.agency);
              setValue('Conta', banco.account);
              setValue('pix', banco.pix);
              setValue('TipoDeConta', banco.type_account);
              setValue('CpfCnpj', banco.document);
            }


          } catch (error) {
           
          } finally {
            setLoading(false);
          }
        };
        fetchSellerData();
      }, [licensedId, dataUser?.token, setValue]);

      const Banco = watch('Banco');
      const bancoSelecionado = bancos.options.find((option: { value: string; label: string }) => option.value === Banco);
      const tipoDeContaValue = watch('TipoDeConta');
      const tipoDeContaSelecionado = accountType.options.find((option: { value: string; label: string }) => option.value === tipoDeContaValue);

      const tenantData = useTenantData();

  return (
    <>
   {isLoading && <Loading />}
      <S.ContainerStep>
        <S.ContextStepContainer>
          <S.ContextStep>
            <S.TitleStep>Dados Bancários</S.TitleStep>
            <S.Line />
            <S.ContainerForm>
              <S.ContainerInput>

                <S.Banco>
                  <CustomSelect
                      {...register('Banco', { required: true })}
                      label="Banco"
                      optionsData={bancos}
                      value={bancoSelecionado}
                      placeholder={'Clique para ver a lista'}
                      hasError={!!errors.Banco}
                      onChange={(selectedOption: { value: string }) => {
                        setValue('Banco', selectedOption.value);
                      }}
                    />

                </S.Banco>

                <S.TipoConta>
                  <CustomSelect
                      {...register('TipoDeConta', { required: true })}
                      label="Tipo de Conta"
                      value={tipoDeContaSelecionado}
                      placeholder={''}
                      optionsData={accountType}
                      hasError={!!errors['Tipo de Conta']}
                      onChange={(selectedOption: { value: string }) => {
                        setValue('TipoDeConta', selectedOption.value);
                      }}
                    />
                </S.TipoConta>




              </S.ContainerInput>

              <S.ContainerInput>

              <S.Agencia>
                  <CustomInput
                    {...register('Agência', { required: true })}
                    label="Agência"
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    hasError={!!errors.Agência}
                    hasSuccess={false}
                  />
                </S.Agencia>

                <S.Conta>
                  <CustomInput
                    {...register('Conta', { required: true })}
                    label="Conta"
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    hasError={!!errors.Conta}
                    hasSuccess={false}
                  />
                </S.Conta>

                <S.ContainerInput2>

                  <CustomInput
                    key={mask}
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    {...register('CpfCnpj', { required: true })}
                    label="CPF/CNPJ"
                    placeholder="--.---.---/---.--"
                    hasError={!!errors.CpfCnpj}
                    onChange={handleCpfCnpjChange}
                  />
                </S.ContainerInput2>







              </S.ContainerInput>

              <S.ContainerInput>

                <S.Pix>
                  <CustomInput
                      {...register('pix', { required: true })}
                      label="Chave PIX"
                      colorInputDefault={tenantData.primary_color_identity}
                      colorInputSuccess={tenantData.secondary_color_identity}
                      hasError={!!errors.Agência}
                      hasSuccess={false}
                    />
                </S.Pix>

              </S.ContainerInput>








            </S.ContainerForm>
          </S.ContextStep>
          <S.ContainerButton>
            <S.ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}onClick={Voltar}>Voltar</S.ButtonVoltar>
            <S.ButtonAvançar
 primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!areAllFieldsFilled()} onClick={Avançar}>
              Salvar
            </S.ButtonAvançar>
          </S.ContainerButton>
        </S.ContextStepContainer>
      </S.ContainerStep>
    </>
  );
}
