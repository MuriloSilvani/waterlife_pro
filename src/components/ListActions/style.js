import styled from 'styled-components'

const ListActions = styled.ul`
  padding: 16px 0;
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
`

const Card = styled.div`
  padding: 16px;
  background: #FFF;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-template-areas:
    "time action"
    "status action"
  ;
`

const Time = styled.span`
  grid-area: time;
`

const Status = styled.span`
  grid-area: status;
  color: ${({ done }) => done ? '#4BB543' : '#df4759'};
`

const Action = styled.button`
  grid-area: action;
  cursor: pointer;
  border-radius: 8px;
  background: transparent;
  color: ${({ done }) => done ? '#df4759' : '#4BB543'};
  border: 1px solid ${({ done }) => done ? '#df4759' : '#4BB543'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: .3s;

  &:hover {
    background: #4BB543;
    color: #FFF;
  }
`

export {
  ListActions,
  Card,
  Time,
  Status,
  Action,
}
