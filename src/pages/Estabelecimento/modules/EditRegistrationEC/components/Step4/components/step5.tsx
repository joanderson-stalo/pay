import React, { useEffect, useState } from "react";
import { ThemeColor } from "@/config/color";
import {
  Agencia,
  Banco,
  Conta,
  ContainerForm,
  ContainerInput,
  ContainerInput2,
  ContainerStep,
  ContainerTitle,
  ContextStep,
  ContextStepContainer,
  Line,
  TipoConta,
  TitleStep
} from "./styled";
import { InputMask } from "@/components/InputMask/inputMask";
import { CustomInput } from "@/components/Input/input";
import { useFormContext } from 'react-hook-form';
import { CustomSelect } from "@/components/Select/select";
import { optionsData } from "../../Step1/option";

interface InfosProps {
  stepName: string;
}

export function Infos({ stepName }: InfosProps) {
  const {
    register,
    getValues,
    setValue,
  } = useFormContext();

  const [isChecked, setIsChecked] = useState(true);


const formatCpfOrCnpj = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, "");

  if (onlyNumbers.length > 11) {
    return onlyNumbers.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
      "$1.$2.$3/$4-$5"
    );
  }
  return onlyNumbers.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
    "$1.$2.$3-$4"
  );
};


const handleCpfCnpjChange = (event: { target: { value: any; }; }) => {
  const formattedValue = formatCpfOrCnpj(event.target.value);
  setValue('CpfCnpj', formattedValue);
};

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const fieldSuffix = stepName.toLowerCase();

  const currentValues = JSON.stringify({
    Banco: getValues().Banco,
    TipoDeConta: getValues().TipoDeConta,
    Agência: getValues().Agência,
    Conta: getValues().Conta,
    CpfCnpj: getValues().CpfCnpj
  });

  useEffect(() => {
    const valuesFromStep4 = getValues();
    if (isChecked) {
      setValue(`Banco${fieldSuffix}`, valuesFromStep4.Banco);
      setValue(`TipoDeConta${fieldSuffix}`, valuesFromStep4.TipoDeConta);
      setValue(`Agência${fieldSuffix}`, valuesFromStep4.Agência);
      setValue(`Conta${fieldSuffix}`, valuesFromStep4.Conta);
      setValue(`CpfCnpj${fieldSuffix}`, valuesFromStep4.CpfCnpj);
    } else {
      setValue(`Banco${fieldSuffix}`, '');
      setValue(`TipoDeConta${fieldSuffix}`, '');
      setValue(`Agência${fieldSuffix}`, '');
      setValue(`Conta${fieldSuffix}`, '');
      setValue(`CpfCnpj${fieldSuffix}`, '');
    }
  }, [setValue, fieldSuffix, isChecked, currentValues]);


  return (
    <>
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <ContainerTitle>
              <TitleStep>Dados Bancários - {stepName}</TitleStep>
              <div>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <p>Utilizar dados do F1</p>
              </div>
            </ContainerTitle>
            <Line />
            {!isChecked && (
              <ContainerForm>
                <ContainerInput>
                  <Banco>
                      <CustomSelect
                     {...register(`Banco${fieldSuffix}`)}
                    label="Banco"
                    optionsData={optionsData}
                    placeholder={'Clique para ver a lista'}
                    onChange={(selectedOption: { value: string }) => {
                      setValue(`Banco${fieldSuffix}`, selectedOption.value);
                    }}
                  />
                  </Banco>
                  <TipoConta>
                      <CustomSelect
                    {...register(`TipoDeConta${fieldSuffix}`)}
                    label="Tipo de Conta"
                    placeholder={''}
                    optionsData={optionsData}
                    onChange={(selectedOption: { value: string }) => {
                      setValue(`TipoDeConta${fieldSuffix}`, selectedOption.value);
                    }}
                  />
                  </TipoConta>
                </ContainerInput>
                <ContainerInput>
                  <Agencia>
                        <CustomInput
                  {...register(`Agência${fieldSuffix}`)}
                    label="Agência"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    hasSuccess={false}
                  />
                  </Agencia>
                  <Conta>

                        <CustomInput
                    {...register(`Conta${fieldSuffix}`)}
                    label="Conta"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    hasSuccess={false}
                  />
                  </Conta>
                </ContainerInput>
                <ContainerInput2>
                    <CustomInput
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  {...register(`CpfCnpj${fieldSuffix}`)}
                  label="CPF ou CNPJ"
                  placeholder="--.---.---/---.--"
                  onChange={handleCpfCnpjChange}
                />
                </ContainerInput2>
              </ContainerForm>
            )}
          </ContextStep>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
