import styled from 'styled-components';

type FuncionamentoTableDataProps = {
  funcionamento: 'quebrado' | 'estável' | 'incompleto';
  primary?: string;
};

interface Color {
  primary: string;
  secundary: string;
}

export const ContainerCardDetalhes = styled.div`
  width: 100%;


  max-width: 908px;
  padding: 40px 80px;
  border-radius: 8px;
background: var(--Sys---Neutro-04, #FFF);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-bottom: 20px;


  @media (max-width: 900px) {
    padding: 30px;
  max-width: 100%;
  }

`;

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 52px;


  @media (max-width: 900px) {
    margin-bottom: 12px;
    align-items: start;
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 20px;
`;

export const InfoTitle = styled.h1`
  color: var(--Foundation-neutral-Normal, #7D7D7D);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const InfoSubtitle = styled.h2<FuncionamentoTableDataProps>`
 color: ${({ funcionamento, primary }) => {
    switch (funcionamento) {
      case 'quebrado':
        return '#E91414';
      case 'estável':
        return primary ;
      case 'incompleto':
        return '#FF7C33';
      default:
        return '#343A40';
    }
  }};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const WrapperContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 67px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const InfoWrapper2 = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;


`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoLabel = styled.h1<Color>`
  color:  ${(props) => props.primary};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

export const InfoValue = styled.h2`
  color: var(--Foundation-neutral-Normal, #7D7D7D);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  max-width: 276px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;


export const InfoValueComent = styled.h2`
  color: var(--Foundation-neutral-Normal, #7D7D7D);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  max-height: 276px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;


export const ImgPos = styled.img`
  width: 250px;
  height: 200px;
  margin-left: 80px;
  object-fit: contain;

  @media (max-width: 900px) {
    display: none;
  }
`
