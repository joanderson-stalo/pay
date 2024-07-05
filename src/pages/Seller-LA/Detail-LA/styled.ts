
import styled from 'styled-components'

interface Color {
  primary: string;
  secundary: string;
}



export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width: 1280px){
    gap: 20px;
  }

  @media(max-width: 480px){
  flex-direction: column;
  align-items: start;

}


`

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px){

  }



`

export const Container = styled.div`
  margin: 36px 20px 20px 20px;

`

export const Title = styled.p<Color>`
  color: #3D4449;
  font-size: 32px;
  font-weight: 600;

  @media(max-width: 780px){
    font-size: 24px;
  }

   @media(max-width: 600px){
    font-size: 16px;
  }

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
gap: 16px;
flex-wrap: wrap;
align-items: center;

@media(max-width: 480px){

  align-items: start;
  gap: 8px;
}

`

export const ButtonDelete= styled.button`


  color:  #C81B1B;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  height: 24px;
  border-bottom: 1px solid #C81B1B;

`
export const ButtonManageAccess = styled(ButtonDelete)<Color>`
  background: #FFF;
  color:${(props) => props.primary};
  border: 1px solid ${(props) => props.primary};
  border-radius: 4px;
  padding: 4px 20px;
  height: 32px;

  @media (max-width: 480px ){
    padding: 4px 10px;
  }

`;

export const ButtonEditRegistration = styled(ButtonDelete)<Color>`
  background: #FFF;
  color:${(props) => props.primary};
  border: 1px solid ${(props) => props.primary};
  border-radius: 4px;
  padding: 4px 20px;
  height: 32px;

  @media (max-width: 480px ){
    padding: 4px 10px;
  }


`;
