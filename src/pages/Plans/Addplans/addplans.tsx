import { CreatePlans } from "./components/CreatePlans/createPlans";


export function AddPlans() {

  const handleVoltar = () => {

  }

  const handleSubmitData = (data: any) => {

  }

  return(
    <>
      <CreatePlans Voltar={handleVoltar} onSubmitData={handleSubmitData} />
    </>
  )
}
