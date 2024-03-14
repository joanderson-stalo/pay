import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import { useFilterLicensed } from '../../hooks/useFilterLicensed';
import { CustomInput } from '@/components/Input/input';
import { useTenantData } from '@/context';


interface IModalSucesso {
  visible: boolean;
  onClose: () => void;
}

export function ModalExtract({ onClose, visible }: IModalSucesso) {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const { setTrue } = useFilterLicensed();

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

  const defaultInitialDate = () => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return firstDayOfMonth.toISOString().split('T')[0];
  };

  const defaultFinalDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const onSubmit = (data: any) => {
    const initialDate = new Date(data.captured_in_start);
    const finalDate = new Date(data.captured_in_end);
    if (initialDate > finalDate) {
      setError('captured_in_start', { type: 'manual', message: 'Data inicial não pode ser maior que a data final' });
      setError('captured_in_end', { type: 'manual', message: 'Data final não pode ser menor que a data inicial' });
      return;
    } else if (initialDate.getTime() === finalDate.getTime()) {
      setError('captured_in_start', { type: 'manual', message: 'As datas não podem ser iguais' });
      setError('captured_in_end', { type: 'manual', message: 'As datas não podem ser iguais' });
      return;
    }
    
    localStorage.setItem('@extractStartDate', data.captured_in_start || '');
    localStorage.setItem('@extractEndDate', data.captured_in_end || '');
    setTrue();
    onClose();
  };

  if (!visible) {
    return null;
  }

  const tenantData = useTenantData();

  return (
    <S.Overlay>
      <S.ContainerModal>
        <S.ContainerTitle primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
          <p>Adicionar Filtros</p>
          <span>Preencha os campos que deseja filtrar</span>
        </S.ContainerTitle>
        <S.Linha />
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.ContainerSelect>
            <CustomInput 
              label='Data Inicial'
              {...register("captured_in_start", { 
                value: defaultInitialDate(),
                validate: value => value !== '' || 'Campo obrigatório' 
              })}
              colorInputDefault={tenantData.primary_color_identity}
              colorInputSuccess={tenantData.secondary_color_identity}
              hasError={!!errors.captured_in_start}
              type='date' />
          
            <CustomInput 
              label='Data Final'
              {...register("captured_in_end", { 
                value: defaultFinalDate(),
                validate: value => value !== '' || 'Campo obrigatório' 
              })}
              colorInputDefault={tenantData.primary_color_identity}
              colorInputSuccess={tenantData.secondary_color_identity}
              hasError={!!errors.captured_in_end}
              type='date' />
          
          </S.ContainerSelect>
          <S.ContextButton>
            <S.ButtonCancelar type='button' onClick={onClose}>Cancelar</S.ButtonCancelar>
            <S.ButtonSalvar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='submit'>Salvar</S.ButtonSalvar>
          </S.ContextButton>
        </form>
      </S.ContainerModal>
    </S.Overlay>
  );
}
