import { useState, useEffect } from 'react'
import {
  Wrapper,
  Text1,
  PercentageWrapper,
  Water,
  Text2
} from './style'

import api from '../../services/api'

const Chart = ({
  watch
}) => {
  const [percentage, setPercentage] = useState(0)
  const [show, setShow] = useState(false)

  const loadPercentage = async () => {
    const actions = await api.getUserActions()

    setShow(actions.length)

    setPercentage(((100 * actions.filter(action => action.done).length) / actions.length).toFixed(1))
  }

  useEffect(() => {
    loadPercentage()
  }, [watch])

  return show ? (
    <Wrapper>
      <Text1>Você consumiu</Text1>
      <PercentageWrapper>
        <Water
          val={+percentage}
        />
        <span>
          {percentage}%
        </span>
      </PercentageWrapper>
      <Text2>da quantidade de água  para o dia de hoje</Text2>
    </Wrapper>
  ) : (<></>)
}

export default Chart
