import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 183px;
  height: 157px;
  background: ${({ theme }) => theme.white_sys};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;

  @media (max-width: 1200px) {
    width: 160px;
    height: 137px;
    gap: 15px;
  }

  @media (max-width: 1100px) {
    width: 140px;
    height: 120px;
    gap: 12px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.neutral_normal};

  @media (max-width: 1200px) {
    font-size: 13px;
  }

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.red_error};

  @media (max-width: 1200px) {
    font-size: 13px;
  }

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

export const ContextLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Line = styled.div`
  width: 160px;
  height: 0px;
  border: 1px solid rgba(125, 125, 125, 0.15);

  @media (max-width: 1200px) {
    width: 140px;
  }

  @media (max-width: 1100px) {
    width: 120px;
  }
`;
