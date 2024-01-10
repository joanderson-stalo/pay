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
  display: flex;
  width: 213px;
  height: 35px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0.5px solid #0086ED;
  background: ${ThemeColor.secundaria};
  color: #FFF;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  min-width: 100px;

  @media (max-width: 1200px) {
    max-width: 190px;
  }

  @media (max-width: 1100px) {
    max-width: 170px;
  }

  @media (max-width: 900px) {
    max-width: 150px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
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
