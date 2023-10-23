import React from 'react';
import styled from 'styled-components';

interface MonthlyIndicatorProps {
  label?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Bar = styled.div<MonthlyIndicatorProps>`
  width: 61px;
  height: 4px;
  border-radius: 10px;
  background: ${props => (props.label && props.label !== "Mês atual") ? "#B2EAF8" : "#10104F"};
  margin-right: 10px;
`;

const Label = styled.span`
  color: var(--foundation-white-dark-active, #676767);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
`;

export const Indicator = (props: MonthlyIndicatorProps) => {
  const { label = "Mês atual" } = props;
  return (
    <Container>
      <Bar label={label} />
      <Label>{label}</Label>
    </Container>
  );
}
