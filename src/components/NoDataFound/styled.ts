import styled from 'styled-components';

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1.25rem;
  padding: 1.25rem;
`;

export const Image = styled.img`
  width: 50%;
  max-width: 200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Message = styled.p`
  font-size: ${({theme }) => theme.text_xl};
  font-weight: ${({theme }) => theme.font_bold};
  color: #333;
`;


export const ReloadButton = styled.button`
  padding: 10px 20px;
  margin-top: 1.25rem;
  border: none;
  border-radius: 0.3125rem;
  background-color: ${({theme }) => theme.purple_notification};
  color: ${({theme }) => theme.white_sys};
  font-size: ${({theme }) => theme.text_base};
  transition: background-color 0.2s;



  &:focus {
    outline: none;
  }
`;