import { useState } from "react";
import { ModalSucesso } from "@/components/ModalSucesso/modalSucesso";
import { useForm, FormProvider } from "react-hook-form";
import { validateCNPJ, validateCPF } from "validations-br";
import { validateEmail } from "@/utils/validateEmail";
import { validateDataCriacao } from "@/utils/dataValid";
import { validateTelefone } from "@/utils/telefoneValid";
import { Step2 } from "./Step2/step2";
import { ContainerHome, ContainerProgressSteps } from "../styled";
import { ProgressSteps } from "./ProgressSteps/progressSteps";
import { Step1 } from "./Step1/step1";
import { Step3 } from "./Step3/step3";
import { Step4 } from "./Step4/step4";

export const ECcadastro = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [openModal, setOpenModal] = useState(true);

  const handleModal = () => {
    setOpenModal(false);
  };

  const methods = useForm();
  const { getValues } = methods;

  const handleNextStep = () => {
    if (currentStep < 5 && currentStepIsValid()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const validateStep1 = () => {
    const step1Values = getValues();
    const isEmailValid = validateEmail(step1Values.EmailEstabelecimento);
    const isDataCriacaoValid = validateDataCriacao(step1Values.DataCriacaoEstabelecimento);
    const isTelefoneValid = validateTelefone(step1Values.TelefoneEstabelecimento);

    const isStep1Valid =
      step1Values.CNPJEstabelecimento &&
      validateCNPJ(step1Values.CNPJEstabelecimento) &&
      step1Values.RazaoSocialEstabelecimento &&
      step1Values.NomeFantasiaEstabelecimento &&
      isDataCriacaoValid &&
      validateCPF(step1Values.CPFEstabelecimento) &&
      step1Values.NomeSocioEstabelecimento &&
      isEmailValid &&
      isTelefoneValid &&
      step1Values.AreaAtuacaoEstabelecimento;

    return isStep1Valid;
  };

  const validateStep2 = () => {
    const step2Values = getValues();
    const isStep2Valid =
      step2Values.CEP &&
      step2Values.Endereco &&
      step2Values.Numero &&
      step2Values.Bairro &&
      step2Values.Cidade &&
      step2Values.Estado;

    return isStep2Valid;
  };

  const validateStep3 = () => {
    const step3Values = getValues();
    const isStep3Valid =
      step3Values.licenciado &&
      step3Values.Fornecedor &&
      step3Values.PlanoComercial;

    return isStep3Valid;
  };

  const validateStep4 = () => {
    const step4Values = getValues();
    const isStep4Valid =
      step4Values.Banco &&
      step4Values.TipoDeConta &&
      step4Values.Agência &&
      step4Values.Conta &&
      step4Values.CpfCnpj;

    return isStep4Valid;
  };

  const currentStepIsValid = () => {
    switch (currentStep) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      case 4:
        return validateStep4();
      default:
        return true;
    }
  };

  const steps = [1, 2, 3, 4];

  const successModalText = "Estabelecimento Credenciado";

  console.log("ll", getValues());

  return (
    <>
      <ContainerHome>
        <ContainerProgressSteps>
          <ProgressSteps
            startProgress={0}
            endProgress={steps.length + 1}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            steps={steps}
            canAdvance={currentStepIsValid()}
            canGoBack={currentStep > 1}
          />
        </ContainerProgressSteps>

        <FormProvider {...methods}>
          {currentStep === 1 && <Step1 Avançar={handleNextStep} />}
          {currentStep === 2 && <Step2 Avançar={handleNextStep} Voltar={handlePreviousStep} />}
          {currentStep === 3 && <Step3 Avançar={handleNextStep} Voltar={handlePreviousStep} />}
          {currentStep === 4 && <Step4 Avançar={handleNextStep} Voltar={handlePreviousStep} />}
          {currentStep === 5 && (
            <ModalSucesso text={successModalText} visible={openModal} onClose={handleModal} />
          )}
        </FormProvider>
      </ContainerHome>
    </>
  );
};

