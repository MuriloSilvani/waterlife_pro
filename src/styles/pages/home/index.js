import styled from 'styled-components'

const ContainerHome = styled.main`
  height: 100%;
  display: grid;
  gap: 0px 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content min-content 1fr;
  grid-template-areas:
    "info info"
    "controll settings"
    "list settings"
  ;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-template-areas:
      "info"
      "settings"
      "controll"
      "list"
    ; 
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const InfoWrapper = styled.div`
  grid-area: info;
  padding-bottom: 20px;
`

const SettingsWrapper = styled.div`
  grid-area: settings;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ControllWrapper = styled.div`
  grid-area: controll;
`

const ListWrapper = styled.div`
  grid-area: list;
`

export {
  ContainerHome,
  Info,
  InfoWrapper,
  SettingsWrapper,
  ControllWrapper,
  ListWrapper
}
