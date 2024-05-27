import { useState, ChangeEvent, useEffect } from 'react';
import { BackButton, ButtonContainer, ContainerInput, ContainerListProducts, ForwardButton, PaymentsTitle, Wrapper } from "./styled";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import Cookies from 'js-cookie';
import { InputCustom } from "@/components/Ecom/InputCustom/inputCustom";
import { Loading } from '@/components/Loading/loading';
import { ToggleableRadioButton } from '@/components/Ecom/RadioButton/radioButton';
import { Summary } from '@/components/Ecom/Summary/summary';
import { PaymentsSuccess } from './Modules/PaymentsSucess/paymentsCart';
import {BreadcrumbIcon} from '@/components/Ecom/BreadcrumbIcon/breadcrumbIcon';


interface FormData {
  cpftitular: string;
  nametitular: string;
  paymentMethod: string;
}

export function PaymentsCart() {
  const initialFormData = Cookies.get('userAddress') ? JSON.parse(Cookies.get('userAddress')!) : {
    cpftitular: '',
    nametitular: '',
    paymentMethod: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
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
    setSelectedPaymentMethod(prevValue => prevValue === newValue ? '' : newValue);
  };

  useEffect(() => {
    console.log("FormData:", formData);
    console.log("Selected Payment Method:", selectedPaymentMethod);
    const isEveryFieldFilled = Object.values(formData).every(value => (value || '').trim() !== '');
    setIsFormValid(isEveryFieldFilled && selectedPaymentMethod !== '');
  }, [formData, selectedPaymentMethod]);

  const handleFinalizePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsPaymentSuccessful(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isPaymentSuccessful) {
    return <PaymentsSuccess />;
  }

  if(isLoading){
    return <Loading />
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
            mask='cpf'
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
          <BackButton>VOLTAR</BackButton>
          <ForwardButton onClick={handleFinalizePayment} disabled={!isFormValid}>finalizar</ForwardButton>
        </ButtonContainer>
      </ContainerListProducts>



    </>
  );
}
