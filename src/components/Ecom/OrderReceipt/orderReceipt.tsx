import { useEffect, useState } from "react";
import * as S from "./styled";
import checkCircle from '@assets/checkCircle.svg';

interface OrderReceiptProps {
  orderNumber: string;
  onTrackOrder: () => void;
  primaryColor: string;
}

export function OrderReceipt({ orderNumber, onTrackOrder, primaryColor }: OrderReceiptProps) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)')
    setIsSmallScreen(mediaQuery.matches)

    const handleScreenChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches)
    }

    mediaQuery.addListener(handleScreenChange)

    return () => {
      mediaQuery.removeListener(handleScreenChange)
    }
  }, [])

  return(
    <>
      <S.Container>
          <S.ContentIcon>
            <img src={checkCircle} alt="" />
            <h2>Compra realizada < br  /> com sucesso</h2>
          </S.ContentIcon>

          <S.ContainerButton primaryColor={primaryColor}>

            <div>
              <span>Número do pedido</span>
              <aside>
              <h3>{orderNumber}</h3>
              </aside>
            </div>

            <button type="button" onClick={onTrackOrder}> {isSmallScreen ?'Acompanhar' : 'Acompanhar meu pedido'}</button>
          </S.ContainerButton>

      </S.Container>
    </>
  )
}
