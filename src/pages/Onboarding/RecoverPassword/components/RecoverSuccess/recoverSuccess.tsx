import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/Button/button'

import { ContainerRecover, ContextTitle } from './styled'

import { ButtonText, RecoverPasswordSuccess } from '@/config/text'
import { ContainerSubmit } from '@/styles/default'
import { useTenantData } from '@/context'

interface Props {
  email: string
}

export function RecoverSuccess({ email }: Props) {
  const navigate = useNavigate()
  const tenantData = useTenantData();

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <ContainerRecover>
      <ContextTitle colorTitle={tenantData.secondary_color_identity}>
        <h2>{RecoverPasswordSuccess.enviado}</h2>
        <p>
          {RecoverPasswordSuccess.text} {email}.{' '}
          {RecoverPasswordSuccess.completeText}
        </p>
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
