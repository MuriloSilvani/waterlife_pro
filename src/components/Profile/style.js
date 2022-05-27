import styled from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  background: #FFF;
  padding: 16px;
  border-radius: 16px;

  overflow: ${({ open }) => open ? 'visible' : 'hidden'};
  transition-duration: .3s;
  max-height: ${({ open }) => open ? '100vh' : '68px'};
`

const TitleWrapper = styled.div`
  padding: 4px 12px 0 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const OpenButton = styled.button`
  padding: 5px 12px;
  cursor: pointer;
  background: transparent;
  border: none;
  transition-duration: .3s;
  &:hover {
    opacity: .5;
  }
`

const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  `

const InputRow = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export {
  ProfileWrapper,
  TitleWrapper,
  OpenButton,
  ContentWrapper,
  InputRow
}
