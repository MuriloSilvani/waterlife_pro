import { useState } from 'react'
import { useRouter } from 'next/router'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'

import {
  LoginContainer,
  FormContainer,
  Logo,
  Form,
  ImageContainer,
  Image
} from '../../styles/pages/login'

import api from '../api'

const Login = () => {
  const router = useRouter()
  const [name, setName] = useState('murilo')

  const handleLogin = async (event) => {
    event.preventDefault()

    if (await api.login({
      name
    })) {
      router.push('/home')
    }
  }

  return (
    <LoginContainer>
      <FormContainer>
        <Form onSubmit={handleLogin}>
          <div>
            <Logo
              alt="logo"
              src="/logo.png"
            />
          </div>
          <Title>
            Faça seu login
          </Title>
          <Input
            required
            value={name}
            onChange={setName}
            placeholder='Seu nome'
          />
          <Button
            type='submit'
          >
            Entrar
          </Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Image
          alt="logo"
          src="/banner.png"
        />
      </ImageContainer>
    </LoginContainer>
  )
}

export default Login
