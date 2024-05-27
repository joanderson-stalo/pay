import * as S from './styled';

type OrderItem = {
  id: number;
  quantity: number;
  name: string;
  link_image_cover: string;
  sales_value: number;
};

type OrderData = {
  recipientName?: string;
  cpf?: string;
  cep?: string;
  bairro?: string;
  endereco?: string;
  cidade?: string;
  numero?: string;
  estado?: string;
  complemento?: string;
  items?: OrderItem[];
};

export const OrderDetailsFooter = ({ orderData }: { orderData: OrderData | null }) => {
  if (!orderData) {
    return <div>Loading address information...</div>;
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <S.OrderDetailsContainer>
      <S.Container>
          <S.ContainerTitle>
            <h3>Revisão do pedido</h3>

              <S.OrderDetailsRow>
          <S.OrderDetail>Nome do destinatário: {orderData.recipientName || '...'}</S.OrderDetail>
          <S.OrderDetail>CPF: {orderData.cpf || '...'}</S.OrderDetail>
        </S.OrderDetailsRow>

        <S.OrderDetailsRow>
          <S.OrderDetail>CEP: {orderData.cep || '...'}</S.OrderDetail>
          <S.OrderDetail>Endereço: {orderData.endereco || '...'}</S.OrderDetail>
          <S.OrderDetail>Estado: {orderData.estado || '...'}</S.OrderDetail>
          <S.OrderDetail>Complemento: {orderData.complemento || '...'}</S.OrderDetail>
          <S.OrderDetail>Bairro: {orderData.bairro || '...'}</S.OrderDetail>
          <S.OrderDetail>Cidade: {orderData.cidade || '...'}</S.OrderDetail>
        </S.OrderDetailsRow>

          </S.ContainerTitle>

        <S.OrderDetailsRowItem>
          <h3>Pedido:</h3>
          {orderData.items && orderData.items.map((item) => (
            <S.OrderDetail key={item.id}>
              {item.quantity} x {item.name} {formatCurrency(item.sales_value)}
            </S.OrderDetail>
          ))}
          <p>Estimativa de entrega: 15 dias</p>
        </S.OrderDetailsRowItem>
      </S.Container>
    </S.OrderDetailsContainer>
  );
};
