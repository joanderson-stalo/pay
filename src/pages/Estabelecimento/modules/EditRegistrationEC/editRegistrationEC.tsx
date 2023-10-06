import { Step1 } from "./components/Step1/step1";
import { useForm } from 'react-hook-form';
import { Step2 } from "./components/Step2/step2";
import { Step3 } from "./components/Step3/step3";
import { Step4 } from "./components/Step4/step4";

export function EditRegistrationEC(){

  return(
    <>

      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </>
  )
}
