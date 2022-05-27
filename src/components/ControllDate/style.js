import styled from 'styled-components'

const ControllDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
`

const NextPrev = styled.button`
  background: transparent;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition-duration: .3s;
  font-size: 18px;
  &:hover {
    opacity: .5;
  }
  ${({ disabled }) => disabled && `
    pointer-events: none;
    opacity: 0.5;
  ` }
`

export {
  ControllDate,
  NextPrev
}
