import styled from 'styled-components';

interface ITagDetalhes {
  label: string | undefined;
}

interface Color {
  primary: string;
  secundary: string;
}

export const ContainerCardDetalhes = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #fff;
  padding: 20px 0 20px 30px;
  border-radius: 8px;
  border: 1px solid #D1D1D1;
  margin-top: 16px;
`;



export const ContextCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 24px;



  @media (max-width: 600px) {
   flex-direction: column;
   justify-content: start;
   align-items: start;
  }

  > img {
    width: 100%;
    max-width: 54px;
    height: 33px;
  }

  > h3 {
    color:#202124;

font-size: 40px;

font-weight: 700;
line-height: 24px;
letter-spacing: 0.5px;
  }


`;


export const ContextCardHeader = styled.div`

display: flex;
flex-direction: column;
gap: 10px;

>p{
  color:  #202124;
  font-size: 14px;

  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
}

@media (max-width: 600px){

}

`

export const ContainerTags = styled.div<Color>`
display: flex;
align-items: center;
gap: 9px;


> span {
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    display: inline-flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background:  ${(props) => props.primary};
  }
`

export const TagDetalhes = styled.p<ITagDetalhes>`
  border-radius: 4px;
  background: ${(props) => (props.label === 'succeeded' ? '#178629' : 'red')};
  padding: 4px 8px;
  color: #e6f8fd;
  font-size: 12px;
  font-weight: 600;
`;

export const DetalheInfo = styled.div`
  margin-top: 23px;
  width: 100%;
  display: flex;

  gap: 36px;
  justify-content: start;

  @media (max-width: 900px) {
   flex-wrap: wrap;
   gap: 20px;
  }


  @media (max-width: 600px) {
   flex-direction: column;
   gap: 8px;
  }
`;

export const InfoOne = styled.div<Color>`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      color:  #202124;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #202124;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px
    }
  }

  @media (max-width: 600px){
    gap: 8px;
    div{
      gap: 3px;
    }
}
`;

export const InfoTw = styled.div<Color>`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    h2 {
      color:  #202124;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #202124;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px
    }
  }
  @media (max-width: 600px){
    gap: 8px;
    div{
      gap: 3px;
    }
  }

`;

export const InfoTre = styled.div<Color>`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    h2 {
      color:  #202124;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #202124;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px
    }
  }

  @media (max-width: 600px){
    gap: 8px;
    div{
      gap: 3px;
    }
  }
`;

export const Taxas = styled.div<Color>`
  h2 {
    color:  ${(props) => props.primary};
    font-size: 16px;
    font-weight: 700;
  }

  span {
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 500;
  }
`;
