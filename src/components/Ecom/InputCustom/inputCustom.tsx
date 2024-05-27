import * as S from './styled';

interface RecipientInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  inputId: string;
  isRequired?: boolean;
  disabled?: boolean;
  mask?: "cpf" | "cep" | "phone";
}


const applyMask = (value: string = '', type?: "cpf" | "cep" | "phone") => {
  if (!type) {
    return value; 
  }

  value = value?.replace(/\D/g, '');

  switch (type) {
    case 'cpf':
      return value
      .substring(0, 11)
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    case 'cep':
      return value
      .substring(0, 8)
      .replace(/^(\d{5})(\d)/, '$1-$2');
    case 'phone':
      return value
      .substring(0, 11)
      .replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
    default:
      return value;
  }
}


export function InputCustom({ value, onChange, label, inputId, isRequired = false,   disabled=false, mask }: RecipientInputProps) {
  return (
    <S.InputContainer>
      <S.Label htmlFor={inputId}>
        {label}
        {isRequired && <S.RequiredIndicator>*</S.RequiredIndicator>}
      </S.Label>
      <S.Input
        id={inputId}
        disabled={disabled}
        type="text"
        name={inputId}
        value={applyMask(value, mask)}
        onChange={onChange}
        placeholder={label}
      />
    </S.InputContainer>
  );
};
