import styled from 'styled-components';

interface InvoiceValueProps {
  value: number;
}


export const InvoiceWrapper = styled.div`

width: 100%;
max-width: 260px;
height: 78px;
gap: 4px;

border-radius: 12px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

display: flex;
flex-direction: column;
justify-content: center;
padding-left: 24px;
`;

export const InvoiceLabel = styled.div`

font-size: 16px;
font-weight: 500;
line-height: 18px;

white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;


  @media (max-width: 900px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const InvoiceValue = styled.div<InvoiceValueProps>`
  color: ${props => props.color || (props.value < 0 ? 'red' : '#02B1F1')};

 font-size: 30px;
font-weight: 700;
line-height: 32px; 

    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 22px;
  }
`;

