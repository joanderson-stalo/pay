import * as S from './styled';
import { ChangeEventHandler } from 'react';

interface ToggleableRadioButtonProps {
  label: string;
  inputId: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}

export function ToggleableRadioButton({ label, inputId, onChange, checked }: ToggleableRadioButtonProps) {
  return (
    <S.RadioButtonContainer>
      <p>{label}</p>
      <S.HiddenRadioButton
    id={inputId}
        name={inputId}
        value={label}
        checked={checked}
        onChange={onChange}
      />
      <S.StyledRadioButton />
    </S.RadioButtonContainer>
  );
}
