import styled from 'styled-components';

interface ITagDetalhes {
  label: string | undefined;
}

interface Color {
  primary: string;
  secundary: string;
}

export const ContainerCardDetalhes = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 0 44px 0;
`;

export const ContextCard = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 27px;
  gap: 15px;
  justify-content: center;

  
  @media (max-width: 600px) {
   flex-direction: column;
   justify-content: start;
   align-items: start;
  }

  > img {
    width: 100%;
    max-width: 54px;
    height: 33px;
  }

  > h3 {
    color: #08bbe9;
    font-size: 36px;
    font-weight: 700;
  }

  > span {
    color: #a0a0a0;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const TagDetalhes = styled.p<ITagDetalhes>`
  border-radius: 4px;
  background: ${(props) => (props.label === 'succeeded' ? '#55B938' : 'red')};
  padding: 4px 8px;
  color: #e6f8fd;
  font-size: 12px;
  font-weight: 600;
`;

export const DetalheInfo = styled.div`
  margin-top: 23px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 36px;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 600px) {
   flex-direction: column;
  }
`;

export const InfoOne = styled.div<Color>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    h2 {
      color:  ${(props) => props.primary};
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const InfoTw = styled.div<Color>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    h2 {
      color:  ${(props) => props.primary};
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const InfoTre = styled.div<Color>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    h2 {
      color: ${(props) => props.primary};
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const Taxas = styled.div<Color>`
  h2 {
    color:  ${(props) => props.primary};
    font-size: 16px;
    font-weight: 700;
  }

  span {
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 500;
  }
`;
