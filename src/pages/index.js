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

  const handleLoadUser = async () => {
    const user = await api.getUser()
    if (!user) {
      router.push('/login')
    }
  }

  const handleLoadActions = async (_date = null) => {
    const actions = await api.getUserActions({ date: _date })
    setUserActions(actions)
  }

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
    handleLoadUser()
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
              date={date}
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
            {
              <Chart
                watch={watch}
              />
            }

            <Profile
              date={date}
              onSave={handleLoadActions}
            />

            <div>
              <h2>Funcionamento</h2>
              <p>
                A quantidade diaria e calculada com base no seu peso, sao 35ml por kg.
                A distribuicao no dia e feita com base no horarios que costuma acordar e dormir, distribuindo igualmente a quantidade total em diversas doses no decorer do dia.
              </p>
            </div>
          </SettingsWrapper>
        </ContainerHome>
      </Container>
    </Grid>
  )
}

export default Home
