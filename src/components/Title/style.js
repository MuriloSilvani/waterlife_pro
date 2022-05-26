import styled from 'styled-components'

const Title = styled.h2`
  color: #262626;
  cursor: default;
  font: 600 ${({ small }) => small ? '24px' : '32px'} Roboto, sans-serif;
`

export {
  Title
}
