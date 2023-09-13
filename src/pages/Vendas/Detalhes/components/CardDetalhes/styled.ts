import styled from "styled-components";

interface ITagDetalhes {
  label: string;
}

export const ContainerCardDetalhes = styled.div`
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
background:  #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 0 44px 0;
`

export const ContextCard = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 27px;
  gap: 15px;

  > img {
    width: 100%;
    max-width: 54px;
height: 33px;
  }

  > h3{
    color:  #08BBE9;
font-size: 36px;
font-weight: 700;
  }

  > span {
    color:  #A0A0A0;
font-size: 18px;
font-weight: 700;
  }
`

export const TagDetalhes = styled.p<ITagDetalhes>`
  border-radius: 4px;
background:${props => props.label === 'SUCESSO' ? '#48F041' : 'red'} ;
padding: 0 8px 0 8px;

color:  #E6F8FD;
font-size: 12px;
font-weight: 600;
`

export const DetalheInfo = styled.div`
  margin-left: 100px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`

export const InfoOne = styled.div`
  display: flex;
  flex-direction: row;
  gap: 77px;


  > div {
      h2{
        color: #10104F;
font-size: 16px;
font-weight: 700;
      }

      span{
        color:  #A0A0A0;
font-size: 16px;
font-weight: 500;
      }
  }

`

export const InfoTw = styled.div`
  display: flex;
  flex-direction: row;
  gap: 82px;


  > div {
      h2{
        color: #10104F;
font-size: 16px;
font-weight: 700;
      }

      span{
        color:  #A0A0A0;
font-size: 16px;
font-weight: 500;
      }
  }

`

export const InfoTre = styled.div`
  display: flex;
  flex-direction: row;
  gap: 94px;

  > div {
      h2{
        color: #10104F;
font-size: 16px;
font-weight: 700;
      }

      span{
        color:  #A0A0A0;
font-size: 16px;
font-weight: 500;
      }
  }

`

export const Taxas = styled.div`
  margin-right: 118px;

      h2{
        color: #10104F;
font-size: 16px;
font-weight: 700;
      }

      span{
        color:  #A0A0A0;
font-size: 16px;
font-weight: 500;
      }
`
