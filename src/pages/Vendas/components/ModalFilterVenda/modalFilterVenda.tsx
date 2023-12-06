import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import * as S from './styled';
import { CustomSelect } from '@/components/Select/select';
import { optionsData } from '@/pages/ECcadastro/components/Step1/option';
import { brandOptions, paymentMethodOptions, statusPaymentOptions } from './statusPaymentOptions';
import { CustomInput } from '@/components/Input/input';
import { ThemeColor } from '@/config/color';
import { useFilterSales } from '../../hooks/useFilterSales';

const validationSchema = yup.object().shape({
  captured_in_start: yup.date()
    .max(new Date(), "A data de início não pode ser maior que a data atual")
 ,
  captured_in_end: yup.date()
    .min(yup.ref('captured_in_start'), "A data de fim não pode ser anterior à data de início")
    ,
  formaDePagamento: yup.string(),
  bandeira: yup.string(),
  statusEmFornecedor: yup.string(),
});

interface IModalSucesso {
  visible: boolean;
  onClose: () => void;
}

export function ModalFilterVenda({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const { setTrue } = useFilterSales();

  const onSubmit = async (data: any) => {
    try {
      await validationSchema.validate(data, { abortEarly: false });
      console.log(data);
      localStorage.setItem('@bandeira', data.bandeira);
      localStorage.setItem('@statusPagamento', data.statusEmFornecedor);
      localStorage.setItem('@formaDePagamento', data.formaDePagamento);
      localStorage.setItem('@captured_in_start', data.captured_in_start);
      localStorage.setItem('@captured_in_end', data.captured_in_end);
      setTrue();
      onClose();
      toast.success('Filtros aplicados com sucesso!');
    } catch (err) {
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
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <S.Overlay>
      <S.ContainerModal>
        <S.ContainerTitle>
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
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    hasError={!!errors.captured_in_start}
                    type='date' />
                  <span>até</span>
                  <CustomInput 
                    {...register("captured_in_end")}
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
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
            <S.ButtonSalvar type='submit'>Salvar</S.ButtonSalvar>
          </S.ContextButton>
        </form>
      </S.ContainerModal>
    </S.Overlay>
  );
}
