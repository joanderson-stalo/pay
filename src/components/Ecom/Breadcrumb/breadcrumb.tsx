
import * as S from './styled';

interface BreadcrumbProps {
  steps: Array<{
    name: string;
    isActive?: boolean;
    isComplete?: boolean;
  }>;
  primaryColor: string;
}

export function  Breadcrumb({ steps,  primaryColor }: BreadcrumbProps) {
  return (
    <S.BreadcrumbContainer>
      {steps.map((step, index) => (
        <S.Step
          primaryColor={primaryColor}
          key={index}
          isActive={step.isActive || false}
          isComplete={step.isComplete || false}
        >
          <span>{step.name}</span>
        </S.Step>
      ))}
    </S.BreadcrumbContainer>
  );
}
