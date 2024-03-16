
import { ThemeImg } from '@/config/img'
import styled from 'styled-components'

interface Color {
  primary: string;
  secundary: string;
}

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

export const BackgroundLogin = styled.div<Color>`
  position: relative;
  width: 50%;
  height: 100%;
  border-radius: 0rem 2rem 2rem 0rem;
  background-image: url(${ThemeImg.sucesso});
  background-size: cover;
  background-position: center;


  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:  ${(props) => props.primary};
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
  gap: 70px;

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

export const ContainerText = styled.div<Color>`
    width: 404px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

 > p {
  color: var(--color-neutra-ttulo, var(--color-neutra-ttulos, #3D4449));
font-size: 32px;
font-weight: 600;
  }


  span {
    font-size: 24px;
font-style: normal;
font-weight: 500;
      color:  ${(props) => props.primary};;
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

export const ButtonModal = styled.button<Color>`
 border-radius: 5px;
background:  ${(props) => props.primary};
padding: 14px 50px;
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.5px;
`

export const Image = styled.img`
 width: 196px;

 @media (max-width: 900px){
  width: 156px;
 }
`
