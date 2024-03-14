import { useTenantData } from "@/context";
import { ErrorMessage } from "./styled";
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  success?: boolean
};

export function MessageErrorList({ children, success }: Props) {
  const tenantData = useTenantData();


  return (
    <ErrorMessage secundary={tenantData.secondary_color_identity} success={success}>
      {children}
    </ErrorMessage>
  );
}
