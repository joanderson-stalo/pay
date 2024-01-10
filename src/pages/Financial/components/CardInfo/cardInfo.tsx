import { formatCurrencyBR } from "@/utils/convertBRDinheiro";
import { InvoiceLabel, InvoiceValue, InvoiceWrapper } from "./styled";

interface InvoiceComponentProps {
  label: string;
  value: number;
  shouldFormat?: boolean;
  formatTaxa?: boolean;
  color?: string;
}

export function CardInfo({ label, value, shouldFormat = true, color, formatTaxa= false }: InvoiceComponentProps) {
  return (
    <InvoiceWrapper>
      <InvoiceLabel>{label}</InvoiceLabel>
      {shouldFormat ? (
        <InvoiceValue color={color} value={value} >{formatCurrencyBR(value)}</InvoiceValue>
      ) : (
        <InvoiceValue color={color}  value={value} >{value}</InvoiceValue> 
      )}
    </InvoiceWrapper>
  );
}
