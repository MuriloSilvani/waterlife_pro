import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  background: #FFF;
  padding: 16px;
  border-radius: 16px;
`

const Text1 = styled.span`
  font-size: 22px;
  font-weight: bold;
`

const PercentageWrapper = styled.span`
  font-size: 40px;
  font-weight: bold;
  span {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #FFF;
  box-shadow: 0 0 0 10px solid rgb(23, 106, 201);
`

const Water = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(23, 106, 201);
  transition: 0.3s ease-out;
  @keyframes water {
    from {
      transform: translate(-50%, -${({ val = 0 }) => {
        return (val * 0.6) + 35
      }}%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -${({ val = 0 }) => {
        return (val * 0.6) + 35
      }}%) rotate(360deg);
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 150%;
    height: 150%;
    border-radius: 40%;
    background: #FFF;
    animation: water 5s linear infinite;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 150%;
    height: 150%;
    border-radius: 42%;
    background: rgb(240, 228, 228, 0.2);
    animation: water 7s linear infinite;
  }
`

const Text2 = styled.span`
  font-size: 14px;
`

export {
  Wrapper,
  Text1,
  PercentageWrapper,
  Water,
  Text2
}
