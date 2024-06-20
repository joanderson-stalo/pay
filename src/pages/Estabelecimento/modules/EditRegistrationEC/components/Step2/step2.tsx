import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormContext } from 'react-hook-form';
import { baseURL } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerInput2, ContainerStep, ContextStep, ContextStepContainer, Line, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { LabelCustomInputMask } from "@/components/CustomInputMask";
import { Loading } from "@/components/Loading/loading";
import { SellerData } from "@/pages/Licenciado/modules/EditRegistrationLA/components/interface";
import { useLogin } from "@/context/user.login";
import { useEstablishment } from "@/context/useEstablishment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useTenantData } from "@/context";

interface IStep2 {
  Avançar: () => void;
  Voltar: () => void;
}

export function Step2({ Avançar, Voltar }: IStep2) {
  const { register, formState: { errors }, setValue, watch } = useFormContext();
  const [sellerData, setSellerData] = useState<SellerData | null>(null);
  const { dataUser } = useLogin();
  const { establishmentId } = useEstablishment();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const allFieldsFilled = !!watch('CEP') && !!watch('Endereco') && !!watch('Numero') && !!watch('Bairro') && !!watch('Cidade') && !!watch('Estado');

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

        const sellerData = response.data;
        setValue('CEP', sellerData.seller.address_cep);
        setValue('Endereco', sellerData.seller.address_street);
        setValue('Numero', sellerData.seller.address_number);
        setValue('Complemento', sellerData.seller.address_complement);
        setValue('Bairro', sellerData.seller.address_neighborhood);
        setValue('Cidade', sellerData.seller.address_city);
        setValue('Estado', sellerData.seller.address_state);
        setSellerData(response.data.seller);
      } catch (error) {
        console.error('Erro ao obter dados do vendedor:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSellerData();
  }, [establishmentId, dataUser?.token, setValue]);

  const handleSalvar = async () => {
    try {
      setLoading(true);

      const number =  watch('Numero')

      const updatedData = {
        address_cep: watch('CEP'),
        address_street: watch('Endereco'),
        address_number: String(number),
        address_complement: watch('Complemento'),
        address_neighborhood: watch('Bairro'),
        address_city: watch('Cidade'),
        address_state: watch('Estado'),
        type_document: sellerData?.type_document,
        email: watch('EmailEstabelecimento'),
        phone: watch('TelefoneEstabelecimento'),
        trading_name: watch('NomeFantasiaEstabelecimento'),
        document: sellerData?.document,
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
      {loading && <Loading />}
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Endereço</TitleStep>
            <Line />
            <ContainerForm>

              <ContainerInput>
                <LabelCustomInputMask
                  id="cep"
                  {...register('CEP')}
                  label='CEP'
                  mask="99999-999"
                  placeholder={'--.---.---'}
                  hasError={!!errors.CEP}
                />
                <CustomInput
                  {...register('Endereco')}
                  label='Endereço'
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.Endereco}
                />
                <CustomInput
                  {...register('Numero')}
                  label='Número'
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.Numero}
                />
              </ContainerInput>

              <ContainerInput>

                <CustomInput
                  {...register('Complemento')}
                  label='Complemento'
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.Complemento}
                />

<CustomInput
                  {...register('Bairro')}
                  label='Bairro'
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.Bairro}
                />
                <CustomInput
                  {...register('Cidade')}
                  label='Cidade'
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.Cidade}
                />


              </ContainerInput>



              <ContainerInput2>
                <CustomInput
                  {...register('Estado')}
                  label='Estado'
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.Estado}
                />
              </ContainerInput2>

            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={Voltar}>Voltar</ButtonVoltar>
            <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={handleSalvar}>Salvar</ButtonAvançar>
            <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={Avançar}>Avançar</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  )
}
