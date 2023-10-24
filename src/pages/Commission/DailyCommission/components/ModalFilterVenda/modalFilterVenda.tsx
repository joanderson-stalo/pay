import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styled'
import { CustomSelect } from '@/components/Select/select'
import { optionsData } from '@/pages/ECcadastro/components/Step1/option'
import { useFilterDailyCommission } from '../../hooks/useFilterDailyCommission'


interface IModalSucesso {
  visible: boolean
  onClose: () => void
}

export function ModalFilterVenda({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const { setTrue} = useFilterDailyCommission();

  const onSubmit = (data: any) => {
    console.log(data)
    setTrue()
    onClose()
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
              <CustomSelect
                {...register("licenciadoAutorizado")}
                optionsData={optionsData}
                placeholder=""
                label="Período"
                onChange={(selectedOption: { value: string }) => {
                  setValue('licenciadoAutorizado', selectedOption.value)
                }}
              />
              <span>até</span>
                <CustomSelect
                {...register("licenciadoAutorizado")}
                optionsData={optionsData}
                placeholder=""
                label="."
                onChange={(selectedOption: { value: string }) => {
                  setValue('licenciadoAutorizado', selectedOption.value)
                }}
              />
              </S.ContainerPeriodo>
              <CustomSelect
                {...register("fornecedor")}
                optionsData={optionsData}
                placeholder="Digite aqui ou clique para ver a lista"
                label="Forma de Pagamento"
                onChange={(selectedOption: { value: string }) => {
                  setValue('fornecedor', selectedOption.value)
                }}
              />
            </div>
            <div>
              <CustomSelect
                {...register("statusNoSistema")}
                optionsData={optionsData}
                placeholder="Digite aqui ou clique para ver a lista"
                label="Bandeira"
                onChange={(selectedOption: { value: string }) => {
                  setValue('statusNoSistema', selectedOption.value)
                }}
              />
              <CustomSelect
                {...register("statusEmFornecedor")}
                optionsData={optionsData}
                placeholder="Digite aqui ou clique para ver a lista"
                label="Status do pagamento"
                onChange={(selectedOption: { value: string }) => {
                  setValue('statusEmFornecedor', selectedOption.value)
                }}
              />
            </div>
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
