import { ThemeColor } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`
 margin: 36px 20px 20px 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-left: 40px;
    margin-right: 48px;
  }

  @media (max-width: 1100px) {
    margin-left: 36px;
    margin-right: 44px;
  }

  @media (max-width: 900px) {
    margin-left: 32px;
    margin-right: 40px;
  }

  @media (max-width: 600px) {
    margin-left: 20px;
    margin-right: 28px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
background: ${ThemeColor.primaria};
padding: 14px 24px;
color: #FFF;
font-size: 14px;
font-weight: 500;
line-height: 15.566px;
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
