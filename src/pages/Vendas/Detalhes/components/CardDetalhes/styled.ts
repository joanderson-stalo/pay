import styled from 'styled-components';

interface ITagDetalhes {
  label: string | undefined;
}

export const ContainerCardDetalhes = styled.div`
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 0 44px 0;

  @media (max-width: 1200px) {
    padding: 20px 0 34px 0;
  }

  @media (max-width: 900px) {
    padding: 15px 0 29px 0;
  }

  @media (max-width: 600px) {
    padding: 16px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContextCard = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 27px;
  gap: 15px;

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

  @media (max-width: 1200px) {
    margin-left: 15px;
    gap: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
    gap: 5px;
  }
`;

export const TagDetalhes = styled.p<ITagDetalhes>`
  border-radius: 4px;
  background: ${(props) => (props.label === 'succeeded' ? '#48F041' : 'red')};
  padding: 0 8px 0 8px;

  color: #e6f8fd;
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const DetalheInfo = styled.div`
  margin-left: 100px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media (max-width: 1200px) {
    margin-left: 30px;
    margin-right: 30px;
    gap: 20px;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 10px;
    margin-right: 0px;
    gap: 10px;
  }
`;

export const InfoOne = styled.div`
  display: flex;
  flex-direction: row;
  gap: 77px;

  > div {
    h2 {
      color: #10104f;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 900px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const InfoTw = styled.div`
  display: flex;
  flex-direction: row;
  gap: 82px;

  > div {
    h2 {
      color: #10104f;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }

  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 900px) {
    gap: 25px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const InfoTre = styled.div`
  display: flex;
  flex-direction: row;
  gap: 94px;

  > div {
    h2 {
      color: #10104f;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }

  @media (max-width: 1200px) {
    gap: 60px;
  }

  @media (max-width: 900px) {
    gap: 30px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Taxas = styled.div`
  margin-right: 118px;

  h2 {
    color: #10104f;
    font-size: 16px;
    font-weight: 700;
  }

  span {
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    margin-right: 60px;
  }

  @media (max-width: 900px) {
    margin-right: 30px;
  }

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;
