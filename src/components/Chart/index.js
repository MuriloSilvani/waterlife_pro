import {
  Wrapper,
  Text1,
  PercentageWrapper,
  Water,
  Text2
} from './style'

const Chart = () => {
  const percentage = 50

  return (
    <Wrapper>
      <Text1>Voce consumiu</Text1>
      <PercentageWrapper>
        <Water />
        <span>
          {percentage}%
        </span>
      </PercentageWrapper>
      <Text2>da quantidade de agua para o dia de hoje</Text2>
    </Wrapper>
  )
}

export default Chart
