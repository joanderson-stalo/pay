import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}

interface InvoiceValueProps {
  value: number;
  primary: string;
  secundary: string;
}



export const InvoiceWrapper = styled.div`

width: 100%;
max-width: 260px;
height: 90px;
gap: 4px;

border-radius: 6px;
border: 1px solid #E6E6E6;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);

display: flex;
flex-direction: column;
justify-content: center;
padding-left: 24px;

@media (max-width: 900px) {
  max-width: 100%;
}
`;

export const InvoiceLabel = styled.div`

color:  #7D7D7D;
font-size: 16px;
font-weight: 500;
line-height: 26.723px;

white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;




  @media (max-width: 900px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const InvoiceValue = styled.div<InvoiceValueProps>`
  color: ${props => props.color || (props.value < 0 ? 'red' : ` ${props.primary}`)};

  font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 26.723px;

    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 22px;
  }
`;

