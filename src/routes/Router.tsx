import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from '@/pages/NotFound/notFound'
import { DefaultLogin } from '@/layout/DefaultLogin/defaultLogin'
import { RecoverPassWord } from '@/pages/Onboarding/RecoverPassword/recoverPassword'
import { ChangePassword } from '@/pages/Onboarding/ChangePassword/changePassword'
import { RegisterPassword } from '@/pages/Onboarding/RegisterPassword/registerPassword'
import { Login } from '@/pages/Login/login'
import { DefaultHome } from '@/layout/DefaultHome/defaultHome'
import { LAcadastro } from '@/pages/LAcadastro/LAcadastro'
import { Estabelecimento } from '@/pages/Estabelecimento/estabelecimento'
import { ECcadastro } from '@/pages/ECcadastro/ECcadastro'
import { Vendas } from '@/pages/Vendas/vendas'
import { DetalheVenda } from '../pages/Vendas/Detalhes/detalhe'
import { Licenciado } from '@/pages/Licenciado/licenciado'
import { Home } from '@/pages/Home/home'
import { UserListLogged } from '@/pages/UserListLogged/userListLogged'
import { UserCreation } from '@/pages/UserCreation/userCreation'
import { DailyCommission } from '@/pages/Commission/DailyCommission/dailyCommission'
import { RankingCommission } from '@/pages/Commission/RankingCommission/rankingCommission'
import { Plans } from '@/pages/Plans/plans'
import { AddPlans } from '@/pages/Plans/Addplans/addplans'
import { ManageAccessLicensed } from '@/pages/Licenciado/modules/ManageAccess/manageAccessLicensed'
import { LicensedDetail } from '@/pages/Licenciado/modules/LicensedDetail/licensedDetail'
import { EditRegistrationLA } from '@/pages/Licenciado/modules/EditRegistrationLA/editRegistrationLA'
import { EstablishmentDetail } from '@/pages/Estabelecimento/modules/EstablishmentDetail/establishmentDetail'
import { ManageAccessEstablishment } from '@/pages/Estabelecimento/modules/ManageAccess/ManageAccessEstablishment'
import { EditRegistrationEC } from '@/pages/Estabelecimento/modules/EditRegistrationEC/editRegistrationEC'



export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLogin />}>
          <Route path="/" element={<Login />} />
          <Route path="/recover" element={<RecoverPassWord />} />
          <Route path="/reset-password" element={<ChangePassword />} />
          <Route
            path="/registerpassword/:tokenId"
            element={<RegisterPassword />}
          />
        </Route>

        <Route path="/" element={<DefaultHome />}>
          <Route path="/home" element={<Home />} />
          <Route path="/userlist" element={<UserListLogged />} />

          <Route path="/vendas" element={<Vendas />} />
          <Route path="/detalhe" element={<DetalheVenda />} />

          <Route path="/estabelecimentos" element={<Estabelecimento />} />
          <Route path="/eccadastro" element={<ECcadastro />} />
          <Route path="/establishmentdetail" element={<EstablishmentDetail />} />
          <Route path="/manageAccessEstablishment" element={<ManageAccessEstablishment />} />
          <Route path="/editRegistrationEC" element={<EditRegistrationEC />} />

          <Route path="/licenciados" element={<Licenciado />} />
          <Route path="/lacadastro" element={<LAcadastro />} />
          <Route path="/licenseddetail" element={<LicensedDetail />} />
          <Route path="/manageAccessLicensed" element={<ManageAccessLicensed />} />
          <Route path="/editRegistrationLA" element={<EditRegistrationLA />} />



          <Route path="/userCreation" element={<UserCreation />} />

          <Route path="/commission/daily" element={<DailyCommission />} />
          <Route path="/commission/ranking" element={<RankingCommission />} />

          <Route path="/plans" element={<Plans />} />
          <Route path="/addplans" element={<AddPlans />} />


        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
