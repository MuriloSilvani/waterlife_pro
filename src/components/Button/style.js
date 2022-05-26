import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #30AFB4;
  border: 0;
  border-radius: 8px;
  color: #FFF;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
  &:hover{
    filter: brightness(75%);
  }
`

export {
  Button
}
