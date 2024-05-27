import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import * as S from './styled';
import { CustomSelect } from '@/components/Select/select';
import { brandOptions, paymentMethodOptions, statusPaymentOptions } from './statusPaymentOptions';
import { CustomInput } from '@/components/Input/input';
import { useFilterSales } from '../../hooks/useFilterSales';
import { useTenantData } from '@/context';
import { useSalesPageContext } from '@/context/pages/salesPageContext';




interface IModalSucesso {
  visible: boolean;
  onClose: () => void;
}

export function ModalFilterVenda({ onClose, visible }: IModalSucesso) {
  const { register, reset, setError, handleSubmit, setValue, getValues, formState: { errors } } = useForm({

  });
  const { setTrue } = useFilterSales();
  const { currentPage, setCurrentPage } = useSalesPageContext();

  const onSubmit = async (data: any) => {
    try {

   const startDate = data.captured_in_start ? new Date(data.captured_in_start) : null;
   const endDate = data.captured_in_end ? new Date(data.captured_in_end) : null;


   if (!startDate && endDate) {
     setError("captured_in_start", {
       type: "manual",
       message: "A data inicial é necessária quando a data final é fornecida."
     });
     return;
   }


   if (startDate && endDate && endDate < startDate) {
     setError("captured_in_end", {
       type: "manual",
       message: "A data final não pode ser anterior à data inicial."
     });
     return;
   }

  await setCurrentPage(1)
      if (data.bandeira && data.bandeira !== 'null' && data.bandeira !== '') {
        localStorage.setItem('@bandeira', data.bandeira);
      }
      if (data.statusEmFornecedor && data.statusEmFornecedor !== 'null' && data.statusEmFornecedor !== '') {
        localStorage.setItem('@statusPagamento', data.statusEmFornecedor);
      }
      if (data.formaDePagamento && data.formaDePagamento !== 'null' && data.formaDePagamento !== '') {
        localStorage.setItem('@formaDePagamento', data.formaDePagamento);
      }
      if (startDate) {
        localStorage.setItem('@captured_in_start', data.captured_in_start);
      }
      if (endDate) {
        localStorage.setItem('@captured_in_end', data.captured_in_end);
      }

      reset(); // Limpa os campos após o salvamento
      setTrue();
      onClose();
      toast.success('Filtros aplicados com sucesso!');
    } catch (err) {
      // Tratamento de erros de validação
      if (err instanceof yup.ValidationError) {
        err.inner.forEach(error => {
          if (error.path && error.message) {
            toast.error(error.message);
          }
        });
      }
    }
  };


  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [getValues, onClose]);

  if (!visible) {
    return null;
  }

  const tenantData = useTenantData();

  return (
    <S.Overlay>
      <S.ContainerModal>
        <S.ContainerTitle  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} >
          <p>Adicionar Filtros</p>
          <span>Preencha os campos que deseja filtrar</span>
        </S.ContainerTitle>
        <S.Linha />
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.ContainerSelect>
            <div>
              <S.ContainerPeriodo>
                <h2>Período</h2>
                <S.ContainerData>
                  <CustomInput
                    {...register('captured_in_start')}
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    hasError={!!errors.captured_in_start}
                    type='date' />
                  <span>até</span>
                  <CustomInput
                    {...register("captured_in_end")}
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    hasError={!!errors.captured_in_end}
                    type='date' />
                </S.ContainerData>
              </S.ContainerPeriodo>
              <CustomSelect
                {...register("formaDePagamento")}
                optionsData={paymentMethodOptions}
                placeholder="Clique para ver a lista"
                label="Forma de Pagamento"
                onChange={(selectedOption: { value: string | undefined; }) => {
                  setValue('formaDePagamento', selectedOption.value)
                }}
              />
            </div>
            <section>
              <CustomSelect
                {...register("bandeira")}
                optionsData={brandOptions}
                placeholder="Clique para ver a lista"
                label="Bandeira"
                onChange={(selectedOption: { value: string | undefined; }) => {
                  setValue('bandeira', selectedOption.value)
                }}
              />
              <CustomSelect
                {...register("statusEmFornecedor")}
                optionsData={statusPaymentOptions}
                placeholder="Clique para ver a lista"
                label="Status do pagamento"
                onChange={(selectedOption: { value: string | undefined; }) => {
                  setValue('statusEmFornecedor', selectedOption.value)
                }}
              />
            </section>
          </S.ContainerSelect>
          <S.ContextButton>
            <S.ButtonCancelar onClick={onClose}>Cancelar</S.ButtonCancelar>
            <S.ButtonSalvar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='submit'>Salvar</S.ButtonSalvar>
          </S.ContextButton>
        </form>
      </S.ContainerModal>
    </S.Overlay>
  );
}
