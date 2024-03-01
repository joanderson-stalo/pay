import { ThemeColor } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`



`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;


color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 15.566px;


border-radius: 4px;
background:${ThemeColor.primaria};
white-space: nowrap;
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
