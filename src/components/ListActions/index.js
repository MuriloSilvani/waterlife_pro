import {
  FaCheck,
  FaTimes
} from 'react-icons/fa'
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
  const diffDays = today.diff(date, ['days']).days.toFixed(0) === '0'
  const formatTime = date => DateTime.fromISO(date).toFormat('HH:mm')
  const calcDiff = (time) => {
    const _time = DateTime.fromISO(time)
    return _time.diff(today, ['hours']).hours.toFixed(0)
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

  return (
    <ListActionsStyle>
      {
        !actions.length && (
          <span>
            Cadastre seus dados ao lado para gerar a tabela
          </span>
        )
      }
      {
        actions.map((action, index) => (
          <Card
            key={index}
          >
            <Time>
              {formatTime(action.time)} ({action.quantity?.toFixed(0)} ml)
            </Time>
            <Status
              done={action.done}
            >
              {action.done ? 'Concluído' : diffDays ? 'Pendente' : calcDiff(action.time) < 0 ? 'Expirado' : `Disponivel em ${calcDiff(action.time)} horas` }
            </Status>
            {diffDays}
            {
              diffDays && (
                <Action
                  done={action.done}
                  onClick={() => handleAction(action)}
                >
                  {
                    action.done
                      ? <FaTimes />
                      : <FaCheck />
                  }
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
