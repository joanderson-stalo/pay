import { createContext, useState, useCallback, useContext, useEffect } from 'react';
import axios from 'axios';

type FormData = {
  email: string;
  password: string;
  device_name: string;
};

type User = {
  name: string;
  email: string;
  token: string;
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
  const [dataUser, setDataUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const login = useCallback(async (formData: FormData) => {
    try {
      const response = await axios.post('https://api-pagueassim.stalopay.com.br/login', formData);

      const user = {
        name: response.data.user.name,
        email: response.data.user.email,
        token: response.data.access_token,
      };

      console.log("Armazenando usuário:", user);
      setDataUser(user);
      setIsLogin(true);

    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await axios.post('https://api-pagueassim.stalopay.com.br/logout', {}, {
        headers: { Authorization: `Bearer ${dataUser?.token}` }
      });

      setDataUser(null);
      setIsLogin(false);

    } catch (error) {
      console.error(error);
      throw error;
    }
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
