import React from 'react';
import { ButtonTotal } from "./styled";

interface TotalBtnProps {
  total: number | string;
}

export function TotalBtn({ total }: TotalBtnProps) {
  return (
    <>
       <ButtonTotal>Todos ({total})</ButtonTotal>
    </>
  );
}
