import styled from 'styled-components'

const ControllDate = styled.div`
  grid-area: controll-date;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NextPrev = styled.button`
  background: transparent;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition-duration: .3s;
  &:hover {
    opacity: .5;
  }
`

export {
  ControllDate,
  NextPrev
}
