import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styled'
import { CustomSelect } from '@/components/Select/select'
import { optionsData } from '@/pages/ECcadastro/components/Step1/option'
import { paymentMethodOptions, statusPaymentOptions } from './statusPaymentOptions'
import { CustomInput } from '@/components/Input/input'
import { ThemeColor } from '@/config/color'
import { useFilterSales } from '../../hooks/useFilterSales'

interface IModalSucesso {
  visible: boolean
  onClose: () => void
}

export function ModalFilterVenda({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const { setTrue} = useFilterSales();

  const onSubmit = (data: any) => {
    console.log(data);
    localStorage.setItem('@bandeira', data.bandeira)
    localStorage.setItem('@statusPagamento', data.statusEmFornecedor);
    localStorage.setItem('@formaDePagamento', data.formaDePagamento);
    localStorage.setItem('@captured_in_start', data.captured_in_start);
    localStorage.setItem('@captured_in_end', data.captured_in_end);
    setTrue();
    onClose();
  
  }
  

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!visible) {
    return null
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
                      hasError={!!errors.NomeFantasiaEstabelecimento}
                label='' type='date' />
              <span>até</span>
                <CustomInput 
                      {...register("captured_in_end")}
                      colorInputDefault={ThemeColor.primaria}
                      colorInputSuccess={ThemeColor.secundaria}
                      hasError={!!errors.NomeFantasiaEstabelecimento}
                label='' type='date' />

                </S.ContainerData>

          

              </S.ContainerPeriodo>



              <CustomSelect
                {...register("formaDePagamento")}
                optionsData={paymentMethodOptions}
                placeholder="Clique para ver a lista"
                label="Forma de Pagamento"
                onChange={(selectedOption: { value: string }) => {
                  setValue('formaDePagamento', selectedOption.value)
                }}
              />
            </div>


            <section>
              <CustomSelect
                {...register("bandeira")}
                optionsData={optionsData}
                placeholder="Clique para ver a lista"
                label="Bandeira"
                onChange={(selectedOption: { value: string }) => {
                  setValue('bandeira', selectedOption.value)
                }}
              />
          <CustomSelect
    {...register("statusEmFornecedor")}
    optionsData={statusPaymentOptions}
    placeholder="Clique para ver a lista"
    label="Status do pagamento"
    onChange={(selectedOption: { value: string }) => {
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
  )
}
