
import styled from 'styled-components'

interface Color {
  primary: string;
  secundary: string;
}

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;

`

export const Container = styled.div`
  margin: 36px 20px 20px 20px;

`

export const Title = styled.p<Color>`
  color: ${(props) => props.secundary};
  font-size: 24px;
  font-weight: 700;
  margin-top: 36px;
  > span {
    color: #b5b5c8;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 25px;

`

export const ButtonVisualizar = styled.button<Color>`
width: 129px;
height: 35px;

border-radius: 5px;
border: 0.5px solid  #0E0E47;
background:  ${(props) => props.primary};

color:  #FDFDFD;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`

export const EditarCadastro = styled.button<Color>`
  width: 213px;
height: 35px;

border-radius: 5px;
border: 0.5px solid #0086ED;
background: ${(props) => props.secundary};

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`
export const ContainerGrafico = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 36px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const ContainerTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const ButtonBlack = styled.button<Color>`
  color: ${(props) => props.primary};

font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;

`


export const ContainerBnt = styled.div`
display: flex;
gap: 12px;
margin-top: 36px;
flex-wrap: wrap;

`

export const ButtonDelete= styled.button`
background: #E91414;

color:  #FDFDFD;
font-size: 14px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.5px;
padding: 14px 40px;

border-radius: 5px;
border: 0.5px solid var(--Red-Error, #E91414);
`
export const ButtonManageAccess = styled(ButtonDelete)<Color>`
  background: #FBFBFB;
  border-color: #FBFBFB;
  color:  ${(props) => props.primary};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ButtonEditRegistration = styled(ButtonDelete)<Color>`
  background:${(props) => props.primary};
  border-color: ${(props) => props.primary};
  color: #FDFDFD;
`;
