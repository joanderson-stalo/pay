import styled from "styled-components"

interface Color {
  primary: string;
  secundary: string;
}




export const ContainerCardInfo = styled.div<Color>`
  width: 100%;
  max-width: 200px;
  padding: 20px 40px;
background: #FFF;
border-radius: 6px;
border: 1px solid  ${(props) => props.primary};
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);



> section{
  > p {
font-size: 16px;
color:  ${(props) => props.primary};
font-style: normal;
font-weight: 400;
line-height: 26.723px;
}

> span {

color:  ${(props) => props.primary};
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
