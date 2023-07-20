import { Bar } from "react-chartjs-2";
import styled from "styled-components";
export const ContainerGrafico = styled.div`
  width: 100%;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 15px;
  display: flex;
  flex-direction: column;
`;


export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;


> p {
  color: #2C2C2C;
font-family: Poppins;
font-size: 14px;
line-height: 20px;
}
`

export const Bolinha = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #10104F;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
`;
