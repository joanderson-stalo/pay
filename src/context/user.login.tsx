import { createContext, useState, useCallback, useContext, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '@/config/color';
import secureLocalStorage from 'react-secure-storage';

type FormData = {
  email: string;
  password: string;
  device_name: string;
};

type User = {
  name: string;
  email: string;
  token: string;
  seller_id: string;
  document_id: string;
  seller_type: string
};

type LoginContextData = {
  dataUser: User | null;
  setDataUser: React.Dispatch<React.SetStateAction<User | null>>;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  login: (formData: FormData) => Promise<void>;
  logout: () => Promise<void>;
};

export const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {

  const initialUserDataRaw = secureLocalStorage.getItem('@App:user');
  const initialUserData = typeof initialUserDataRaw === 'string' ? JSON.parse(initialUserDataRaw) as User | null : null;

  const initialLoginStateRaw = secureLocalStorage.getItem('@App:isLogin');
  const initialLoginState = typeof initialLoginStateRaw === 'string' ? JSON.parse(initialLoginStateRaw) as boolean : false;

  const [dataUser, setDataUser] = useState<User | null>(initialUserData);
  const [isLogin, setIsLogin] = useState<boolean>(initialLoginState);

  useEffect(() => {
    secureLocalStorage.setItem('@App:isLogin', JSON.stringify(isLogin));
  }, [isLogin]);

  const login = useCallback(async (formData: FormData) => {
    try {
      const response = await axios.post(`${baseURL}login`, formData);

      const user = {
        name: response.data.user.name,
        email: response.data.user.email,
        token: response.data.access_token,
        document_id: response.data.user.document_id,
        seller_id: response.data.sellers[0]?.seller_id || null,
        seller_type: response.data.sellers[0]?.seller_type,
      };

      secureLocalStorage.setItem('@App:user', JSON.stringify(user));
      const storedUserRaw = secureLocalStorage.getItem('@App:user');
      const storedUser = typeof storedUserRaw === 'string' ? JSON.parse(storedUserRaw) as User : null;
      if (storedUser) {
        setDataUser(storedUser);
        
      }

      setIsLogin(true);

    } catch (error) {
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await axios.post(`${baseURL}logout`, {}, {
        headers: { Authorization: `Bearer ${dataUser?.token}` }
      });

      secureLocalStorage.removeItem('@App:isLogin')
      secureLocalStorage.removeItem('@App:user')
      secureLocalStorage.removeItem('selectedItem')
      setDataUser(null);
      setIsLogin(false);

    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [dataUser]);

  useEffect(() => {
    const storedUserRaw = secureLocalStorage.getItem('@App:user');
    const storedUser = typeof storedUserRaw === 'string' ? JSON.parse(storedUserRaw) as User : null;
    if (storedUser) {
      setDataUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.get('https://api-pagueassim.stalopay.com.br/validatetoken', {
          headers: { Authorization: `Bearer ${dataUser?.token}` }
        });
  
        const expiresIn = response.data.expires_in * 1000;
        console.log(response.data.expires_in)
        const now = new Date().getTime();
        const tokenExpirationTime = new Date(now + expiresIn).getTime();
  
        const timeUntilExpiration = tokenExpirationTime - now;
      
        const expirationTimer = setTimeout(() => {
          validateToken();
        }, timeUntilExpiration);
  
      } catch (error) {
        secureLocalStorage.removeItem('@App:isLogin')
        secureLocalStorage.removeItem('@App:user')
        secureLocalStorage.removeItem('selectedItem')
        setDataUser(null);
        setIsLogin(false);
      }
    };
  
    validateToken(); // Executar a validação do token quando este efeito for montado pela primeira vez
  }, [dataUser]); // Execute novamente quando o dataUser for alterado
  


  return (
    <LoginContext.Provider
      value={{ dataUser, setDataUser, isLogin, setIsLogin, login, logout }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLogin(): LoginContextData {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }

  return context;
}
