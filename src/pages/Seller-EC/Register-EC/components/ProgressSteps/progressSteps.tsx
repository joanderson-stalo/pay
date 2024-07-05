import * as S from "./styled";
import { useState } from 'react';

interface IProps {
  steps: number[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  startProgress: number;
  endProgress: number;
  canAdvance: boolean;
  canGoBack: boolean;
  stepLabels?: string[];
}

export function ProgressSteps({
  steps,
  currentStep,
  setCurrentStep,
  startProgress,
  endProgress,
  canAdvance,
  canGoBack,
  stepLabels,
}: IProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const progressBarWidth = `${((currentStep - startProgress) / (endProgress - startProgress)) * 100}%`;

  const getLabelStatus = (stepIndex: number): "active" | "current" | "disabled" | "upcoming" => {
    if (stepIndex < currentStep) return "active";
    if (stepIndex === currentStep) return "current";
    if (stepIndex > currentStep) return "upcoming";
    return "disabled";
  };

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < currentStep && canGoBack) setCurrentStep(stepIndex);
    else if (canAdvance && stepIndex >= startProgress && stepIndex <= endProgress) setCurrentStep(stepIndex);
  };

  const handleProgressBarClick = () => {
    if (canAdvance) setCurrentStep(5);
  };

  return (
    <S.MainContainer>
      <S.StepContainer>
        <S.ProgressBarInactive onClick={handleProgressBarClick} />
        <S.ProgressBarActive isActive={currentStep >= startProgress} width={progressBarWidth} />

        {[<div />, ...steps, <div />].map((_, index) => (
          <S.StepWrapper
            key={index}
            onClick={() => handleStepClick(index)}
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {index === 0 || index === steps.length + 1 ? null : (
              <>
                {hoveredStep === index && <S.Tooltip>{stepLabels ? stepLabels[index - 1] : `Step ${index}`}</S.Tooltip>}
                <S.StepStyle isActive={index <= currentStep} isCurrent={index === currentStep}>
                  <S.StepCount
                    isActive={index === currentStep}
                    labelStatus={getLabelStatus(index)}
                    isCurrent={index === currentStep}
                  >
                    {index}
                  </S.StepCount>
                </S.StepStyle>
              </>
            )}
          </S.StepWrapper>
        ))}
      </S.StepContainer>
    </S.MainContainer>
  );
}

