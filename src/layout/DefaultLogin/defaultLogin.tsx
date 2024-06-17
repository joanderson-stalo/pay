import {
  BackgroundLogin,
  DefaultContainerLogin,
  DefaultContext
} from './styled'

import { Outlet } from 'react-router-dom'

import { Text } from '@/config/text'
import { ThemeImg } from '@/config/img'
import { useTenantData } from '@/context'
import stalo from '@assets/stalo.png'

export function DefaultLogin() {
  const tenantData = useTenantData();
  return (
    <>
      <DefaultContainerLogin>
        <BackgroundLogin colorOverlay={tenantData.primary_color_identity} background={ThemeImg.backgroundLogin}>
          <img style={{zIndex: 100}} src={tenantData.attachment_logo_white}  />
        </BackgroundLogin>
        <DefaultContext>
          <Outlet />
          <span>{Text.direitosReservados} Power By <a target='_blank' href="https://stalo.digital/"><img src={stalo} alt="" /></a> </span>
        </DefaultContext>
      </DefaultContainerLogin>
    </>
  )
}
