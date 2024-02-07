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
import { ECHome } from '@/pages/ECHome/ECHome'

import { UserCreation } from '@/pages/User/Modules/UserCreation/userCreation'
import { UserListLogged } from '@/pages/User/Modules/UserListLogged/userListLogged'
import { EditUser } from '@/pages/User/Modules/UserEdit/editUser'
import { LicenseeSummary } from '@/pages/Financial/Modules/LicenseeSummary/licenseeSummary'
import { OperationManagement } from '@/pages/Financial/Modules/OperationManagement/operationManagement'
import { BillingRequest } from '@/pages/Financial/Modules/BillingRequest/billingRequest'
import { AddRequest } from '@/pages/Financial/Modules/BillingRequest/Modules/AddRequest/addRequest'
import { EquipmentStock } from '@/pages/EquipmentStock/equipmentStock'
import { AddStock } from '@/pages/EquipmentStock/Modules/AddStock/addStock'
import { EditStock } from '@/pages/EquipmentStock/Modules/EditStock/editStock'
import { Tariffs } from '@/pages/Financial/Modules/Tariffs/tariffs'
import { DetailsStock } from '@/pages/EquipmentStock/Modules/DetailsStock/detailsStock'
import { AddRate } from '@/pages/Financial/Modules/Tariffs/Modules/AddRate/addRate'
import { AddRateManual } from '@/pages/Financial/Modules/Tariffs/Modules/AddRateManual/addRateManual'
import { Tickets } from '@/pages/Tickets/tickets'

import { Extract } from '@/pages/Extract/extract'
import { AddTickets } from '@/pages/Tickets/Modules/AddTickets/addTickets'
import { Documents } from '@/pages/Documents/documents'







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
          <Route path="/home" element={<ECHome />} />
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
          <Route path='/user/edit/:id' element={<EditUser  />} />

          <Route path="/commission/daily" element={<DailyCommission />} />
          <Route path="/commission/ranking" element={<RankingCommission />} />

          <Route path="/plans" element={<Plans />} />
          <Route path="/addplans" element={<AddPlans />} />



          <Route path='/licenseesummary'  element={<LicenseeSummary />}/>
          <Route path='/operationManagement' element={<OperationManagement />} />
          <Route path='/billingRequest' element={<BillingRequest />} />
          <Route path='/addRequest' element={<AddRequest />} />
          <Route path='/equipmentStock' element={<EquipmentStock />} />
          <Route path='/addStock' element={<AddStock />} />
          <Route path='/editStock' element={<EditStock />} />
          <Route path='/detailsStock' element={<DetailsStock/>} />

          <Route path='/tariffs' element={<Tariffs />} />
          <Route path='/addRate' element={<AddRate />} />
          <Route path='/addRateManual' element={<AddRateManual />} />


          <Route path='/addRateManual' element={<AddRateManual />} />

          <Route path='/tickets' element={<Tickets />} />
          <Route path='/addTickets' element={<AddTickets />} />

          <Route path='/extract' element={<Extract />} />

          <Route path='/documents' element={<Documents />} />

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
