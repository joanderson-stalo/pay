import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ButtonAvançar,
  ButtonVoltar,
  ContainerButton,
  ContainerForm,
  ContainerInput,
  ContainerInput2,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  TitleStep,
  WInput
} from './styled';
import { Loading } from '@/components/Loading/loading';
import { CustomSelect } from '@/components/Select/select';
import { useLogin } from '@/context/user.login';
import { useFormContext } from 'react-hook-form';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import { SellerData } from '../interface';
import { useLicensed } from '@/context/useLicensed';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface IStep3 {
  Avançar: () => void;
  Voltar: () => void;
}

interface IOption {
  value: string;
  label: string;
}

export function Step3({ Avançar, Voltar }: IStep3) {
  const [fetchedOptions, setFetchedOptions] = useState<IOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [sellerData, setSellerData] = useState<SellerData | null>(null);
  const { licensedId } = useLicensed();
  const navigate = useNavigate()
  const { dataUser } = useLogin();

  const {
    register,
    setValue,
    formState: { errors },
    watch
  } = useFormContext();

  const allFieldsFilled = !!watch('licenciado');

  useEffect(() => {
    setLoading(true);
    axios.get('https://api-pagueassim.stalopay.com.br/seller/indexla', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dataUser?.token}`
      }
    })
      .then(response => {

        const data = response.data;

        if (data && data.sellers) {
          console.log(data.sellers.trading_name)
          const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, cnpj_cpf: any }, index: number) => ({
            value: seller.id,
            label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
          }));

          setFetchedOptions(options);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados:', error);
      });
  }, []);

  useEffect(() => {
    const fetchSellerData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(
          `https://api-pagueassim.stalopay.com.br/seller/show/${licensedId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${dataUser?.token}`,
            },
          }
        );
  
        const sellerData = response.data;
        setValue('licenciado', sellerData.seller.seller_la.id_la);
        setValue('RegraMarkup', sellerData.seller.markup);
      
        setSellerData(response.data.seller);
      } catch (error) {
        console.error('Erro ao obter dados do vendedor:', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchSellerData();
  }, [licensedId, dataUser?.token, setValue]);


  const handleSalvar = async () => {
    try {
      setLoading(true);

      const markupValue = watch('RegraMarkup')
      .replace(',', '.')
      .replace(/ %/, '');
  
      const updatedData = {
        markup_seller_destiny: markupValue,
        id_seller_origin: watch('licenciado'),
        id_seller_destiny: licensedId
      };
  
      await axios.put(`https://api-pagueassim.stalopay.com.br/update-seller-network`, updatedData, {
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
          handleLicenseddetail();
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

  const licenciadoValue = watch('licenciado');
  const selectedOption = fetchedOptions.find(option => option.value === licenciadoValue);

  const handleLicenseddetail = () => {
    navigate('/sellers-la')
  }


  return (
    <>
      {loading && <Loading />}
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Comercial</TitleStep>
            <Line />
            <ContainerForm>
              <ContainerInput2>
                <CustomSelect
                  placeholder='-'
                  {...register('licenciado')}
                  value={selectedOption || {value: '', label: ''}}
                  label="Licenciado Autorizado"
                  optionsData={{ options: fetchedOptions }}
                  hasError={!!errors.licenciado}
                  onChange={(selectedOption: { value: string }) => {
                    setValue('licenciado', selectedOption.value)
                  }}
                />
                <button>Pesquise pelo nome do Licenciado</button>
              </ContainerInput2>
              <ContainerInput>
                <WInput>
                  <LabelCustomInputMask
                    placeholder="Regra Markup %"
                    label="Regra Markup"
                    mask='99,99 %'
                    {...register('RegraMarkup')}
                    hasError={!!errors.TaxaAntecipacao}
                  />
                </WInput>
              </ContainerInput>
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
  );
}
