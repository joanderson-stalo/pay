import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styled'
import { CustomSelect } from '@/components/Select/select'
import { optionsData } from '@/pages/ECcadastro/components/Step1/option'
import { useFilterEstablishment } from '../../hooks/useFilterEstablishment'

interface IModalSucesso {
  visible: boolean
  onClose: () => void
}

export function ModalEstablishment({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const { setTrue} = useFilterEstablishment();

  const onSubmit = (data: any) => {
    localStorage.setItem('@licenciadoAutorizadoEstablishment', data.licenciadoAutorizado || '');
    localStorage.setItem('@fornecedorEstablishment', data.fornecedor || '');
    localStorage.setItem('@statusNoSistemaEstablishment', data.statusNoSistema || '');
    localStorage.setItem('@statusEmFornecedorEstablishment', data.statusEmFornecedor || '');
    
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
              <CustomSelect
                {...register("licenciadoAutorizado")}
                optionsData={optionsData}
                placeholder="Digite aqui ou clique para ver a lista"
                label="Licenciado Autorizado"
                onChange={(selectedOption: { value: string }) => {
                  setValue('licenciadoAutorizado', selectedOption.value)
                }}
              />
              <CustomSelect
                {...register("fornecedor")}
                optionsData={optionsData}
                placeholder="Digite aqui ou clique para ver a lista"
                label="Fornecedor"
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
                label="Status no sistema"
                onChange={(selectedOption: { value: string }) => {
                  setValue('statusNoSistema', selectedOption.value)
                }}
              />
              <CustomSelect
                {...register("statusEmFornecedor")}
                optionsData={optionsData}
                placeholder="Digite aqui ou clique para ver a lista"
                label="Status em Fornecedor"
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
