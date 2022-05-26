import { useState } from 'react'
import {
  ProfileWrapper,
  TitleWrapper,
  OpenButton,
  ContentWrapper
} from './style'
import Title from '../Title'
import Input from '../Input'
import Button from '../Button'
import { FaChevronDown } from 'react-icons/fa'

const Profile = () => {
  const [open, setOpen] = useState(false)
  return (
    <ProfileWrapper open={open}>
      <TitleWrapper>
        <Title small>Meus dados</Title>

        <OpenButton
          onClick={() => setOpen(!open)}
        >
          <FaChevronDown
            size={18}
          />
        </OpenButton>
      </TitleWrapper>

      <ContentWrapper>
        <Input
          placeholder="Peso"
        />

        <Button
          success
        >
          Salvar
        </Button>
      </ContentWrapper>
    </ProfileWrapper>
  )
}

export default Profile
