import { ThemeColor } from '@/config/color'
import { ThemeImg } from '@/config/img'
import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 80px 120px;

  @media (max-width: 900px) {
    padding: 60px;
  }
`

export const ContainerModal = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;

  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }

`

export const BackgroundLogin = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border-radius: 0rem 2rem 2rem 0rem;
  background-image: url(${ThemeImg.backModal});
  background-size: cover;
  background-position: center;


  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${ThemeColor.secundaria};
    opacity: 0.6;
    z-index: 1;
    border-radius: 0rem 2rem 2rem 0rem;
    background-blend-mode: multiply, normal;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 120px;
    border-radius: 0;

    &::after {
      border-radius: 0;
    }
  }
`

export const ContextModal = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 60px;
    gap: 60px;
  }

`

export const ContainerText = styled.div`
  width: 349px;

  p {
    font-weight: 700;
    font-size: 38px;
    line-height: 52px;
    color: ${ThemeColor.secundaria};

    span {
      font-weight: 700;
      font-size: 38px;
      line-height: 52px;
      color: ${ThemeColor.primaria};
    }
  }

  @media (max-width: 900px) {
    width: 240px;
    p  {
      font-size: 28px;
      line-height: 32px;
      span{
      font-size: 28px;
      line-height: 32px;
    }
    }

  }
`

export const ButtonModal = styled.button`
  background: ${ThemeColor.secundaria};
  border: 0.5px solid ${ThemeColor.primaria};
  border-radius: 5px;

  width: 213px;
  height: 35px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #ffffff;
`

export const Image = styled.img`
 width: 196px;

 @media (max-width: 900px){
  width: 156px;
 }
`
