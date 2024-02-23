import styled from 'styled-components';

type FuncionamentoTableDataProps = {
  funcionamento: 'quebrado' | 'estável' | 'incompleto';
};

export const ContainerCardDetalhes = styled.div`
  width: 100%;
  max-width: 908px;
  border-radius: 8px;
  background: var(--Sys---Neutro-04, #FFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 32px 116px;


  @media (max-width: 900px) {
    padding: 30px;
  max-width: 100%;
  }

`;

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
 color: ${({ funcionamento }) => {
    switch (funcionamento) {
      case 'quebrado':
        return '#E91414';
      case 'estável':
        return '#02B1F1';
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

export const EditButton = styled.button`
  padding: 14px 24px;
  border-radius: 5px;
  background: var(--foundation-white-light-hover, #FBFBFB);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--Foundation-PagueAssim02-Normal, #02B1F1);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const WrapperContainer2 = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

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

export const InfoLabel = styled.h1`
  color: var(--Foundation-PagueAssim01-Normal, #3C0A6D);
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

  max-height: 72px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

export const DownloadButton = styled.button`
  background: #B2EAF8;
  border-radius: 4px;
  border: 1px dashed var(--foundation-brand-02-light-active, #B2EAF8);
  color: var(--Foundation-PagueAssim02-Normal, #02B1F1);
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  padding: 16px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  margin-top: 20px;
`;
