import * as S from "./styled";

interface IProps {
  steps: number[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  startProgress: number;
  endProgress: number;
  canAdvance: boolean;
  canGoBack: boolean;
}

export function ProgressSteps({
  steps = [],
  currentStep = 0,
  setCurrentStep,
  startProgress = 0,
  endProgress,
  canAdvance,
  canGoBack,
}: IProps) {
  const progressBarWidth = `${((currentStep - startProgress) / (endProgress - startProgress)) * 100}%`;

  const getLabelStatus = (stepIndex: number): "active" | "current" | "disabled" | "upcoming" => {
    if (stepIndex < currentStep) {
      return "active";
    } else if (stepIndex === currentStep) {
      return "current";
    } else if (stepIndex > currentStep) {
      return "upcoming";
    } else {
      return "disabled";
    }
  };


  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < currentStep && canGoBack) {
      setCurrentStep(stepIndex);
    } else if (canAdvance && stepIndex >= startProgress && stepIndex <= endProgress) {
      setCurrentStep(stepIndex);
    }
  };

  const handleProgressBarClick = () => {
    if (canAdvance) {
        setCurrentStep(5);
    }
};

  return (
    <S.MainContainer>
      <S.StepContainer>
      <S.ProgressBarInactive onClick={handleProgressBarClick} />
        <S.ProgressBarActive isActive={currentStep >= startProgress} width={progressBarWidth} />

        {[<div />, ...steps, <div />].map((_, index) => (
          <S.StepWrapper key={index} onClick={() => handleStepClick(index)}>
            {index === 0 || index === steps.length + 1 ? null : (
              <S.StepStyle
                isActive={index <= currentStep}
                isCurrent={index === currentStep}
              >
                <S.StepCount
                  isActive={index === currentStep}
                  labelStatus={getLabelStatus(index)}
                  isCurrent={index === currentStep}
                >
                  {index}
                </S.StepCount>
              </S.StepStyle>
            )}
          </S.StepWrapper>
        ))}
      </S.StepContainer>
    </S.MainContainer>
  );
}
