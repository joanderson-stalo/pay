import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '@/pages/NotFound/notFound';
import { Loading } from '@/components/Loading/loading';

import { DefaultLogin } from '@/layout/DefaultLogin/defaultLogin';
import { RecoverPassWord } from '@/pages/Onboarding/RecoverPassword/recoverPassword';
import { ChangePassword } from '@/pages/Onboarding/ChangePassword/changePassword';
import { RegisterPassword } from '@/pages/Onboarding/RegisterPassword/registerPassword';
import { Login } from '@/pages/Login/login';
import { DefaultHome } from '@/layout/DefaultHome/defaultHome';
import { LAcadastro } from '@/pages/LAcadastro/LAcadastro';
import { Estabelecimento } from '@/pages/Estabelecimento/estabelecimento';
import { ECcadastro } from '@/pages/ECcadastro/ECcadastro';
import { Licenciado } from '@/pages/Licenciado/licenciado';
import { Home } from '@/pages/Home/home';
import { RankingCommission } from '@/pages/Commission/RankingCommission/rankingCommission';
import { Plans } from '@/pages/Plans/plans';
import { AddPlans } from '@/pages/Plans/Addplans/addplans';
import { ManageAccessLicensed } from '@/pages/Licenciado/modules/ManageAccess/manageAccessLicensed';
import { LicensedDetail } from '@/pages/Licenciado/modules/LicensedDetail/licensedDetail';
import { EditRegistrationLA } from '@/pages/Licenciado/modules/EditRegistrationLA/editRegistrationLA';
import { EstablishmentDetail } from '@/pages/Estabelecimento/modules/EstablishmentDetail/establishmentDetail';
import { ManageAccessEstablishment } from '@/pages/Estabelecimento/modules/ManageAccess/ManageAccessEstablishment';
import { EditRegistrationEC } from '@/pages/Estabelecimento/modules/EditRegistrationEC/editRegistrationEC';
import { UserListLogged } from '@/pages/User/Modules/UserListLogged/userListLogged';
import { EditUser } from '@/pages/User/Modules/UserEdit/editUser';
import { OperationManagement } from '@/pages/Financial/Modules/OperationManagement/operationManagement';
import { BillingRequest } from '@/pages/Financial/Modules/BillingRequest/billingRequest';
import { AddRequest } from '@/pages/Financial/Modules/BillingRequest/Modules/AddRequest/addRequest';
import { EquipmentStock } from '@/pages/EquipmentStock/equipmentStock';
import { AddStock } from '@/pages/EquipmentStock/Modules/AddStock/addStock';
import { EditStock } from '@/pages/EquipmentStock/Modules/EditStock/editStock';
import { Tariffs } from '@/pages/Financial/Modules/Tariffs/tariffs';
import { DetailsStock } from '@/pages/EquipmentStock/Modules/DetailsStock/detailsStock';
import { AddRate } from '@/pages/Financial/Modules/Tariffs/Modules/AddRate/addRate';
import { AddRateManual } from '@/pages/Financial/Modules/Tariffs/Modules/AddRateManual/addRateManual';
import { Tickets } from '@/pages/Tickets/tickets';
import { Extract } from '@/pages/Extract/extract';
import { AddTickets } from '@/pages/Tickets/Modules/AddTickets/addTickets';
import { Documents } from '@/pages/Documents/documents';
import { TodayCommission } from '@/pages/Commission/TodayCommission/todayCommission';
import { PaymentRequests } from '@/pages/PaymentRequests/paymentRequests';
import { CreateUser } from '@/pages/User/Modules/UserCreation/components/CreateUser/createUser';
import { ImportSpreadsheet } from '@/pages/Financial/Modules/Tariffs/Modules/AddRate/Modules/ImportSpreadsheet/importSpreadsheet';
import { Vendas } from '@/pages/Vendas/vendas';
import { DetalheVenda } from '@/pages/Vendas/Detalhes/detalhe';
import { EditRate } from '@/pages/Financial/Modules/Tariffs/Modules/EditRateManual/editRateManual';
import { ViewTicket } from '@/pages/Tickets/Modules/ViewTicket/viewTicket';
import { Log } from '@/pages/Config/modules/Log/log';
import { LogDetail } from '@/pages/Config/modules/Log/modules/logDetail/logDetail';
import { ListProducts } from '@/pages/E-com/Modules/ListProducts/listProducts';
import { Cart } from '@/pages/E-com/Modules/Cart/cart';
import { CartAddress } from '@/pages/E-com/Modules/CartAddress/cartaddress';
import { PaymentsCart } from '@/pages/E-com/Modules/Payments/paymentsCart';
import { PaymentsDetail } from '@/pages/E-com/Modules/PaymentsDetail/paymentsDetail';
import { ProductsMy } from '@/pages/E-com/Modules/ProductsMy/productsMy';
import { Payments } from '@/pages/Financial/Modules/Payments/payments';
import { PaymentsRequest } from '@/pages/Financial/Modules/Payments/Modules/PaymentsRequest/paymentsRequest';
import { LaCreation } from '@/pages/Licenciado/modules/LaCreation/components/LaCreation/laCreation';


export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
            <Route path="/user-seller" element={<UserListLogged />} />
            <Route path="/transaction" element={<Vendas />} />
            <Route path="/transaction-description" element={<DetalheVenda />} />
            <Route path="/sellers-ec" element={<Estabelecimento />} />
            <Route path="/sellers-ec-register" element={<ECcadastro />} />
            <Route path="/sellers-ec-detail" element={<EstablishmentDetail />} />
            <Route path="/sellers-ec-manage" element={<ManageAccessEstablishment />} />
            <Route path="/sellers-ec-edit" element={<EditRegistrationEC />} />
            <Route path="/sellers-la" element={<Licenciado />} />
            <Route path="/sellers-la-register" element={<LAcadastro />} />
            <Route path="/sellers-la-detail" element={<LicensedDetail />} />
            <Route path="/sellers-la-manage" element={<ManageAccessLicensed />} />
            <Route path="/sellers-la-edit" element={<EditRegistrationLA />} />
            <Route path="/user-seller-create" element={<CreateUser />} />
            <Route path="/user/edit/:id" element={<EditUser />} />
            <Route path="/sellers-la-add" element={<LaCreation />} />

            <Route path="/commission" element={<RankingCommission />} />
            <Route path="/commission/network" element={<TodayCommission />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/addplans" element={<AddPlans />} />
            <Route path="/operationManagement" element={<OperationManagement />} />
            <Route path="/billingRequest" element={<BillingRequest />} />
            <Route path="/addRequest" element={<AddRequest />} />
            <Route path="/equipmentStock" element={<EquipmentStock />} />
            <Route path="/addStock" element={<AddStock />} />
            <Route path="/editStock" element={<EditStock />} />
            <Route path="/detailsStock" element={<DetailsStock />} />
            <Route path="/tariffs" element={<Tariffs />} />
            <Route path="/editRate" element={<EditRate />} />
            <Route path="/addRate" element={<AddRate />} />
            <Route path="/importSpreadsheet" element={<ImportSpreadsheet />} />
            <Route path="/addRateManual" element={<AddRateManual />} />


            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tickets-add" element={<AddTickets />} />
            <Route path="/tickets-view" element={< ViewTicket />} />


            <Route path="/documents" element={<Documents />} />
            <Route path="/paymentRequests" element={<PaymentRequests />} />

            <Route path="/extract" element={<Extract />} />


            <Route path="/log" element={<Log />} />
            <Route path='/log-detail'  element={<LogDetail />} />

            <Route path='/e-com' element={<ListProducts />} />
            <Route path='/e-com-cart' element={<Cart />} />
            <Route path='/e-com-address' element={< CartAddress />} />
            <Route path='/e-com-payments' element={< PaymentsCart />} />
            <Route path='/e-com-payments-detail' element={< PaymentsDetail />} />
            <Route path='/e-com-payments-request' element={< ProductsMy />} />

            <Route path='/payments' element={<Payments />} />
            <Route path='/payments-request' element={<PaymentsRequest />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
