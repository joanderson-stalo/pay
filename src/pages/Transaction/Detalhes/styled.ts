
import styled from "styled-components";


interface ButtonProps {
  isActive: boolean;
}

export const ContainerDetalhe = styled.div`
  display: flex;
  margin: 36px 20px 20px 20px;

  justify-content: center;
`

export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ContextDetalhes = styled.div`
  display: flex;
  flex-direction: column;

  gap: 36px;
`
export const SectionCard = styled.section`
  display: flex;
  gap: 21px;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const SectionTable = styled.section`
  display: flex;
  gap: 23px;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

`
export const ButtonBlack = styled.button<ButtonProps>`
  color: #3c0a6d;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  background-color: transparent;
  display: flex;
  margin: ${({ isActive }) => (isActive ? '40px 0 0 40px' : '40px 0 0 100px')};
`;

