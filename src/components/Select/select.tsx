import React, { FunctionComponent } from 'react';
import Select from 'react-select';
import { customStyles } from './styled';
import { Label } from '../Input/styled';

interface Option {
  value: string;
  label: string;
}

interface ICustomSelectProps {
  hasError?: boolean;
  value?: any;
  onChange?: any;
  placeholder?: string;
  label: string;
  optionsData: { options: Option[] };
}

export const CustomSelect: FunctionComponent<ICustomSelectProps> = ({
  hasError,
  value,
  onChange,
  placeholder,
  label,
  optionsData,
}) => {
  const options: Option[] = optionsData.options.map((option) => ({
    value: option.value,
    label: option.label,
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Label>{label}</Label>
      <Select
        className={hasError ? 'error' : ''}
        options={options}
        value={value}
        onChange={onChange}
        styles={customStyles(hasError || false)}
        placeholder={placeholder}
        noOptionsMessage={() => 'opção não encontrada'}
      />
    </div>
  );
};

CustomSelect.displayName = 'CustomSelect';
