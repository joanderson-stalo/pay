import { ThemeColor } from "@/config/color";
import { Agencia, Banco, ButtonAvançar, ButtonVoltar, Conta, ContainerButton, ContainerForm, ContainerInput, ContainerInput2, ContainerStep, ContainerTitle, ContextStep, ContextStepContainer, Line, TipoConta, TitleStep } from "./styled";
import { InputMask } from "@/components/InputMask/inputMask";
import { CustomInput } from "@/components/Input/input";
import { useState } from "react";

export function Step5(){

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
    return(
      <>
         <ContainerStep>
        <ContextStepContainer>
       <ContextStep>
          <ContainerTitle>
          <TitleStep>Dados Bancários - F2</TitleStep>
            <div>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <p>Utilizar dados do F1</p>
            </div>
          </ContainerTitle>
       <Line/>
        {!isChecked &&   <ContainerForm>
          <ContainerInput>
        <Banco>
        <InputMask
                label='Banco'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                placeholder={'oi'}
                hasError={false}
                hasSuccess={
                  false
                }
              />
        </Banco>

          <TipoConta>
          <CustomInput
                label='Tipo de Conta'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                placeholder={'oi'}
                hasError={false}
                hasSuccess={
                  false
                }
              />
          </TipoConta>

          </ContainerInput>
          <ContainerInput>
                <Agencia>
                <CustomInput
                label='Agência'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                placeholder={'oi'}
                hasError={false}
                hasSuccess={
                  false
                }
              />
</Agencia>
             <Conta>
             <CustomInput
                label='Conta'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                placeholder={'oi'}
                hasError={false}
                hasSuccess={
                  false
                }
              />
             </Conta>
          </ContainerInput>
          <ContainerInput2>
                  <CustomInput
                label='CPF ou CNPJ'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                placeholder={'oi'}
                hasError={false}
                hasSuccess={
                  false
                }
              />
          </ContainerInput2>
       </ContainerForm>}
       </ContextStep>



       </ContextStepContainer>
      </ContainerStep>


      </>


    )
}
