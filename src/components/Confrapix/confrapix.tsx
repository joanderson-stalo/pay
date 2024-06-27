import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
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

export const CustomInputPix = forwardRef<HTMLInputElement, InputPixProps>(
  ({ label, placeholder, required, ...rest }, ref) => (
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
          ref={ref}
          {...rest}
        />
      </S.ContainerInput>
    </S.Container>
  )
);

export const CustomTextareaPix = forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
  ({ label, placeholder, ...rest }, ref) => (
    <S.ContainerTextArea>
      {label && (
        <S.Label>
          {label}
        </S.Label>
      )}
      <S.TextAreaPix
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </S.ContainerTextArea>
  )
);
