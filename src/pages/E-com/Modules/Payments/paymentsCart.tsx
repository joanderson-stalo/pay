import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton, ButtonContainer, ContainerInput, ContainerListProducts, ForwardButton, PaymentsTitle, Wrapper } from "./styled";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import Cookies from 'js-cookie';
import { InputCustom } from "@/components/Ecom/InputCustom/inputCustom";
import { Loading } from '@/components/Loading/loading';
import { ToggleableRadioButton } from '@/components/Ecom/RadioButton/radioButton';
import { Summary } from '@/components/Ecom/Summary/summary';
import { PaymentsSuccess } from './Modules/PaymentsSucess/paymentsCart';

interface FormData {
  cpftitular: string;
  nametitular: string;
  paymentMethod: string;
  recipientName: string;
  cpf: string;
  cep: string;
  bairro: string;
  endereco: string;
  cidade: string;
  numero: string;
  estado: string;
  complemento: string;
}

export function PaymentsCart() {
  const initialFormData = Cookies.get('userAddress') ? JSON.parse(Cookies.get('userAddress')!) : {
    cpftitular: '',
    nametitular: '',
    paymentMethod: '',
    recipientName: '',
    cpf: '',
    cep: '',
    bairro: '',
    endereco: '',
    cidade: '',
    numero: '',
    estado: '',
    complemento: ''
  };

  const cartItems = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')!) : [];

  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(initialFormData.paymentMethod);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const updatedFormData = {
        ...prevState,
        [name]: value
      };
      setTimeout(() => {
        Cookies.set('userAddress', JSON.stringify(updatedFormData), { expires: 7 });
      }, 0);
      return updatedFormData;
    });
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedPaymentMethod((prevValue: string) => prevValue === newValue ? '' : newValue);
    setFormData(prevState => {
      const updatedFormData = {
        ...prevState,
        paymentMethod: newValue
      };
      setTimeout(() => {
        Cookies.set('userAddress', JSON.stringify(updatedFormData), { expires: 7 });
      }, 0);
      return updatedFormData;
    });
  };

  useEffect(() => {
    const isCpftitularFilled = formData.cpftitular && formData.cpftitular.trim() !== '';
    const isNametitularFilled = formData.nametitular && formData.nametitular.trim() !== '';
    const isPaymentMethodSelected = formData.paymentMethod && formData.paymentMethod !== '';

    setIsFormValid(isCpftitularFilled && isNametitularFilled && isPaymentMethodSelected || false);
  }, [formData]);

  const handleFinalizePayment = async () => {
    setIsLoading(true);

    const cleanCpf = formData.cpftitular.replace(/[^\d]/g, '');

    const payload = {
      comment: "Terceira compra",
      multiple_address: false,
      shipping_id: 1,
      owner_id: 1,
      payment_type: formData.paymentMethod.toLowerCase(),
      address_cep: formData.cep,
      address_street: formData.endereco,
      address_number: formData.numero,
      address_complement: formData.complemento,
      address_neighborhood: formData.bairro,
      address_city: formData.cidade,
      address_state: formData.estado,
      address_recipient: formData.recipientName,
      address_recipient_document: `${cleanCpf}`,
      url_update: "http://urlparadarupdatenostatusdacompra",
      link_payment_object: "http://payment.com/1",
      payment_external_id: "abc123",
      buy_modelo: cartItems.map((item: { id: any; quantity: any; }) => ({
        modelo_id: item.id,
        quantity: item.quantity
      }))
    };



    try {

    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (isPaymentSuccessful) {
    return <PaymentsSuccess />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListProducts />
      <ContainerListProducts>
        <Wrapper>
          <ContainerInput>
            <InputCustom
              inputId="nametitular"
              label="Nome do titular"
              isRequired
              onChange={handleInputChange}
              value={formData.nametitular}
            />
            <InputCustom
              inputId="cpftitular"
              label="CPF do titular"
              mask="cpf"
              isRequired
              onChange={handleInputChange}
              value={formData.cpftitular}
            />
          </ContainerInput>
          <Summary />
        </Wrapper>

        <PaymentsTitle>Escolha a forma de pagamento:</PaymentsTitle>
        <ToggleableRadioButton
          label="PIX"
          inputId="paymentMethod"
          checked={selectedPaymentMethod === 'PIX'}
          onChange={handleRadioChange}
        />
        <ToggleableRadioButton
          label="Débito por comissão"
          inputId="paymentMethod"
          checked={selectedPaymentMethod === 'Débito por comissão'}
          onChange={handleRadioChange}
        />

        <ButtonContainer>
          <BackButton onClick={handleBack}>VOLTAR</BackButton>
          <ForwardButton onClick={handleFinalizePayment} disabled={!isFormValid}>finalizar</ForwardButton>
        </ButtonContainer>
      </ContainerListProducts>
    </>
  );
}
