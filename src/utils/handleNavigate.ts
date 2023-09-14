import { NavigateFunction } from 'react-router-dom'

export const handleLogin = (navigate: NavigateFunction) => {
  navigate('/')
  localStorage.setItem('selectedItem', '0');
}

export const handleRecover = (navigate: NavigateFunction) => {
  navigate('/recover')
}
