import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import * as S from './styled';

interface InputPixProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  required?: boolean;
}


interface InputTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
}

export function CustomInputPix ({ label, placeholder, required, ...rest }: InputPixProps) {
  return (
    <S.Container>
      {label && (
        <S.Label>
          {label} {required && <span>*</span>}
        </S.Label>
      )}
      <S.ContainerInput>
        <S.Input
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </S.ContainerInput>
    </S.Container>
  );
}


export function CustomTextareaPix ({label, placeholder, ...rest}: InputTextAreaProps ) {
  return (
    <>

<S.ContainerTextArea >

{label && (
        <S.Label>
          {label}
        </S.Label>
      )}

  <S.TextAreaPix
    placeholder={placeholder}
    {...rest}
  >

  </S.TextAreaPix>

</S.ContainerTextArea>



    </>
  )
}


