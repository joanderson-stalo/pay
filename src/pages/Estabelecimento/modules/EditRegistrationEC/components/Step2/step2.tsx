import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormContext } from 'react-hook-form';
import { ThemeColor } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerInput2, ContainerStep, ContextStep, ContextStepContainer, Line, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { LabelCustomInputMask } from "@/components/CustomInputMask";
import { Loading } from "@/components/Loading/loading";
import { SellerData } from "@/pages/Licenciado/modules/EditRegistrationLA/components/interface";
import { useLogin } from "@/context/user.login";
import { useEstablishment } from "@/context/useEstablishment";
import Swal from "sweetalert2";

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
  const allFieldsFilled = !!watch('CEP') && !!watch('Endereco') && !!watch('Numero') && !!watch('Bairro') && !!watch('Cidade') && !!watch('Estado');

  useEffect(() => {
    const fetchSellerData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(
          `https://api-pagueassim.stalopay.com.br/seller/show/${establishmentId}`,
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
  
      const updatedData = {
        address_cep: watch('CEP'),
        address_street: watch('Endereco'),
        address_number: watch('Numero'),
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
  
      await axios.put(`https://api-pagueassim.stalopay.com.br/seller/update/${establishmentId}`, updatedData, {
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
        cancelButtonColor: '#17ec3b',
        showCloseButton: true,
        closeButtonAriaLabel: 'Fechar modal'
        
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('Continuar clicado');
        } else {
          console.log('OK clicado');
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
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  hasError={!!errors.Endereco}
                />
              </ContainerInput>
              <ContainerInput>
                <CustomInput
                  {...register('Numero')}
                  label='Número'
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  hasError={!!errors.Numero}
                />
                <CustomInput
                  {...register('Complemento')}
                  label='Complemento'
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  hasError={!!errors.Complemento}
                />
              </ContainerInput>
              <ContainerInput>
                <CustomInput
                  {...register('Bairro')}
                  label='Bairro'
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  hasError={!!errors.Bairro}
                />
                <CustomInput
                  {...register('Cidade')}
                  label='Cidade'
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  hasError={!!errors.Cidade}
                />
              </ContainerInput>
              <ContainerInput2>
                <CustomInput
                  {...register('Estado')}
                  label='Estado'
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  hasError={!!errors.Estado}
                />
              </ContainerInput2>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar onClick={Voltar}>Voltar</ButtonVoltar>
            <ButtonAvançar disabled={!allFieldsFilled} onClick={handleSalvar}>Salvar</ButtonAvançar>
            <ButtonAvançar disabled={!allFieldsFilled} onClick={Avançar}>Avançar</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  )
}
