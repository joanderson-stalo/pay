import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}


export const Container = styled.div`
  margin: 36px 0px 30px 0px;
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
  }
`;
