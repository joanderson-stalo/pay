import { ThemeColor } from "@/config/color";
import styled from "styled-components";

export const ContainerGrafico = styled.div`
  width: 100%;
  max-width: 792px;
  height: 328px;

  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 15px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 12px;
  }

  @media (max-width: 1100px) {
    padding: 10px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }

`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;

  > p {
    color: #2C2C2C;
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 1200px) {
    margin-left: 18px;

    > p {
      font-size: 13px;
      line-height: 18px;
    }
  }

  @media (max-width: 1100px) {
    margin-left: 16px;

    > p {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const Bolinha = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${ThemeColor.primaria};
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;

  @media (max-width: 1200px) {
    width: 13px;
    height: 13px;
    margin-right: 4px;
  }

  @media (max-width: 1100px) {
    width: 12px;
    height: 12px;
    margin-right: 3px;
  }
`;
