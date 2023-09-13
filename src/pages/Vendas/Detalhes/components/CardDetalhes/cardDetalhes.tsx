import * as S from "./styled";
import master from '@assets/mastercard.svg'

export function CardDetalhes(){
  return(
    <S.ContainerCardDetalhes>

        <S.ContextCard>
        <img src={master} alt="" />
        <h3>R$ 500,00</h3>
        <span>F1-2736342</span>
        <S.TagDetalhes label="SUCESSO">SUCESSO</S.TagDetalhes>
        </S.ContextCard>

        <S.DetalheInfo>

          <S.InfoOne>
            <div>
              <h2>Estabelecimento</h2>
              <span>Padaria Trevo 4 Folhas</span>
            </div>
            <div>
              <h2>Data</h2>
              <span>21/12/2021</span>
            </div>
            <div>
              <h2>Horário</h2>
              <span>09:45</span>
            </div>
            <div>
              <h2>Titular</h2>
              <span>Joanderson Roberto da Silva</span>
            </div>
          </S.InfoOne>


          <S.InfoTw>
            <div>
              <h2>Forma de pagamento</h2>
              <span>Crédito</span>
            </div>
            <div>
              <h2>Bandeira</h2>
              <span>Master</span>
            </div>
            <div>
              <h2>Cartão</h2>
              <span>5028.xxxx.xxxx.1855</span>
            </div>
            <div>
              <h2>Parcelas</h2>
              <span>10x</span>
            </div>
          </S.InfoTw>


          <S.InfoTre>
            <S.Taxas>
              <h2>Taxas</h2>
              <span>2,50%</span>
            </S.Taxas>
            <div>
              <h2>SN</h2>
              <span>5897MK3685</span>
            </div>
            <div>
              <h2>NSU</h2>
              <span>33732241803928</span>
            </div>
          </S.InfoTre>


        </S.DetalheInfo>

    </S.ContainerCardDetalhes>
  )
}
