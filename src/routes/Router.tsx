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
import { Estabelecimento } from '@/pages/Estabelecimento/estabelecimento';
import { ECcadastro } from '@/pages/ECcadastro/ECcadastro';
import { Licenciado } from '@/pages/Seller-LA/Licenciado/licenciado';
import { Home } from '@/pages/Home/home';
import { Plans } from '@/pages/Plans/plans';
import { ManageAccessLicensed } from '@/pages/Seller-LA/ManageAccess/manageAccessLicensed';
import { LicensedDetail } from '@/pages/Seller-LA/LicensedDetail/licensedDetail';
import { EditRegistrationLA } from '@/pages/Seller-LA/EditRegistrationLA/editRegistrationLA';
import { EstablishmentDetail } from '@/pages/Estabelecimento/modules/EstablishmentDetail/establishmentDetail';
import { ManageAccessEstablishment } from '@/pages/Estabelecimento/modules/ManageAccess/ManageAccessEstablishment';
import { EditRegistrationEC } from '@/pages/Estabelecimento/modules/EditRegistrationEC/editRegistrationEC';
import { UserListLogged } from '@/pages/User/Modules/UserListLogged/userListLogged';
import { EditUser } from '@/pages/User/Modules/UserEdit/editUser';
import { EquipmentStock } from '@/pages/EquipmentStock/equipmentStock';
import { AddStock } from '@/pages/EquipmentStock/Modules/AddStock/addStock';
import { EditStock } from '@/pages/EquipmentStock/Modules/EditStock/editStock';
import { Tariffs } from '@/pages/Financial/Modules/Tariffs/tariffs';
import { DetailsStock } from '@/pages/EquipmentStock/Modules/DetailsStock/detailsStock';
import { AddRate } from '@/pages/Financial/Modules/Tariffs/Modules/AddRate/addRate';
import { AddRateManual } from '@/pages/Financial/Modules/Tariffs/Modules/AddRateManual/addRateManual';
import { Tickets } from '@/pages/Tickets/tickets';
import { Extract } from '@/pages/Financial/Modules/Extract/extract';
import { AddTickets } from '@/pages/Tickets/Modules/AddTickets/addTickets';
import { Documents } from '@/pages/Documents/documents';
import { CreateUser } from '@/pages/User/Modules/UserCreation/components/CreateUser/createUser';
import { ImportSpreadsheet } from '@/pages/Financial/Modules/Tariffs/Modules/AddRate/Modules/ImportSpreadsheet/importSpreadsheet';
import { DetalheVenda } from '@/pages/Transaction/Detalhes/detalhe';
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
import { LaCreation } from '@/pages/Seller-LA/LaCreation/components/LaCreation/laCreation';
import { EcCreation } from '@/pages/Estabelecimento/modules/EcCreation/components/EcCreation/EcCreation';
import { PlansDetails } from '@/pages/Plans/PlansDetails/plansDetails';
import { PaymentsDetails } from '@/pages/Financial/Modules/Payments/Modules/PaymentsDetails/paymentsDetails';
import { PaymentsUpdate } from '@/pages/Financial/Modules/Payments/Modules/PaymentsUpdate/paymentsUpdate';
import { Billing } from '@/pages/Financial/Modules/Billing/billing';
import { AddRateBilling } from '@/pages/Financial/Modules/Billing/Modules/AddRateBilling/addRateBilling';
import { BillingAddRateManual } from '@/pages/Financial/Modules/Billing/Modules/BillingAddRateManual/billingAddRateManual';
import { ImportSpreadsheetBilling } from '@/pages/Financial/Modules/Billing/Modules/AddRateBilling/Modules/ImportSpreadsheetBilling/importSpreadsheetBilling';
import { Transaction } from '@/pages/Transaction/transaction';
import { NetWorkCommission } from '@/pages/Commission/NetWorkCommission/netWorkCommission';
import { MyCommission } from '@/pages/Commission/MyCommission/myCommission';
import { ConfraPix } from '@/pages/Confrapix/modules/createpix/createpix';
import { YieldSummary } from '@/pages/Financial/Modules/YieldSummary/yieldSummary';
import { ListPix } from '../pages/Confrapix/modules/listPix/listPix';
import { CreatePerfil } from '@/pages/Config/modules/createPerfil/createPerfil';
import { CreatePermission } from '@/pages/Config/modules/createPermission/createPermission';
import { QRcodeDetails } from '@/pages/Confrapix/modules/listPix/Modules/qrcodeDetails/qrcodeDetails';
import { RegisterLA } from '@/pages/Seller-LA/Register-LA/register-LA';


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
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/transaction-description" element={<DetalheVenda />} />
            <Route path="/sellers-ec" element={<Estabelecimento />} />
            <Route path="/sellers-ec-register" element={<ECcadastro />} />
            <Route path="/sellers-ec-detail" element={<EstablishmentDetail />} />
            <Route path="/sellers-ec-manage" element={<ManageAccessEstablishment />} />
            <Route path="/sellers-ec-edit" element={<EditRegistrationEC />} />
            <Route path="/sellers-la" element={<Licenciado />} />
            <Route path="/sellers-la-register" element={<RegisterLA />} />
            <Route path="/sellers-la-detail" element={<LicensedDetail />} />
            <Route path="/sellers-la-manage" element={<ManageAccessLicensed />} />
            <Route path="/sellers-la-edit" element={<EditRegistrationLA />} />
            <Route path="/user-seller-create" element={<CreateUser />} />
            <Route path="/user/edit/:id" element={<EditUser />} />
            <Route path="/sellers-la-add" element={<LaCreation />} />
            <Route path="/sellers-ec-add" element={<EcCreation />} />

            <Route path="/commission" element={<MyCommission />} />
            <Route path="/commission/network" element={<NetWorkCommission />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans-detail" element={<PlansDetails />} />
            <Route path="/yield-summary" element={<YieldSummary />} />

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


            <Route path="/extract" element={<Extract />} />


            <Route path="/create-perfil" element={<CreatePerfil />} />
            <Route path="/create-permission" element={<CreatePermission />} />

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
            <Route path='/payments-details' element={<PaymentsDetails />} />
            <Route path='/payments-update' element={<PaymentsUpdate />} />

            <Route path='/charging-request' element={<Billing />} />
            <Route path='/billingAddRate' element={<AddRateBilling />} />
            <Route path='/billingAddRateManual' element={<BillingAddRateManual />} />
            <Route path='/billingImport' element={<ImportSpreadsheetBilling />} />


            <Route path='/confrapix-create' element={<ConfraPix />} />
            <Route path='/confrapix-list' element={<  ListPix />} />
            <Route path='/confrapix-details' element={<   QRcodeDetails  />} />





          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
