import { useState, useEffect } from 'react'

import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import Menu from '../../components/Menu'
import ControllDate from '../../components/ControllDate'
import Chart from '../../components/Chart'
import { FaCheck } from 'react-icons/fa'
import {
  Grid,
  Container,
} from '../../styles/Template'
import {
  ContainerHome,
  Info,
  ListActions,
  Card,
  Time,
  Status,
  Action,
  Settings
} from '../../styles/pages/home'

import api from '../api'
import { DateTime } from 'luxon'

const Home = () => {
  const [userActions, setUserActions] = useState([])
  const [date, setDate] = useState(DateTime.local())

  const handleLoadActions = async () => {
    setUserActions(await api.getUserActions())
  }

  const handleAction = async ({
    _id
  }) => {
    await api.updateActionStatus({
      _id,
      date
    })
    setUserActions(await api.getUserActions({ date }))
  }

  const formatDate = date => DateTime.fromISO(date).toFormat('dd/MM/yyyy')
  const formatTime = date => DateTime.fromISO(date).toFormat('HH:mm')

  useEffect(() => {
    handleLoadActions()
  }, []);

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

  return (
    <Grid>
      <Menu />
      <Container>
        <ContainerHome>
          <Info>
            <Subtitle>
              Cuide da sua hidratação diaria
            </Subtitle>
            <Paragraph>
              Nosso corpo é constituido de cerca de 60% a 70% de água. Nosso sangue, músculos, pulmões e cérebro contém bastante água. Beber bastante líquido é vital para a nossa saúde.
            </Paragraph>
          </Info>

          <ControllDate
            date={formatDate(date)}
            onPrev={onPrev}
            onNext={onNext}
          />

          <ListActions>
            {
              userActions.map((action, index) => (
                <Card
                  key={index}
                >
                  <Time>
                    {formatTime(action.time)}
                  </Time>
                  <Status
                    done={action.done}
                  >
                    {action.done ? 'Concluído' : 'Pendente'}
                  </Status>
                  <Action
                    onClick={() => handleAction(action)}
                  >
                    <FaCheck />
                  </Action>
                </Card>
              )) || (
                <Card>
                  Vazio
                </Card>
              )
            }
          </ListActions>

          <Settings>
            <Chart />
          </Settings>
        </ContainerHome>
      </Container>
    </Grid>
  )
}

export default Home
