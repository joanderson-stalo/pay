// MonthYearSelector.js

import { ThemeColor } from '@/config/color';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const Container = styled.input`
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
  color: ${ThemeColor.primaria};
`;

interface MonthYearSelectorProps {
  selectedYear: string;
  onYearChange: (newYear: string) => void; 
}

export function MonthYearSelector(props: MonthYearSelectorProps) {
  const { selectedYear, onYearChange } = props;

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newYear = event.target.value;
    onYearChange(newYear); 
  };

  return (
    <Container
      type='month'
      value={selectedYear}
      onChange={handleDateChange}
    />
  );
}
