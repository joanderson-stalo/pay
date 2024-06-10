import { useState, ChangeEvent, useEffect } from 'react';
import { AddressTitle, BackButton, ButtonContainer, ContainerInput, ContainerListProducts, ForwardButton } from "./styled";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import Cookies from 'js-cookie';
import { InputCustom } from "@/components/Ecom/InputCustom/inputCustom";
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { useNavigate } from 'react-router-dom';

interface FormData {
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

export function CartAddress() {
  const initialFormData = Cookies.get('userAddress') ? JSON.parse(Cookies.get('userAddress')!) : {
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

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const trimmedValue = value.trim();

    setFormData(prevState => {
      const updatedFormData = {
        ...prevState,
        [name]: value
      };

      if (name === 'cep' && trimmedValue.replace(/\D/g, '').length === 8) {
        fetchAddress(trimmedValue.replace(/\D/g, ''));
      }

      setTimeout(() => {
        Cookies.set('userAddress', JSON.stringify(updatedFormData), { expires: 7 });
      }, 0);

      return updatedFormData;
    });
  };


  const fetchAddress = async (cep: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;
      setFormData(prev => ({
        ...prev,
        endereco: logradouro,
        bairro: bairro,
        cidade: localidade,
        estado: uf
      }));
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    } finally{
      setIsLoading(false);
    }

  };


  useEffect(() => {
    const isEveryFieldFilled = Object.values(formData).every(value => (value || '').trim() !== '');
    setIsFormValid(isEveryFieldFilled);
  }, [formData]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleForwardClick = () => {
    navigate('/e-com-payments');
  };


  if(isLoading){
    return <Loading />
  }

  return (
    <>
      <HeaderListProducts />

      <ContainerListProducts>
        <ContainerInput>
          <InputCustom
            inputId="recipientName"

            label="Nome do destinatário"
            isRequired
            onChange={handleInputChange}
            value={formData.recipientName}
          />
          <InputCustom
            inputId="cpf"
            label="CPF"
            mask='cpf'
            isRequired
            onChange={handleInputChange}
            value={formData.cpf}
          />
        </ContainerInput>


        <AddressTitle>Endereço de entrega</AddressTitle>

        <ContainerInput>
          <InputCustom
            inputId="cep"
            mask='cep'
            label="CEP"
            isRequired
            onChange={handleInputChange}
            value={formData.cep}
          />
          <InputCustom
            inputId="bairro"

            label="Bairro"
            isRequired
            onChange={handleInputChange}
            value={formData.bairro}
          />
        </ContainerInput>

        <ContainerInput>
          <InputCustom
            inputId="endereco"

            label="Endereço"
            isRequired
            onChange={handleInputChange}
            value={formData.endereco}
          />
          <InputCustom
            inputId="cidade"
            disabled
            label="Cidade"
            isRequired
            onChange={handleInputChange}
            value={formData.cidade}
          />
        </ContainerInput>

        <ContainerInput>
          <InputCustom
            inputId="numero"
              label="Número"
            isRequired
            onChange={handleInputChange}
            value={formData.numero}
            mask='phone'
          />
          <InputCustom
            inputId="estado"
            disabled
            label="Estado"
            isRequired
            onChange={handleInputChange}
            value={formData.estado}
          />
        </ContainerInput>

        <ContainerInput>
          <InputCustom
            inputId="complemento"
            label="Complemento"
            isRequired
            onChange={handleInputChange}
            value={formData.complemento}
          />
        </ContainerInput>


        <ButtonContainer>
  <BackButton onClick={handleBackClick}>VOLTAR</BackButton>
  <ForwardButton disabled={!isFormValid} onClick={handleForwardClick}>AVANÇAR</ForwardButton>
</ButtonContainer>


      </ContainerListProducts>
    </>
  );
}
