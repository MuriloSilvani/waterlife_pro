import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaSignOutAlt } from 'react-icons/fa'

import api from '../../services/api'

import {
  Menu as MenuStyle,
  Title,
  Logout
} from './style'

const Menu = () => {
  const router = useRouter()
  const [loggedUser, setLoggedUser] = useState({})

  const handleLogin = async () => {
    setLoggedUser(await api.getUser())
  }

  const handleLogout = async () => {
    await api.logout()
    router.push('/login')
  }

  useEffect(() => {
    handleLogin()
  }, []);

  return (
    <MenuStyle>
      <div>
        <Title>
          Bem vindo, {loggedUser?.name}
        </Title>
      </div>

      <Logout
        onClick={handleLogout}
      >
        Sair
        <FaSignOutAlt size={16} />
      </Logout>
    </MenuStyle>
  )
}

export default Menu
