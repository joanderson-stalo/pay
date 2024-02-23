import { ThemeColor } from "@/config/color";
import styled from "styled-components";

export const ContainerCardUserLogged = styled.div`
width: 100%;
background: var(--foundation-white-light, #FDFDFD);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-bottom: 40px;
`;

export const HeaderUserLogged = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;
background: ${ThemeColor.primaria};
padding: 18px 30px ;

>h4 {
  border-radius: 4px;
background: ${ThemeColor.secundaria};
padding: 4px;

color: var(--foundation-brand-02-light, #E6F8FD);
text-align: center;
font-size: 12px;
font-weight: 600;
}

  >h2{
    color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 13.252px;
font-style: normal;
font-weight: 400;
line-height: 20.824px;
  }
`

export const UserAvatar = styled.div`
  background-color: #C4C4C4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;


export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
padding: 18px ;
gap: 20px;


`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;


>h3{
  color: var(--foundation-white-dark-hover, #8A8A8A);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 11px;
font-style: normal;
font-weight: 600;
line-height: 15.566px;

> span {
  color: var(--light-secondary, #6C757D);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;

overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 90%;
}
}

`

export const UserBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const ButtonRemove = styled.button`
padding: 4px 12px;

border-radius: 3.532px;
border: 0.353px solid var(--foundation-white-normal-hover, #CFCFCF);
background: var(--foundation-white-light, #FDFDFD);


color: #EB001B;
font-size: 11px;
font-weight: 500;
line-height: 14.128px;
letter-spacing: 0.353px;
`


export const ButtonRecover = styled.button`
padding: 4px 12px;

border-radius: 3.532px;
border: 0.353px solid var(--foundation-white-normal-hover, #CFCFCF);
background: var(--foundation-white-light, #FDFDFD);


color: #5A6ACF;
font-size: 11px;
font-weight: 500;
line-height: 14.128px;
letter-spacing: 0.353px;
`
