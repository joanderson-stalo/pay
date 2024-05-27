import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const Label = styled.label`
  color: #3D4449;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const RequiredIndicator = styled.span`
  color: #FF0000;
`;

export const Input = styled.input`
  color: #B1B1B1;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding: 16px 24px;
  border-radius: 4px;
  border: 1px solid #D1D1D1;
`;
