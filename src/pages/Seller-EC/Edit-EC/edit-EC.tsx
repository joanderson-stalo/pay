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
import axios, { AxiosError } from 'axios';
import { useNavigate } from "react-router-dom";
import { useDocumentEC } from "@/context/useDocumentEC";
import { toast } from "react-toastify";
import { useLogin } from "@/context/user.login";
import { useEstablishment } from "@/context/useEstablishment";
import { baseURL } from "@/config/color";
import { TranslateErrorMessage } from "@/utils/translateErrorMessage";

export const EditEC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(true);
  const { dataUser } = useLogin();
  const { documentTypeEC } = useDocumentEC();
  const methods = useForm();
  const { getValues } = methods;
  const [isLoading, setIsLoading] = useState(false);
  const { establishmentId } = useEstablishment();

  const handleModalClose = () => {
    navigate('/sellers-ec-detail');
    setOpenModal(false);
  };

  const handleNextStep = async () => {
    if (currentStep === 4) {
      const isStep4Valid = validateStep4();
      if (isStep4Valid) {
        try {
          const step4Values = getValues();
        const sellerDataResponse = await axios.get(`${baseURL}seller/show/${establishmentId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${dataUser?.token}`
          }
        });

        const sellerData = sellerDataResponse.data;

        const acquireId = sellerData.seller.acquires[0].id;


        const requestBody = {
          seller_id: Number(establishmentId),
          agency: step4Values.Agência,
          acquire_id: acquireId,
          account: step4Values.Conta,
          type_account: step4Values.TipoDeConta,
          document: step4Values.CpfCnpj.replace(/\D/g, ""),
          document_type: step4Values.CpfCnpj.length <= 11 ? "cpf" : "cnpj",
          code: step4Values.Banco
        };

          setIsLoading(true);
          await axios.put(`${baseURL}banks/update-ec`, requestBody, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          });
          setCurrentStep(5);
        } catch (error) {
          const err = error as AxiosError<{ message: string }>;
          const errorMessage = err.response?.data?.message || 'Ocorreu um error';
          const translatedMessage = await TranslateErrorMessage(errorMessage);
          toast.error(translatedMessage);
        } finally {
          setIsLoading(false);
        }
      }
    } else {
      if (currentStep < 4 && currentStepIsValid()) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else if (currentStep >= 4) {
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
    const isEmailValid = step1Values.EmailEstabelecimento;
    const isDataCriacaoValid = (documentTypeEC !== "CPF") ? validateDataCriacao(step1Values.DataCriacaoEstabelecimento) : true;
    const isTelefoneValid = step1Values.TelefoneEstabelecimento;

    return ((step1Values.CNPJEstabelecimento) || documentTypeEC === "CPF") &&
      (step1Values.RazaoSocialEstabelecimento || documentTypeEC === "CPF") &&
      step1Values.NomeFantasiaEstabelecimento &&
      step1Values.NascimentoSocio &&
      (step1Values.CPFEstabelecimento) &&
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
    // const maxIndex = Object.keys(step3Values).filter(key => key.startsWith('Fornecedor')).length;
    return !!step3Values.licenciado
    //  && Array.from({ length: maxIndex }).every((_, index) =>
    //   !!step3Values[`Fornecedor${index}`] && !!step3Values[`PlanoComercial${index}`]);
  };

  const validateStep4 = () => {
    const step4Values = getValues();
    const cpfCnpjValue = step4Values.CpfCnpj ? step4Values.CpfCnpj.replace(/\D/g, "") : "";
    let isCpfCnpjValid = false;

    if (cpfCnpjValue.length <= 11) {
      isCpfCnpjValid = cpfCnpjValue;
    } else {
      isCpfCnpjValid = cpfCnpjValue;
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
          stepLabels={["Dados do Estabelecimento", "Endereço", "Comercial", "Dados Bancários"]}
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
