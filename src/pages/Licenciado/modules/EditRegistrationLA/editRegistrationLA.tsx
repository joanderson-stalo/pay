import React, { useState } from "react";
import { ModalSucesso } from "@/components/ModalSucesso/modalSucesso";
import { ContainerHome, ContainerProgressSteps } from "./styled";
import { ProgressSteps } from "./components/ProgressSteps/progressSteps";
import { useForm, FormProvider } from "react-hook-form";
import { validateCNPJ, validateCPF } from "validations-br";
import { validateEmail } from "@/utils/validateEmail";
import { validateDataCriacao } from "@/utils/dataValid";
import { validateTelefone } from "@/utils/telefoneValid";
import { Step3 } from "./components/Step3/step3";
import { Step4 } from "./components/Step4/step4";
import { Step1 } from "./components/Step1/step1";
import { Step2 } from "./components/Step2/step2";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDocumentLA } from "@/context/useDocumentLA";
import { toast } from "react-toastify";
import { useLicensed } from "@/context/useLicensed";
import { useLogin } from "@/context/user.login";
import { baseURL } from "@/config/color";

export const EditRegistrationLA = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(true);
  const { documentTypeLA } = useDocumentLA();
  const methods = useForm();
  const { dataUser } = useLogin();
  const { getValues } = methods;
  const [isLoading, setIsLoading] = useState(false);
  const { licensedId } = useLicensed();

  const handleModalClose = () => {
    navigate('/sellers-la-detail');
    setOpenModal(false);
  };

  const handleNextStep = async () => {
    if (currentStep === 4) {
      const isStep4Valid = validateStep4();
      if (isStep4Valid) {
        try {
          const step4Values = getValues();
          const sellerDataResponse = await axios.get(`${baseURL}seller/show/${licensedId}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          });

          const sellerData = sellerDataResponse.data;

          const banks= sellerData.seller.banks[0].id;


          const requestBody = {
            seller_id: licensedId,
            agency: step4Values.Agência,
            account: step4Values.Conta,
            type_account: step4Values.TipoDeConta,
            document: step4Values.CpfCnpj.replace(/\D/g, ""),
            document_type: step4Values.CpfCnpj.length <= 11 ? "cpf" : "cnpj",
            code: step4Values.Banco ,
            pix: step4Values.pix
          };
          setIsLoading(true);
          await axios.put(`${baseURL}banks/update-la/${banks}`, requestBody,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          });
          setCurrentStep(5);
        } catch (error) {
          toast.error("Error updating bank details. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      }
    } else {
      if (currentStep < 4) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        setCurrentStep(5);
      }
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
    const isDataCriacaoValid = (documentTypeLA !== "CPF") ? validateDataCriacao(step1Values.DataCriacaoEstabelecimento) : true;
    const isTelefoneValid = validateTelefone(step1Values.TelefoneEstabelecimento);

    const isStep1Valid =
      (validateCNPJ(step1Values.CNPJEstabelecimento) || documentTypeLA === "CPF") &&
      (step1Values.RazaoSocialEstabelecimento || documentTypeLA === "CPF") &&
      step1Values.NomeFantasiaEstabelecimento &&
      step1Values.NascimentoSocio &&
      validateCPF(step1Values.CPFEstabelecimento) &&
      step1Values.NomeSocioEstabelecimento &&
      isEmailValid &&
      isTelefoneValid &&
      step1Values.AreaAtuacaoEstabelecimento &&
      isDataCriacaoValid;

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

    const maxIndex = Object.keys(step3Values).filter(key => key.startsWith('Fornecedor')).length;

    return !!step3Values.licenciado && Array.from({ length: maxIndex }).every((_, index) =>
        !!step3Values[`Fornecedor${index}`] && !!step3Values[`PlanoComercial${index}`]
    );
};

const validateStep4 = () => {
  const step4Values = getValues();

  const cpfCnpjValue = step4Values.CpfCnpj
    ? step4Values.CpfCnpj.replace(/\D/g, "")
    : "";

  let isCpfCnpjValid = false;

  if (cpfCnpjValue.length <= 11) {
    isCpfCnpjValid = validateCPF(cpfCnpjValue);
  } else {
    isCpfCnpjValid = validateCNPJ(cpfCnpjValue);
  }

  const isStep4Valid =
    step4Values.Banco &&
    step4Values.TipoDeConta &&
    step4Values.Agência &&
    step4Values.Conta &&
    isCpfCnpjValid;

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
const successModalText = "Licenciado Atualizado";


return (
  <>
    <ContainerHome>
      <ContainerProgressSteps>
        <ProgressSteps
          stepLabels={["Dados do Licenciado", "Endereço", "Comercial", "Dados Bancários"]}
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
  </>
);
};
