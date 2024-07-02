import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes,SelectHTMLAttributes, useRef } from 'react';
import * as S from './styled';
import Select from 'react-select'
import { customStyles } from './styled';

interface InputPixProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  required?: boolean;
}

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  label: string
  optionsData: Option[]
  placeholder?: string
  required?: boolean
  hasError?: boolean
  value?: Option
  onChange?: (selectedOption: Option | null) => void
  name?: string
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


export const CustomSelect2 = forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ label, optionsData, placeholder, required, onChange, hasError, value, name, ...rest }, ref) => {
    <option value="" disabled>{placeholder || "Selecione uma opção"}</option>
    const options = optionsData.map((option) => ({
      value: option.value,
      label: option.label
    }))

    const selectRef = useRef<any>(null)

    return (
      <S.Container>

        {label && (
          <S.Label>
            {label} {required && <span>*</span>}
          </S.Label>
        )}
        <Select
          className={hasError ? 'error' : ''}
          options={options}
          value={value}
          onChange={onChange}
          ref={selectRef}
          styles={customStyles(hasError || false)}
          placeholder={placeholder || 'Selecione'}
          noOptionsMessage={() => 'Opção não encontrada'}
          {...rest}
        />

      </S.Container>

    )
  }
)

CustomSelect2.displayName = 'CustomSelect2'
