
import { TitleH } from "@/components/Title/title";
import { HeaderContainer } from "./styled";
import { Breadcrumb } from "@/components/Ecom/Breadcrumb/breadcrumb";
import { useTenantData } from "@/context";

const steps = [
  { name: "Informações", isActive: true, isComplete: false },
  { name: "Pagamento", isActive: false, isComplete: false },
  { name: "Confirmação da compra", isActive: false, isComplete: false },
];

export function HeaderListProducts() {
  const {primary_color_identity} = useTenantData();

  return (
    <>
    < HeaderContainer>
      <TitleH title='Aquisição de equipamentos' />
      <Breadcrumb primaryColor={primary_color_identity} steps={steps} />
    </HeaderContainer>
    </>
  );
}
