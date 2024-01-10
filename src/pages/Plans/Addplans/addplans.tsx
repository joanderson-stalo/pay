import { CreatePlans } from "./components/CreatePlans/createPlans";


export function AddPlans() {

  const handleVoltar = () => {
    console.log("Voltar foi clicado");
  }

  const handleSubmitData = (data: any) => {
    console.log("Dados do formulário enviados:", data);
  }

  return(
    <>
      <CreatePlans Voltar={handleVoltar} onSubmitData={handleSubmitData} />
    </>
  )
}
