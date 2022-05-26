import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 60px;
  background: ${({ danger, success }) => success ? '#4BB543' : danger ? '#F32013' : '#30AFB4' };
  cursor: pointer;
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
