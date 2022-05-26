import styled from 'styled-components'

const ContainerHome = styled.main`
  height: 100%;
  display: grid;
  gap: 10px 25px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content;
  grid-template-areas:
    "info info"
    "controll-date settings"
    "list-actions settings"
  ;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "info"
      "settings"
      "controll-date"
      "list-actions"
    ; 
  }
`

const Info = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 0 16px 0;
`

const ListActions = styled.ul`
  grid-area: list-actions;
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
  color: #4BB543;
  border: 1px solid #4BB543;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: .3s;

  &:hover {
    background: #4BB543;
    color: #FFF;
  }
`

const Settings = styled.div`
  grid-area: settings;
`

export {
  ContainerHome,
  Info,
  ListActions,
  Card,
  Time,
  Status,
  Action,
  Settings
}
