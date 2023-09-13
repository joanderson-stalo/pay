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
import { PageEstabelecimento } from '@/pages/PageEstabelecimento/pageEstabelecimento'
import { ECcadastro } from '@/pages/ECcadastro/ECcadastro'
import { Arvore } from '@/pages/Arvore/arvore'
import { Vendas } from '@/pages/Vendas/vendas'
import { Detalhe } from '../pages/Vendas/Detalhes/detalhe'
import { Licenciado } from '@/pages/Licenciado/licenciado'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<DefaultLogin />}>
          <Route path="/" element={<Login />} />
          <Route path="/recover" element={<RecoverPassWord />} />
          <Route path="/reset-password" element={<ChangePassword />} />
          <Route path="/registerpassword/:tokenId" element={<RegisterPassword />} />
        </Route>

        <Route path='/' element={<DefaultHome />}>
            {/* <Route path="/home" element={<Licenciado />} /> */}
             {/* <Route path="/home" element={<Arvore/>} /> */}
               {/* <Route path="/home" element={<Detalhe />} /> */}
                     <Route path="/home" element={<Vendas />} />
            <Route path="/eccadastro" element={<ECcadastro />} />
        </Route>

        <Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  )
}
