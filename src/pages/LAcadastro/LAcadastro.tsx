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
import axios, { AxiosError } from 'axios';
import { useLogin } from "@/context/user.login";
import { sanitizeNumeric } from "@/utils/sanitizeNumeric";
import { convertDateFormat } from "@/utils/convertDateFormat";
import { useNavigate } from "react-router-dom";
import {  useDocumentLA } from "@/context/useDocumentLA";
import { toast } from "react-toastify";
import { TranslateErrorMessage } from "@/utils/translateErrorMessage";

export interface ApiResponse {
  message: string;
}


export const LAcadastro = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(true);
  const { dataUser } = useLogin();
  const { documentTypeLA } = useDocumentLA()
  const [isLoading, setIsLoading] = useState(false)

  const handleModalClose = () => {
    navigate('/sellers-la')
    setOpenModal(false);
  };

  const methods = useForm();
  const { getValues } = methods;



  const handleNextStep = async () => {
    if (currentStep === 4) {
        try {
            setIsLoading(true);
            const requestData = await getValues();

            const requestBody = {
                seller: [
                    {
                        trading_name: requestData.NomeFantasiaEstabelecimento,
                        document: documentTypeLA === "CPF" ? sanitizeNumeric(requestData.CPFEstabelecimento) : sanitizeNumeric(requestData.CNPJEstabelecimento),
                        type_document: documentTypeLA,
                        type: "LA",
                        email: requestData.EmailEstabelecimento,
                        status: "ativo",
                        company_name: requestData.RazaoSocialEstabelecimento,
                        opening_date:  documentTypeLA === "CPF" ? null : convertDateFormat(requestData.DataCriacaoEstabelecimento)  ,
                        mcc: requestData.AreaAtuacaoEstabelecimento,
                        phone: sanitizeNumeric(requestData.TelefoneEstabelecimento),
                        owner_name: requestData.NomeSocioEstabelecimento,
                        owner_birthday:  convertDateFormat(requestData.NascimentoSocio),
                        owner_cpf: sanitizeNumeric(requestData.CPFEstabelecimento),
                        address_cep: requestData.CEP,
                        address_street: requestData.Endereco,
                        address_number: Number(requestData.Numero),
                        address_complement: requestData.Complemento,
                        address_neighborhood: requestData.Bairro,
                        address_city: requestData.Cidade,
                        address_state: requestData.Estado,
                        tpv_goal: 10000,
                    },
                ],
                users: [
                    {
                        document_id: sanitizeNumeric(requestData.CPFEstabelecimento),
                        name: requestData.NomeSocioEstabelecimento,
                        email: requestData.EmailEstabelecimento,
                        phone_number: sanitizeNumeric(requestData.TelefoneEstabelecimento),
                        status: "ATIVO",
                        profile_id: 2,
                    },
                ],
                bank: [
                  {
                      agency: requestData.Agência,
                      account: requestData.Conta,
                      pix: requestData.pix,
                      type_account: requestData.TipoDeConta,
                      document: requestData.CpfCnpj,
                      document_type: requestData.CpfCnpj.length === 18 ? "CNPJ" : "CPF",
                      code: requestData.Banco,
                  },
              ],
              markup_seller_destiny: requestData.RegraMarkup.replace(/ %/, '').replace(',', '.'),
              id_licensed_origin: String(requestData.licenciado),
            };

            const response = await axios.post('https://api-pagueassim.stalopay.com.br/create/sellerla', requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${dataUser?.token}`
                }
            });

            console.log('oi LA');

            setIsLoading(false);

            if (response) {
                setCurrentStep(5);
            }
        } catch (error: any) {
          const err = error as AxiosError<ApiResponse>;
          const errorMessage = err.response?.data?.message || 'Ocorreu um error';
          const translatedMessage = await TranslateErrorMessage(errorMessage);
          toast.error(translatedMessage)
      } finally {
            setIsLoading(false);
        }
    } else if (currentStep < 4 && currentStepIsValid()) {
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
    const isDataCriacaoValid = (documentTypeLA !== "CPF") ? validateDataCriacao(step1Values.DataCriacaoEstabelecimento) : true;
    const isTelefoneValid = validateTelefone(step1Values.TelefoneEstabelecimento);

    const isStep1Valid =
      (validateCNPJ(step1Values.CNPJEstabelecimento) || documentTypeLA === "CPF") &&
      (step1Values.RazaoSocialEstabelecimento || documentTypeLA === "CPF") &&
      (step1Values.NomeFantasiaEstabelecimento || documentTypeLA === "CPF") &&
      step1Values.NascimentoSocio &&
      validateCPF(step1Values.CPFEstabelecimento) &&
      step1Values.NomeSocioEstabelecimento &&
      isEmailValid &&
      isTelefoneValid &&
      (step1Values.AreaAtuacaoEstabelecimento || documentTypeLA === "CPF") &&
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
  const successModalText = "Licenciado Credenciado";

  console.log('oiiss',  getValues())

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
