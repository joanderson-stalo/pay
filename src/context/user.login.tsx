import { createContext, useState, useCallback, useContext, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '@/config/color';

type FormData = {
  email: string;
  password: string;
  device_name: string;
};

type User = {
  name: string;
  email: string;
  token: string;
  seller_id: string
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

  const initialUserData = JSON.parse(localStorage.getItem('@App:user') || 'null');
  const initialLoginState = JSON.parse(localStorage.getItem('@App:isLogin') || 'false');

  const [dataUser, setDataUser] = useState<User | null>(initialUserData);
  const [isLogin, setIsLogin] = useState<boolean>(initialLoginState);

  useEffect(() => {
    localStorage.setItem('@App:isLogin', JSON.stringify(isLogin));
  }, [isLogin]);

  const login = useCallback(async (formData: FormData) => {
    try {
      const response = await axios.post(`${baseURL}login`, formData);

      const user = {
        name: response.data.user.name,
        email: response.data.user.email,
        token: response.data.access_token,
        seller_id: response.data.sellers[0]?.seller_id || null,
      };

      localStorage.setItem('@App:user', JSON.stringify(user));
      const storedUser = localStorage.getItem('@App:user');
      if (storedUser) {
        setDataUser(JSON.parse(storedUser));
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

      localStorage.removeItem('@App:isLogin')
      localStorage.removeItem('@App:user')
      localStorage.removeItem('selectedItem')
      setDataUser(null);
      setIsLogin(false);

    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [dataUser]);

  useEffect(() => {
    const storedUser = localStorage.getItem('@App:user');
    if (storedUser) {
      setDataUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const validateToken = async () => {
      try {
        await axios.get('https://api-pagueassim.stalopay.com.br/validatetoken', {
          headers: { Authorization: `Bearer ${dataUser?.token}` }
        });
      } catch (error) {
        localStorage.removeItem('@App:isLogin')
        localStorage.removeItem('@App:user')
        localStorage.removeItem('selectedItem')
        setDataUser(null);
        setIsLogin(false);
      }
    };

    const intervalId = setInterval(validateToken, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dataUser]);


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
    throw new Error('error');
  }

  return context;
}
