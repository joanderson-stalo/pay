
import styled from "styled-components";



interface Color {
  primary: string;
  secundary: string;
}

export const ContextDetalhes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:  0 30px;
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
  padding: 14px 24px;
  border-radius: 5px;
  background: var(--foundation-white-light-hover, #FBFBFB);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.secundary};

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const CancelButton = styled(EditButton)`
color: var(--Red-Error, #E91414);
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 40px;
  margin:  36px 0px;
  padding:  0 30px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const ContainerBtn = styled.div`
display: flex;
flex-direction: column;
gap: 32px;

@media (max-width: 900px) {
    flex-direction: row;
  }
`
