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

const Profile = ({
  onSave,
  date
}) => {
  const [open, setOpen] = useState(false)
  
  const [user, setUser] = useState()
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const hasDiff = user?.age !== age ||
    user?.weight !== weight ||
    user?.start !== start ||
    user?.end !== end

  const loadUser = async () => {
    const user = await api.getUser()
    setUser(user)

    setAge(user.age)
    setWeight(user.weight)
    setStart(user.start)
    setEnd(user.end)
  }

  useEffect(() => {
    setOpen(window.innerWidth > 680)
    loadUser()
  }, []);

  const handleSave = async (e) => {
    e.preventDefault()
    await api.updateUser({
      age,
      weight,
      start,
      end
    })

    const user = await api.getUser()
    setUser(user)
    onSave(date)
  }

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

      <ContentWrapper
        onSubmit={handleSave}
      >
        <InputRow>
          <Input
            required
            value={age}
            onChange={setAge}
            placeholder="Idade"
            label="Idade"
            type='number'
          />

          <Input
            required
            value={weight}
            onChange={setWeight}
            placeholder="Peso (kg)"
            label="Peso (kg)"
            type='number'
          />
        </InputRow>

        <InputRow>
          <Input
            required
            value={start}
            onChange={setStart}
            type="time"
            label="Horários de levantar"
            />
          
          <Input
            required
            value={end}
            onChange={setEnd}
            type="time"
            label="Horários de deitar"
          />
        </InputRow>

        <div>
          Para montar sua tabela diaria consideramos os dados do dia anterior.
        </div>
        {
          hasDiff && (
            <div>
              Alterações pendentes
            </div>
          )
        }

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
