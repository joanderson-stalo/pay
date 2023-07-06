import React, { InputHTMLAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import InputMask from 'react-input-mask';

export type ICustomInputMaskProps = {
  hasError?: boolean;
  hasSuccess?: boolean;
  colorInputSuccess?: string;
  theme?: DefaultTheme;
} & InputHTMLAttributes<HTMLInputElement>;

export const CustomInputMask = styled(InputMask).attrs<ICustomInputMaskProps>((props) => ({
  ...props,
}))<ICustomInputMaskProps>`
  border: 1px solid
    ${({ hasError, hasSuccess, colorInputSuccess, theme }) => {
      if (hasError) {
        return `${theme.red_error}`;
      } else if (hasSuccess) {
        return `${colorInputSuccess}`;
      } else {
        return `${theme.neutral_Light_active}`;
      }
    }};

  color: ${({ hasError, hasSuccess, colorInputSuccess, theme }) => {
    if (hasError) {
      return `${theme.red_error}`;
    } else if (hasSuccess) {
      return `${colorInputSuccess}`;
    } else {
      return `${theme.gray_sys2}`;
    }
  }};
  outline: none;
  width: 100%;
  border-radius: 4px;

  padding: 0 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  height: 44px;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ hasError, theme }) =>
      hasError ? `${theme.red_error}` : `${theme.gray_sys2}`};
  }
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.neutral_darker};
  margin-bottom: 4px;
`;
