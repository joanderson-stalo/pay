import styled from 'styled-components'


export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #C8CBD9;
`
export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 32px;
`

export const NomePerfil = styled.p`
color: #1F384C;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 13px;
letter-spacing: 0.5px;
`

export const ContainerModal = styled.div`
  position: fixed;
  top: 78px;
  z-index: 500;



    @media (max-width: 1100px) {
      top: 125px;
    right: 72px;
    }
`

export const ButtonHeader = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 12px;
  color: #B0C3CC;

  > svg {
    font-size: 18px;
  }
`

export const ImagPerfil = styled.img`
  border-radius: 50%;
  width: 35px;
height: 35px;
`

export const Label = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({ theme }) => theme.neutral_darker};
`

export const ButtonNotification = styled.button`
  background: transparent;
  margin-right: 10px;
`

