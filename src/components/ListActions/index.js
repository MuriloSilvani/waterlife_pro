import { FaCheck } from 'react-icons/fa'
import {
  ListActions as ListActionsStyle,
  Card,
  Time,
  Status,
  Action,
} from './style'

import api from '../../services/api'
import { DateTime } from 'luxon'

const ListActions = ({
  actions = [],
  date,
  setUserActions
}) => {
  const today = DateTime.local() 
  const diff = date?.diff(today, ['hours']).hours.toFixed(0)
  const diffDays = today.diff(date, ['days']).days.toFixed(0) === '0'
  const formatTime = date => DateTime.fromISO(date).toFormat('HH:mm')

  const handleAction = async ({
    _id
  }) => {
    await api.updateActionStatus({
      _id,
      date
    })
    setUserActions(await api.getUserActions({ date }))
  }

  return (
    <ListActionsStyle>
      {
        actions.map((action, index) => (
          <Card
            key={index}
          >
            <Time>
              {formatTime(action.time)}
            </Time>
            <Status
              done={action.done}
            >
              {action.done ? 'Concluído' : diffDays ? 'Pendente' : diff < 0 ? 'expirado' : `Disponivel em ${diff} horas` }
            </Status>
            {diffDays}
            {
              diffDays && !action.done && (
                <Action
                  onClick={() => handleAction(action)}
                >
                  <FaCheck />
                </Action>
              )
            }
          </Card>
        )) || (
          <Card>
            Vazio
          </Card>
        )
      }
    </ListActionsStyle>
  )
}

export default ListActions
