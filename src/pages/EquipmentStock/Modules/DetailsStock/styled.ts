
import styled from "styled-components";



interface Color {
  primary: string;
  secundary: string;
  disassociate?: boolean;
}

export const ContextDetalhes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 36px 20px 0px 20px;
  overflow: hidden;
`

export const ContainerWrapper = styled.div`
  display: flex;
  margin: 36px 20px 50px 20px;
  justify-content: center;
  gap: 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
  }
`


export const ButtonBlack = styled.button<Color>`
  color:  ${(props) => props.primary};
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;
display: flex;
margin: 40px 0 0 100px;
`
export const EditButton = styled.button<Color>`
border-radius: 4px;
background: ${(props) => props.disassociate ? '#CD5600' : props.primary};

cursor: pointer;


color: var(--color-branco-puro, #FFF);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
padding: 8px 24px;
z-index: 1;
`;




export const ContainerBtn = styled.div`
display: flex;
flex-direction: column;
gap: 32px;

@media (max-width: 900px) {
    flex-direction: row;
  }
`
