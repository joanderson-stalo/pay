import { Button } from '@/components/Button/button'

import { useNavigate } from 'react-router-dom'

import { ContainerRecover, ContextTitle } from './styled'


import { ButtonText, RegisterPasswordSuccess } from '@/config/text'
import { ContainerSubmit } from '@/styles/default'
import { useTenantData } from '@/context'

export function RegisterSuccess() {
  const navigate = useNavigate()
  const tenantData = useTenantData();

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <ContainerRecover>
      <ContextTitle colorTitle={tenantData.secondary_color_identity}>
        <h2>{RegisterPasswordSuccess.senha}</h2>
        <p>{RegisterPasswordSuccess.text}</p>
      </ContextTitle>
      <ContainerSubmit className='containerSubmit'>
      <Button
        type="button"
        onClick={handleLogin}
        colorBackground={tenantData.secondary_color_identity}
        success={true}
        label={ButtonText.irLogin}
      />
      </ContainerSubmit>
    </ContainerRecover>
  )
}
