import React, { Ref } from 'react';
import { CustomInputMask, ICustomInputMaskProps } from './customInputMask';
import { Label } from '../InputMask/styled';
import ReactInputMask from 'react-input-mask';

interface ILabeledCustomInputMaskProps extends ICustomInputMaskProps {
  label: string;
  mask: string
  placeholder: string
  maxLength?: number;
}

export const LabelCustomInputMask = React.forwardRef<ReactInputMask, ILabeledCustomInputMaskProps>(
  (
    {
      label,
      mask,
      placeholder,
      maxLength,
      ...props
    },
    ref
  ) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Label>{label}</Label>
        <CustomInputMask maxLength={maxLength} mask={mask} ref={ref} {...props}  placeholder={placeholder}/>
      </div>
    );
  }
);

LabelCustomInputMask.displayName = 'LabelCustomInputMask';
