import * as S from './styled'
import { useCallback, useEffect, useState } from 'react'
import { useLogin } from '@/context/user.login'
import { Loading } from '@/components/Loading/loading'
import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { CardStock } from './components/CardStock/cardStock'
import { TableStock } from './components/TableStock/tableStock'
import { useTenantData } from '@/context'
import { useIdPos } from '@/context/useIdPos'
import { baseURL } from '@/config/color'
import axios, { AxiosError } from 'axios'
import Swal from 'sweetalert2';
import Modal from 'react-modal'
import { CustomSelect } from '@/components/Select/select'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'
import { ApiResponse } from '@/pages/LAcadastro/LAcadastro'


export function DetailsStock() {

  const [loading, setLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState<any>(null);
  const [sellerName, setSellerName] = useState<string>('');
  const [fetchedOptionsEC, setFetchedOptionsEC] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const tenantData = useTenantData();
  const [selectedSellerId, setSelectedSellerId] = useState<string>('');
  const navigate = useNavigate();
  const { selectedIdPos } = useIdPos();
  const { dataUser } = useLogin();

  const fetchIdPos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}products/show/${selectedIdPos}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      setProductData(response.data.product);
      setSellerName(response.data.product.seller_name)
      console.log(response.data.product.seller_name)
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }, [ dataUser?.token]);


  const disassociateProduct = async () => {
    try {

      const confirmed = await Swal.fire({
        title: 'Tem certeza?',
        text: 'Deseja realmente desassociar o POS?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar'
      });

      if (confirmed.isConfirmed) {
        setLoading(true);
        await axios.put(
          `${baseURL}products/disassociate`,
          { product_id: selectedIdPos },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          }
        );
        fetchIdPos();
        toast.success('Procedimento realizado com sucesso. Por favor, realize a opção de reinicialização (F8) no equipamento para finalizar o processo.');
      }
    } catch (error: any) {
      const err = error as AxiosError<ApiResponse>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
      handleCloseModal();
  } finally {
      setLoading(false);
    }
  };

  const associateProduct = async () => {
    try {

      const confirmed = await Swal.fire({
        title: 'Tem certeza?',
        text: 'Deseja realmente associar o POS?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar'
      });

      if (confirmed.isConfirmed) {
        setLoading(true);
        await axios.put(
          `${baseURL}products/associate`,
          { product_id: selectedIdPos, seller_id: selectedSellerId },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          }
        );
        toast.success('Procedimento realizado com sucesso. Por favor, realize a opção de reinicialização (F8) no equipamento para finalizar o processo.');
        handleCloseModal();
        fetchIdPos();
      }
    }  catch (error: any) {
      const err = error as AxiosError<ApiResponse>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
      handleCloseModal();
  } finally {
      setLoading(false);
    }
  };


  const fetchDataEC = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}seller/indexec`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data.sellers;
      if (data) {
        const options = data.map((seller: { id: any; company_name: any; }) => ({
          value: seller.id,
          label: seller.company_name
        }));
        setFetchedOptionsEC(options);
      }
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };



  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectChange = (selectedOption: { value: string }) => {
    setSelectedSellerId(selectedOption.value);
  };

  const handleGoBack = () => {
    navigate('/equipmentStock');

  }



  useEffect(() => {
      fetchIdPos();
      fetchDataEC();
  }, [selectedIdPos, fetchIdPos]);



  if(loading){
    return  <Loading />
  }

  console.log(selectedIdPos)

  return (
    <>


        <S.ContextDetalhes>
        <CardStock {...productData} />

        </S.ContextDetalhes>

       <S.ContainerWrapper>
       <S.EditButton
  primary={tenantData.primary_color_identity}
  secundary={tenantData.secondary_color_identity}
    onClick={handleGoBack}
>
  Voltar
            </S.EditButton>
               <S.EditButton
  primary={tenantData.primary_color_identity}
  secundary={tenantData.secondary_color_identity}
  type='button'
  disassociate={sellerName ? true : false}
  onClick={sellerName ? disassociateProduct : () => setIsModalOpen(true)}
>
  {sellerName ? 'Desassociar POS' : 'Associar POS'}
            </S.EditButton>

       </S.ContainerWrapper>


       <Modal
isOpen={isModalOpen}
  onRequestClose={handleCloseModal}
  contentLabel="Custom Select Modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '400px',
      width: '90%',
      padding: '20px',
      height: '390px',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white'
    }
  }}
>
  <h2 style={{ marginBottom: '20px' }}>Selecionar Estabelecimento</h2>
  <CustomSelect
    optionsData={{ options: fetchedOptionsEC }}
    placeholder="Clique para ver a lista"
    label="Estabelecimento"
    onChange={handleSelectChange}
  />

  <button
    onClick={ associateProduct}
    style={{
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
   associar
  </button>
</Modal>


    </>
  )
}
