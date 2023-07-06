import React, { FunctionComponent, InputHTMLAttributes } from 'react';

import { CustomInputContainer, Label } from './styled';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  hasSuccess?: boolean;
  colorInputSuccess: string;
  colorInputDefault: string;
  label?: string;
}

export const CustomInput: FunctionComponent<Props> =
  React.forwardRef(({label, ...rest}, ref) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        {label && <Label>{label}</Label>}
        <CustomInputContainer {...rest} ref={ref as any} />
      </div>
    );
  });

CustomInput.displayName = 'CustomInput';
