
import { useTenantData } from '@/context';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}

const Container = styled.input<Color>`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 2px 9px;
  max-width: 180px;
  border-radius: 3.598px;
  border: 0.9px solid var(--foundation-brand-02-light-active, #B2EAF8);
  background: var(--foundation-white-light, #FDFDFD);
  color: ${(props) => props.secundary};;
`;

interface MonthYearSelectorProps {
  selectedYear: string;
  onYearChange: (newYear: string) => void; 
}

export function MonthYearSelector(props: MonthYearSelectorProps) {
  const { selectedYear, onYearChange } = props;
  const tenantData = useTenantData();

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newYear = event.target.value;
    onYearChange(newYear); 
  };

  return (
    <Container
    primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}

      type='month'
      value={selectedYear}
      onChange={handleDateChange}
    />
  );
}
