import { ThemeColor } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 44px;
  margin-top: 30px;
  margin-right: 52px;

  @media (max-width: 1200px) {
    margin-left: 24px;
    margin-right: 32px;
  }

  @media (max-width: 1100px) {
    margin-left: 20px;
    margin-right: 28px;
  }

  @media (max-width: 900px) {
    margin-left: 16px;
    margin-right: 24px;
  }

  @media (max-width: 600px) {
    margin-left: 12px;
    margin-right: 20px;
  }
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  min-width: 140px;
  height: 35px;
  padding: 0px 8px;
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
  white-space: nowrap;

  @media (max-width: 900px) {
    min-width: 130px;
    font-size: 11px;
  }

  @media (max-width: 600px) {
    min-width: 110px;
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

export const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 525px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid #E2E2E2;
  background: #FFF;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #9B959F;
  padding-right: 15px;

  > input {
    width: 100%;
    padding-right: 40px;
    color: #9B959F;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  .search-icon {
    position: absolute;
    right: 20px;
    color: #000;
  }

  @media (max-width: 1200px) {
    width: 475px;
  }

  @media (max-width: 1100px) {
    width: 425px;
  }

  @media (max-width: 900px) {
    width: 375px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9B959F;
  font-size: 21px;
  cursor: pointer;

  svg {
    width: 21.429px;
    height: 21.429px;
  }
`;
