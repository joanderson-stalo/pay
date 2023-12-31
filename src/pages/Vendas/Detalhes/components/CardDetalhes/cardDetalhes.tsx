import * as S from './styled'
import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';

interface CardDetalhesProps {
  amount:  string | undefined
  seller_company_name: string | undefined
  payment_type: string | undefined
  status: string | undefined
  comment: string | undefined
  brand: string | undefined
  card_number: string | undefined
  number_installments: number| undefined
  nsu_external: string | undefined
  acquire: string | undefined
  id_acquire: string | undefined
  equipment_sn:string | undefined
  tax_applied:string | undefined
  captured_in_date: string | undefined
  captured_in_time: string | undefined
}

export function CardDetalhes({
  seller_company_name,
  payment_type,
  comment,
  brand,
  card_number,
  number_installments,
  nsu_external,
  status,
  amount,
  acquire,
  id_acquire,
  equipment_sn,
  tax_applied,
  captured_in_date,
  captured_in_time
}: CardDetalhesProps) {
  return (
    <S.ContainerCardDetalhes>
      <S.ContextCard>
        <img src={
            brand === null && payment_type === 'Pix' ?pix :
            brand === 'Visa' ? visa :
            brand === 'Elo' ? elo :
            brand === 'MasterCard' ? masterCard :
            brand === 'Maestro' ? maestro :
            brand === 'Pix' ? pix : undefined
        } alt="" />
        <h3>{amount}</h3>
        <span>{acquire}-{id_acquire}</span>
        <S.TagDetalhes label={status}>SUCESSO</S.TagDetalhes>
      </S.ContextCard>

      <S.DetalheInfo>
        <S.InfoOne>
          <div>
            <h2>Estabelecimento</h2>
            <span>{seller_company_name}</span>
          </div>
          <div>
            <h2>Data</h2>
            <span>{captured_in_date}</span>
          </div>
          <div>
            <h2>Horário</h2>
            <span>{captured_in_time}</span>
          </div>
          <div>
            <h2>Titular</h2>
            <span>{comment}</span>
          </div>
        </S.InfoOne>

        <S.InfoTw>
          <div>
            <h2>Forma de pagamento</h2>
            <span>{payment_type}</span>
          </div>
          <div>
            <h2>Bandeira</h2>
            <span>{brand}</span>
          </div>
          <div>
            <h2>Cartão</h2>
            <span>{card_number}</span>
          </div>
          <div>
            <h2>Parcelas</h2>
            <span>{number_installments}x</span>
          </div>
        </S.InfoTw>

        <S.InfoTre>
          <S.Taxas>
            <h2>Taxas</h2>
            <span>{tax_applied}%</span>
          </S.Taxas>
          <div>
            <h2>SN</h2>
            <span>{equipment_sn}</span>
          </div>
          <div>
            <h2>NSU</h2>
            <span>{nsu_external}</span>
          </div>
        </S.InfoTre>
      </S.DetalheInfo>
    </S.ContainerCardDetalhes>
  )
}
