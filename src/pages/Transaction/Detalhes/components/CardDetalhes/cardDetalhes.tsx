import * as S from './styled'
import pix from '@assets/bandeiras/pix.svg'
import elo from '@assets/bandeiras/elo.svg'
import maestro from '@assets/bandeiras/maestro.svg'
import visa from '@assets/bandeiras/visa.svg'
import masterCard from '@assets/bandeiras/master.svg'
import hyper from '@assets/Card/hypers.svg'
import amex from '@assets/bandeiras/amex.svg'
import { useTenantData } from '@/context'

interface CardDetalhesProps {
  id: number | undefined
  amount: string | undefined
  seller_company_name: string | undefined
  payment_type: string | undefined
  status: string | undefined
  comment: string | undefined
  brand: string | undefined
  card_number: string | undefined
  number_installments: number | undefined
  nsu_internal: string | undefined
  acquire: string | undefined
  id_acquire: string | undefined
  equipment_sn: string | undefined
  tax_applied: string | undefined
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
  nsu_internal,
  status,
  amount,
  acquire,
  id_acquire,
  equipment_sn,
  tax_applied,
  captured_in_date,
  captured_in_time,
  id
}: CardDetalhesProps) {
  const tenantData = useTenantData()

  return (
    <S.ContainerCardDetalhes>
      <S.ContextCardHeader>
        <p>Valor total:</p>
        <S.ContextCard>
          <h3>{amount}</h3>

          <S.ContainerTags
           primary={tenantData.primary_color_identity}
           secundary={tenantData.secondary_color_identity}
          >
          <span>
            {acquire}-{id_acquire}
          </span>

          <S.TagDetalhes label={status}>
            {status?.toLocaleLowerCase() === 'cancelled'
              ? 'Cancelado'
              : 'Sucesso'}
          </S.TagDetalhes>
          </S.ContainerTags>
        </S.ContextCard>
      </S.ContextCardHeader>

      <S.DetalheInfo>
        <S.InfoOne
          primary={tenantData.primary_color_identity}
          secundary={tenantData.secondary_color_identity}
        >
          <div>
            <h2>Estabelecimento</h2>
            <span>{seller_company_name}</span>
          </div>

          <div>
            <h2>Titular</h2>
            <span>{comment}</span>
          </div>
          <div>
            <h2>NSU</h2>
            <span>{nsu_internal}</span>
          </div>

        </S.InfoOne>

        <S.InfoTw
          primary={tenantData.primary_color_identity}
          secundary={tenantData.secondary_color_identity}
        >
           <div>
            <h2>Data</h2>
            <span>{captured_in_date}</span>
          </div>




        </S.InfoTw>

        <S.InfoTre
          primary={tenantData.primary_color_identity}
          secundary={tenantData.secondary_color_identity}
        >


          <div>
            <h2>Horário</h2>
            <span>{captured_in_time}</span>
          </div>

          <div>
            <h2>Bandeira</h2>
            <span>{brand}</span>
          </div>


          <div>
            <h2>SN</h2>
            <span>{equipment_sn}</span>
          </div>

        </S.InfoTre>
        <S.InfoTre
          primary={tenantData.primary_color_identity}
          secundary={tenantData.secondary_color_identity}
        >

<div>
            <h2>Forma de pagamento</h2>
            <span>
              {payment_type === 'debit'
                ? 'Débito'
                : payment_type === 'credit'
                ? 'Crédito'
                : 'Pix'}
            </span>
          </div>

          <div>
            <h2>Cartão</h2>
            <span>{card_number}</span>
          </div>

          <div>
            <h2>ID</h2>
            <span>{id}</span>
          </div>

        </S.InfoTre>

        <S.InfoTre
         primary={tenantData.primary_color_identity}
         secundary={tenantData.secondary_color_identity}

        >

<div>
            <h2>Parcelamento</h2>
            <span>
              {number_installments == 0
                ? 'à vista'
                : `${number_installments} x`}
            </span>
          </div>

          <S.Taxas
            primary={tenantData.primary_color_identity}
            secundary={tenantData.secondary_color_identity}
          >
            <h2>Taxas</h2>
            <span>{tax_applied}%</span>
          </S.Taxas>

        </S.InfoTre>
      </S.DetalheInfo>
    </S.ContainerCardDetalhes>
  )
}
