import { formatCurrencyBR } from "@/utils/convertBRDinheiro";
import { InvoiceLabel, InvoiceValue, InvoiceWrapper } from "./styled";

interface InvoiceComponentProps {
  label: string;
  value: number;
  shouldFormat?: boolean;
  formatTaxa?: boolean;
  color?: string;
}

export function CardInfo({ label, value, shouldFormat = true, color, formatTaxa = false }: InvoiceComponentProps) {
  let formattedValue;

  if (formatTaxa) {
    formattedValue = `${(value).toFixed(2).replace('.', ',')}%`;
  } else if (shouldFormat) {
    formattedValue = formatCurrencyBR(value);
  } else {
    formattedValue = value;
  }

  return (
    <InvoiceWrapper>
      <InvoiceLabel>{label}</InvoiceLabel>
      <InvoiceValue color={color} value={value}>
        {formattedValue}
      </InvoiceValue>
    </InvoiceWrapper>
  );
}
