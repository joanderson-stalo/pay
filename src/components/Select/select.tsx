import { FunctionComponent, useRef } from 'react';
import Select from 'react-select';
import { customStyles } from './styled';
import { Label } from '../Input/styled';

interface Option {
  value: string;
  label: string;
}

interface ICustomSelectProps {
  hasError?: boolean;
  value?: Option;
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

  const selectRef = useRef<any>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Label>{label}</Label>
      <Select
        className={hasError ? 'error' : ''}
        options={options}
        value={value}
        onChange={onChange}
        ref={selectRef}
        styles={customStyles(hasError || false)}
        placeholder={placeholder}
        noOptionsMessage={() => 'Opção não encontrada'}
      />
    </div>
  );
};

CustomSelect.displayName = 'CustomSelect';
