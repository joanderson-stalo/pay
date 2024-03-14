import { Button } from '@/components/Button/button'

import { ContainerRecover, ContextTitle } from './styled'

import { useNavigate } from 'react-router-dom'

import { ButtonText, SuccessChange } from '@/config/text'
import { handleLogin } from '@/utils/handleNavigate'
import { ContainerSubmit } from '@/styles/default'
import { useTenantData } from '@/context'

export function ChangeSuccess() {
  const navigate = useNavigate()
  const tenantData = useTenantData();

  return (
    <ContainerRecover>
      <ContextTitle colorTitle={tenantData.secondary_color_identity}>
        <h2>{SuccessChange.success}</h2>
        <p>{SuccessChange.successText}</p>
      </ContextTitle>

      <ContainerSubmit   className='containerSubmit'>
      <Button
        type="button"
        onClick={() => handleLogin(navigate)}
        colorBackground={tenantData.secondary_color_identity}
        success={true}
        label={ButtonText.irLogin}
      />
      </ContainerSubmit>
    </ContainerRecover>
  )
}
