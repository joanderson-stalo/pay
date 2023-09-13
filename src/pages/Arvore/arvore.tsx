import { BigCardArvore } from '@/components/BigCardArvore/bigCardArvore'
import * as S from './styled'
import Coluna from '@assets/icons/colunaArvore.svg'
import Linha from '@assets/icons/linhaArvore.svg'
import { bigCardArvoreMock } from '@/mock/cardBigArvore'
import { useState } from 'react'
import { CardArvore } from '@/components/cardArvore/cardArvore'
import { CardArvoreardArvoreMock } from '@/mock/cardArvore'

export function Arvore() {
  const [loading, seLoading] = useState<boolean>(false)

  return (
    <S.ContainerArvore>

      <S.ContainerTitle>
        <h2>Visualização da Rede</h2>
        <S.ContainerPJPF>
            <S.ButtonPJ active ><img src={Coluna} alt="" /></S.ButtonPJ>
            <S.ButtonPF active={false} ><img src={Linha} alt="" /></S.ButtonPF>
            </S.ContainerPJPF>
      </S.ContainerTitle>


    <S.ContainerCardBig>
    {bigCardArvoreMock.map((card, index) => (
        <BigCardArvore
          loading={loading}
          key={index}
          bgColor={card.bgColor}
          title={card.title}
          value={card.value}
        />
      ))}
    </S.ContainerCardBig>


    <S.ContainerCard>
  <S.Column>
    <h3>Você</h3>
    <span></span>

    <S.ContainerCardS>
    <CardArvore
        bgColor='#045469'
        loading={false}
        name='Jaime Filho'
        amount='15.000,00'
      />

    </S.ContainerCardS>


  </S.Column>

  <S.Column>
    <h3>Licenciados 01</h3>
    <span>Selecione um Licenciado de
sua rede para visualizar os
Estabelecimentos que
fazem parte dele</span>


{CardArvoreardArvoreMock.map((card, index) => (
      <S.ContainerCardS>
        <CardArvore
        key={index}
        bgColor={card.bgColor}
        loading={card.loading}
        name={card.name}
        amount={card.amount}
      />
      </S.ContainerCardS>
    ))}
  </S.Column>

  <S.Column>
    <h3>Licenciados 02</h3>
    <span>Selecione um Licenciado de
sua rede para visualizar os
Estabelecimentos que
fazem parte dele</span>

{CardArvoreardArvoreMock.map((card, index) => (
      <S.ContainerCardS>
        <CardArvore
        key={index}
        bgColor={card.bgColor}
        loading={card.loading}
        name={card.name}
        amount={card.amount}
      />
      </S.ContainerCardS>
    ))}
  </S.Column>

  <S.Column>
    <h3>Estabelecimentos</h3>
    <span>Os estabelecimentos aqui
exibidos estão ligados
diretamente a você</span>

{CardArvoreardArvoreMock.map((card, index) => (
      <S.ContainerCardS>
        <CardArvore
        key={index}
        bgColor={card.bgColor}
        loading={card.loading}
        name={card.name}
        amount={card.amount}
      />
      </S.ContainerCardS>
    ))}
  </S.Column>

  <S.Column>
    <h3>Colaboradores</h3>
    <span>Os colaboradores aqui
exibidos estão ligados
diretamente a você</span>
{CardArvoreardArvoreMock.map((card, index) => (
      <S.ContainerCardS>
        <CardArvore
        key={index}
        bgColor={card.bgColor}
        loading={card.loading}
        name={card.name}
        amount={card.amount}
      />
      </S.ContainerCardS>
    ))}

  </S.Column>
</S.ContainerCard>







    </S.ContainerArvore>
  )
}
