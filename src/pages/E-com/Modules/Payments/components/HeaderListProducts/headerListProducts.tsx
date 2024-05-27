
import { TitleH } from "@/components/Title/title";
import { HeaderContainer } from "./styled";
import { Breadcrumb } from "@/components/Ecom/Breadcrumb/breadcrumb";
import { useTenantData } from "@/context";

const steps = [
  { name: "Informações", isActive: false, isComplete: true },
  { name: "Pagamento", isActive: true , isComplete: false },
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
