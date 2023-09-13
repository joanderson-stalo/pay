import { CustomButton } from './styled';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | JSX.Element;
  colorBackground: string;
  success: boolean;
}

export function Button({label, success, colorBackground, ...rest}: Props) {
  return (
    <CustomButton {...rest} colorBackground={colorBackground} success={success}>
      {label}
    </CustomButton>
  )
}
