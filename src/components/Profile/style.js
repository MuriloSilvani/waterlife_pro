import styled from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  background: #FFF;
  padding: 16px;
  border-radius: 16px;

  overflow: hidden;
  transition-duration: .3s;
  max-height: ${({ open }) => open ? '360px' : '68px'};
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

export {
  ProfileWrapper,
  TitleWrapper,
  OpenButton,
  ContentWrapper
}
