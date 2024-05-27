import React from 'react';
import * as S from './styled';
import { Basket, Cardholder, Package, CheckCircle,  Truck } from '@phosphor-icons/react';

interface BreadcrumbIconStepProps {
  etapa: number;
}

export function BreadcrumbIcon({ etapa }: BreadcrumbIconStepProps) {
  const icons: Record<string, React.ElementType> = {
    'Pedido realizado': Basket,
    'Pagamento aprovado': Cardholder,
    'Pedido em separação': Package,
    'Pedido em transferência': Truck,
    'Pedido entregue': CheckCircle,
  };

  const steps = Object.keys(icons);

  return (
    <S.BreadcrumbContainer>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <S.Step isActive={index === etapa - 1} isComplete={index < etapa}>
            <S.Icon isActive={index < etapa ? true : false}>
              {React.createElement(icons[step])}
            </S.Icon>
            <S.StepLabel>{step}</S.StepLabel>
          </S.Step>
          {index < steps.length - 1 && (
            <S.StepConnector isComplete={index < etapa - 1} />
          )}
        </React.Fragment>
      ))}
    </S.BreadcrumbContainer>
  );
}
