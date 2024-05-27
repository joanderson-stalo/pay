import React, { useContext, useEffect, useState } from 'react'
import { formatCurrencyBR } from '@/utils/convertBRDinheiro'
import * as S from './styled'
import { Minus, Plus, Spinner } from '@phosphor-icons/react'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { CartContext, useCart } from '@/context/e-com/cart'

interface ProductData {
  id: number
  sales_value: number
  name: string
  link_image_cover: string
}

interface CardProductListProps {
  data: ProductData[]
}

export function CardProduct({ data }: CardProductListProps) {
  const initialQuantities: { [key: number]: number } = {}
  data.forEach(item => {
    initialQuantities[item.id] = 1
  })
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    initialQuantities
  )

  const [loadingItems, setLoadingItems] = useState<{ [key: number]: boolean }>(
    {}
  )

  const { updateCart } = useCart()

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

  const decreaseQuantity = (id: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) - 1, 1)
    }))
  }

  const increaseQuantity = (id: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.min((prevQuantities[id] || 1) + 1, 999)
    }))
  }

  const handleAddToCart = async (
    id: number,
    name: string,
    sales_value: number,
    link_image_cover: string
  ) => {
    setLoadingItems(prevLoadingItems => ({
      ...prevLoadingItems,
      [id]: true
    }))

    try {
      await addToCartAsync(id)
      await addToCart(id, name, sales_value, link_image_cover)
      const cartItemsStr = Cookies.get('cart') || '[]'
      const newCartItems: ProductData[] = JSON.parse(cartItemsStr)
      updateCart(newCartItems)
      toast.success('Produto adicionado ao carrinho')
    } catch (error) {
      alert('Erro ao adicionar ao carrinho')
    } finally {
      setLoadingItems(prevLoadingItems => ({
        ...prevLoadingItems,
        [id]: false
      }))
    }
  }

  const addToCart = (
    id: number,
    name: string,
    sales_value: number,
    link_image_cover: string
  ) => {
    const cartItemsStr = Cookies.get('cart') || '[]'
    let cartItems = JSON.parse(cartItemsStr)

    const existingItemIndex = cartItems.findIndex((item: any) => item.id === id)

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantities[id] || 0
    } else {
      cartItems.push({
        id: id,
        quantity: quantities[id],
        name: name,
        link_image_cover: link_image_cover,
        sales_value: sales_value
      })
    }
    Cookies.set('cart', JSON.stringify(cartItems), { expires: 7 })
  }

  const addToCartAsync = (id: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

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

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const limitedQuantity = Math.min(newQuantity, 999);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: limitedQuantity
    }));
  };

  return (
    <>
      {data.map(item => (
        <S.ContainerCardProduct key={item.id}>
          <S.StyledImage src={item.link_image_cover} alt={item.name} />
          <S.ContainerPrice>
            <S.ProductTitle>Modelo: {item.name}</S.ProductTitle>
            <S.ProductPrice>
              {formatCurrencyBR(item.sales_value)}
            </S.ProductPrice>
          </S.ContainerPrice>
          <S.ContainerAddProduct>
            <h4>Quantidade</h4>
            <S.WrapperAddProduct>
              <S.AddProduct
                type="button"
                onClick={() => decreaseQuantity(item.id)}
              >
                <Minus />
              </S.AddProduct>
              <S.Counter
                value={quantities[item.id] || 1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleQuantityChange(item.id, parseInt(e.target.value, 10))
                }
              />
              <S.AddProduct
                type="button"
                onClick={() => increaseQuantity(item.id)}
              >
                <Plus />
              </S.AddProduct>
            </S.WrapperAddProduct>
          </S.ContainerAddProduct>
          <S.ButtonCard
            onClick={() =>
              handleAddToCart(
                item.id,
                item.name,
                item.sales_value,
                item.link_image_cover
              )
            }
            disabled={loadingItems[item.id]}
          >
            {loadingItems[item.id] ? (
              <Spinner />
            ) : isSmallScreen ? (
              'Comprar'
            ) : (
              'Adicionar ao carrinho'
            )}
          </S.ButtonCard>
        </S.ContainerCardProduct>
      ))}
          
    </>
  )
}
