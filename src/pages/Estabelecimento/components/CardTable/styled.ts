import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CardId = styled.div`
  font-weight: bold;
`;

export const CardTradingName = styled.div`
  font-size: 20px;
`;

export const CardCNPJCPF = styled.div`
  font-size: 16px;
  color: grey;
`;

export const CardContent = styled.div`
  margin-bottom: 20px;
`;

export const CardLicenciado = styled.div`
  font-size: 16px;
`;

export const CardTPV = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FornecedorWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const FornecedorItem = styled.div`
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const CardButton = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
