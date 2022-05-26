import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Subtitle from '../components/Subtitle'
import Paragraph from '../components/Paragraph'
import Menu from '../components/Menu'
import ControllDate from '../components/ControllDate'
import Profile from '../components/Profile'
import Chart from '../components/Chart'
import ListActions from '../components/ListActions'
import {
  Grid,
  Container,
} from '../styles/Template'
import {
  ContainerHome,
  Info,
  InfoWrapper,
  SettingsWrapper,
  ControllWrapper,
  ListWrapper
} from '../styles/pages/home'

import api from '../services/api'
import { DateTime } from 'luxon'

const Home = () => {
  const router = useRouter()

  const [userActions, setUserActions] = useState([])
  const [date, setDate] = useState(DateTime.local())
  const [watch, setWatch] = useState(false)

  const handleLoadActions = async () => {
    const actions = await api.getUserActions()
    if (actions) {
      setUserActions(actions)
    } else {
      router.push('/login')
    }
  }

  const formatDate = date => DateTime.fromISO(date).toFormat('dd/MM/yyyy')

  const onPrev = async () => {
    const newDate = date.minus({ days: 1 })
    setDate(newDate)

    setUserActions(await api.getUserActions({ date: newDate }))
  }

  const onNext = async () => {
    const newDate = date.plus({ days: 1 })
    setDate(newDate)

    setUserActions(await api.getUserActions({ date: newDate }))
  }

  useEffect(() => {
    handleLoadActions()
  }, []);

  useEffect(() => {
    setWatch(!watch)
  }, [userActions]);

  return (
    <Grid>
      <Menu />
      <Container>
        <ContainerHome>
          <InfoWrapper>
            <Info>
              <Subtitle>
                Cuide da sua hidratação diaria
              </Subtitle>
              <Paragraph>
                Nosso corpo é constituido de cerca de 60% a 70% de água. Nosso sangue, músculos, pulmões e cérebro contém bastante água. Beber bastante líquido é vital para a nossa saúde.
              </Paragraph>
            </Info>
          </InfoWrapper>

          <ControllWrapper>
            <ControllDate
              date={formatDate(date)}
              onPrev={onPrev}
              onNext={onNext}
            />
          </ControllWrapper>

          <ListWrapper>
            <ListActions
              actions={userActions}
              date={date}
              setUserActions={setUserActions}
            />
          </ListWrapper>

          <SettingsWrapper>
            <Chart
              watch={watch}
            />

            <Profile />
          </SettingsWrapper>
        </ContainerHome>
      </Container>
    </Grid>
  )
}

export default Home
