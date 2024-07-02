import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes,SelectHTMLAttributes, useRef } from 'react';
import * as S from './styled';


interface InputPixProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  required?: boolean;
}



interface SelectPixProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
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


export const CustomSelectPerfil = forwardRef<HTMLSelectElement, SelectPixProps>(


  ({ label, required, options, placeholder, ...rest }, ref) => (


    <S.Container>
      {label && (
        <S.Label>
          {label} {required && <span>*</span>}
        </S.Label>
      )}
      <S.ContainerSelect>
        <S.ContentSelect required={required} ref={ref} {...rest}>
        <option value="" disabled>{placeholder || "Selecione"}</option>
          {options.map(option => (
            <option  key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.ContentSelect>
      </S.ContainerSelect>
    </S.Container>
  )
);
