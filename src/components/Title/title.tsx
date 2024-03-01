import React from 'react';
import { Title } from "./styled";

export interface TitleHProps {
  title: string;
}

export function TitleH({ title }: TitleHProps) {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
}
