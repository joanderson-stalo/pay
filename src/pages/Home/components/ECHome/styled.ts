import styled from "styled-components";
import IconTooltip from '@assets/icons/toostip.svg'
import { ThemeColor } from "@/config/color";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 36px 20px 20px 20px;
`

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 56px;;
`

export const ContainerCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 28px;  
  width: 60%;
`

export const ContainerGrafico = styled.div`
  padding: 0 20px;
`

export const ContainerInfoGrafico = styled.div`

  display: flex;
  justify-content: space-between;


`

export const ContainerTitle = styled.div`

display: flex;
align-items: center;
gap: 10px;
position: relative;

> h4{
  color: var(--foundation-brand-01-normal-hover, #0E0E47);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 18px;
font-weight: 600;
line-height: 28px;
}
`

export const ContainerTooltip = styled.div`
  position: relative;
  display: inline-block; 
`;


export const TooltipIcon = styled.img.attrs({ src: IconTooltip })`
  cursor: pointer;
  width: 18px;
height: 18px;
  background-color: transparent;
  &:hover + span {
    display: block;
  }
`;

export const TooltipText = styled.span`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%); 
  background: #333;
  color: #fff;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;

  ${TooltipIcon}:hover & {
    display: block;
  }
`;


export const ContainerCalendar = styled.div`
  display: flex;
  gap: 30px;
`

export const Title = styled.h2`
margin-top: 28px;
margin-bottom: 28px;
color: ${ThemeColor.secundaria};
font-size: 24px;
font-weight: 700;
padding: 0 20px;
`