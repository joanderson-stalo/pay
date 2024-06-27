
import styled from "styled-components";


interface Color {
  primary: string;
  secundary: string;
}

interface BtnFilterModel extends Color {
  statusModel: string;
}

export const ContainerListProducts = styled.div`
  margin: 36px 20px 20px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 36px;
  

`

export const Container= styled.div`
  margin: 36px 20px 20px 20px;
  width: 100%;







`

export const Line = styled.div`
border: 1px solid rgba(125, 125, 125, 0.15);

`

export const ContentFilter = styled.div`
display: flex;
gap: 20px;

@media (max-width: 600px){
  gap: 5px;
}
`

export const BtnFilterModel = styled.button<BtnFilterModel>`
color: ${({ statusModel, primary }) => (statusModel === 'active' ? primary : '#5F6367')};

background: transparent;

width: 99px;
display: flex;
justify-content: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
line-height: 30px;
margin-bottom: -2px;

border-bottom: ${({ statusModel, primary }) => (statusModel === 'active' ? `2px solid ${primary}` : 'none')};




`
