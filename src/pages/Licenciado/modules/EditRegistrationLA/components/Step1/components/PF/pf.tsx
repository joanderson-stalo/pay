import { ThemeColor } from '@/config/color';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import { CustomInput } from '@/components/Input/input';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import { validateCPF } from 'validations-br';
import { validateDataCriacao } from '@/utils/dataValid';
import { validateTelefone } from '@/utils/telefoneValid';
import { validateEmail } from '@/utils/validateEmail';

interface IStep1 {
  BPJ: () => void;
  BPF: () => void;
}

export function PF({ BPF, BPJ }: IStep1) {
  const {
    register,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useForm({
    mode: 'onChange'
  });

  const allFieldsFilled =
    !!watch('NomeFantasiaEstabelecimento') &&
    !!watch('NascimentoSocio') &&
    !!watch('CPFEstabelecimento') &&
    !!watch('NomeSocioEstabelecimento') &&
    !!watch('EmailEstabelecimento') &&
    !!watch('AreaAtuacaoEstabelecimento') &&
    !!watch('TelefoneEstabelecimento');

  const handleAvancar = async () => {
    const result = await trigger();
    if (
      result &&
      !errors.CNPJEstabelecimento &&
      !errors.CPFEstabelecimento &&
      allFieldsFilled &&
      formIsValid
    ) {
    }
  };

  return (
    <S.ContainerStep>
      <S.ContextStepContainer>
        <S.ContextStep>
          <S.ContainerDados>
            <S.TitleStep>Dados do Licenciado</S.TitleStep>
            <S.ContainerPJPF>
            <S.ButtonPJ active={false} onClick={BPJ}>PJ</S.ButtonPJ>
            <S.ButtonPF active onClick={BPF}>PF</S.ButtonPF>
            </S.ContainerPJPF>
          </S.ContainerDados>
          <S.Line />
          <S.ContainerForm>
            <S.ContainerInput>

            <LabelCustomInputMask
                {...register('CPFEstabelecimento', { validate: validateCPF })}
                label="CPF"
                mask="999.999.999-99"
                placeholder="---.---.---.--"
                hasError={!!errors.CPFEstabelecimento}
              />

              <LabelCustomInputMask
                {...register('NascimentoSocio', {
                  validate: validateDataCriacao
                })}
                label="Data de Nascimento"
                mask="99/99/9999"
                placeholder="dd/mm/aaaa"
                hasError={!!errors.NascimentoSocio}
              />
            </S.ContainerInput>
            <S.ContainerInput>

              <CustomInput
                {...register('NomeSocioEstabelecimento')}
                label="Nome Completo"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.NomeSocioEstabelecimento}
              />

<LabelCustomInputMask
                {...register('TelefoneEstabelecimento', {
                  validate: validateTelefone
                })}
                label="Telefone/Celular"
                mask="(99) 99999-9999"
                placeholder="(--) ----.----"
                hasError={!!errors.TelefoneEstabelecimento}
              />
            </S.ContainerInput>
            <S.ContainerInput>
              <CustomInput
                {...register('EmailEstabelecimento', {
                  validate: validateEmail
                })}
                label="E-mail"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.EmailEstabelecimento}
              />

            </S.ContainerInput>

          </S.ContainerForm>
        </S.ContextStep>
        <S.ButtonAvançar disabled={!allFieldsFilled} onClick={handleAvancar}>
          Salvar
        </S.ButtonAvançar>
      </S.ContextStepContainer>
    </S.ContainerStep>
  )
}
