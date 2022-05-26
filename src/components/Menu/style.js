import styled from 'styled-components'

const Menu = styled.div`
  grid-area: 'menu';
  background: #30AFB4;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.span`
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
`

const Logout = styled.button`
  background: transparent;
  border: none;
  color: #FFF;
  font-size: 14px;
  cursor: pointer;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;

  &:hover {
    opacity: .7;
  }
`

export {
  Menu,
  Title,
  Logout
}
