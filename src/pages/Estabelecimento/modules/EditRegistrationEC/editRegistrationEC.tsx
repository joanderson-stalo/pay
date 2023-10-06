import { useState } from "react";
import { ModalSucesso } from "@/components/ModalSucesso/modalSucesso";
import { ContainerHome, ContainerProgressSteps } from "./styled";
import { ProgressSteps } from "./components/ProgressSteps/progressSteps";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { validateCNPJ, validateCPF } from "validations-br";
import { validateEmail } from "@/utils/validateEmail";
import { validateDataCriacao } from "@/utils/dataValid";
import { validateTelefone } from "@/utils/telefoneValid";
import { Step3 } from "./components/Step3/step3";
import { Step4 } from "./components/Step4/step4";
import { Step1 } from "./components/Step1/step1";
import { Step2 } from "./components/Step2/step2";
import { useLogin } from "@/context/user.login";
import { sanitizeNumeric } from "@/utils/sanitizeNumeric";
import { getCurrentFormattedDate } from "@/utils/dataFormat";
import { convertDateFormat } from "@/utils/convertDateFormat";
import { useNavigate } from "react-router-dom";
import { useDocumentEC } from "@/context/useDocumentEC";
import { toast } from "react-toastify";

export const EditRegistrationEC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(true);
  const { dataUser } = useLogin();
  const { documentTypeEC } = useDocumentEC();
  const [isLoading, setIsLoading] = useState(false)

  const handleModalClose = () => {
    navigate('/home')
    localStorage.setItem('selectedItem', '0');
    setOpenModal(false);
  };

  const methods = useForm();
  const { getValues } = methods;

  const handleNextStep = () => {
    if (currentStep === 4 && currentStepIsValid()) {
        setCurrentStep(5);
    }
    if (currentStep < 4 && currentStepIsValid()) {
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
    const isDataCriacaoValid = (documentTypeEC !== "CPF") ? validateDataCriacao(step1Values.DataCriacaoEstabelecimento) : true;
    const isTelefoneValid = validateTelefone(step1Values.TelefoneEstabelecimento);

    return (validateCNPJ(step1Values.CNPJEstabelecimento) || documentTypeEC === "CPF") &&
      (step1Values.RazaoSocialEstabelecimento || documentTypeEC === "CPF") &&
      step1Values.NomeFantasiaEstabelecimento &&
      step1Values.NascimentoSocio &&
      validateCPF(step1Values.CPFEstabelecimento) &&
      step1Values.NomeSocioEstabelecimento &&
      isEmailValid &&
      isTelefoneValid &&
      step1Values.AreaAtuacaoEstabelecimento &&
      isDataCriacaoValid;
  };

  const validateStep2 = () => {
    const step2Values = getValues();
    return step2Values.CEP &&
      step2Values.Endereco &&
      step2Values.Numero &&
      step2Values.Bairro &&
      step2Values.Cidade &&
      step2Values.Estado;
  };

  const validateStep3 = () => {
    const step3Values = getValues();
    const maxIndex = Object.keys(step3Values).filter(key => key.startsWith('Fornecedor')).length;
    return !!step3Values.licenciado && Array.from({ length: maxIndex }).every((_, index) =>
      !!step3Values[`Fornecedor${index}`] && !!step3Values[`PlanoComercial${index}`]);
  };

  const validateStep4 = () => {
    const step4Values = getValues();
    const cpfCnpjValue = step4Values.CpfCnpj ? step4Values.CpfCnpj.replace(/\D/g, "") : "";
    let isCpfCnpjValid = false;

    if (cpfCnpjValue.length <= 11) {
      isCpfCnpjValid = validateCPF(cpfCnpjValue);
    } else {
      isCpfCnpjValid = validateCNPJ(cpfCnpjValue);
    }

    return step4Values.Banco &&
      step4Values.TipoDeConta &&
      step4Values.Agência &&
      step4Values.Conta &&
      isCpfCnpjValid;
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
  const successModalText = "Estabelecimento Atualizado";

  return (
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
        {currentStep === 4 && <Step4 isLoading={isLoading} Avançar={handleNextStep} Voltar={handlePreviousStep} />}
        {currentStep === 5 && (
          <ModalSucesso text={successModalText} visible={openModal} onClose={handleModalClose} />
        )}
      </FormProvider>
    </ContainerHome>
  );
};
