import styled from 'styled-components'

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  @media (max-width: 680px) {
    flex-direction: column;
  }
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
  padding: 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: nowrap;
  
  @media (max-width: 680px) {
    align-items: center;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`

export {
  LoginContainer,
  FormContainer,
  Logo,
  Form,
  ImageContainer,
  Image
}
