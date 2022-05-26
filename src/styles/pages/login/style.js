import styled from 'styled-components'

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
`

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Logo = styled.img`
  max-height: 80px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 680px) {
    display: none;
  }
`

const Image = styled.img`
  display: block;
  max-width: 500px;
  max-height: 500px;
`

export {
  LoginContainer,
  FormContainer,
  Logo,
  Form,
  ImageContainer,
  Image
}
