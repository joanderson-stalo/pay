
import styled from "styled-components"


interface Color {
  primary: string;
  secundary: string;
}



export const ContainerCardInfo = styled.div<Color>`
width: 100%;
padding: 20px 40px;
max-width: 200px;
border-radius: 6px;
background:   ${(props) => props.primary};






> section{

  gap: 4px;
  > p {
color:  #FFF;
font-size: 16px;
font-weight: 400;
line-height: 26.723px;


}

> span {

color:  #FFF;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 26.723px;
}




}

@media(max-width: 600px){
  padding: 10px 20px;
  max-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  >section{

    >p{
      font-size: 14px;
    }

    >span{
      font-size: 20px;
    }
  }

}

`
