import { useState, useEffect } from 'react'
import {
  ProfileWrapper,
  TitleWrapper,
  OpenButton,
  ContentWrapper,
  InputRow
} from './style'
import Title from '../Title'
import Input from '../Input'
import Button from '../Button'
import { FaChevronDown } from 'react-icons/fa'
import api from '../../services/api'

const Profile = () => {
  const [open, setOpen] = useState(false)

  const [weight, setWeight] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const loadUser = async () => {
    const user = await api.getUser()

    setWeight(user.weight)
    setStart(user.start)
    setEnd(user.end)
  }

  useEffect(() => {
    setOpen(window.innerWidth > 680)
    loadUser()
  }, []);

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
          value={weight}
          onChange={setWeight}
          placeholder="Peso"
          label="Peso"
        />

        <InputRow>
          <Input
            value={start}
            onChange={setStart}
            type="time"
            label="Horarios de entrada"
            />
          
          <Input
            value={end}
            onChange={setEnd}
            type="time"
            label="Horarios de saida"
          />
        </InputRow>

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
