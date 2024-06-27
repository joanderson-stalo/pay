
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}


export const ContainerButton = styled.button<Color>`


width: 100%;
max-width: 328px;
align-items: center;
text-align: center;

padding: 60px;

margin-top: 50px;
border-radius: 13.495px;
background: #FFF;
box-shadow: 0px 4.498px 4.498px 0px rgba(0, 0, 0, 0.1);



> svg {
  font-size: 80px;
  color: ${(props) => props.primary};
}

>h2{
  color:${(props) => props.primary};
text-align: center;
font-size: 28px;
font-weight: 700;
}

@media (max-width: 900px) {

max-width: 200px;
padding: 40px 2px;

  >h2{
font-size: 24px;
line-height: 26px;
}

> svg {
  font-size: 50px;

}
  }
`
