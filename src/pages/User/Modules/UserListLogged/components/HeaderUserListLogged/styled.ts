import { ThemeColor } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`
 margin: 36px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; 



`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${ThemeColor.primaria};
  padding: 14px 24px;
  color: #FFF;
  font-size: 14px;
  font-weight: 500;
  line-height: 15.566px;

  @media screen and (max-width: 600px) {
    padding: 10px 20px; 
    font-size: 12px;
  }
`;

export const Title = styled.h2`
  color: ${ThemeColor.secundaria};
  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1100px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
