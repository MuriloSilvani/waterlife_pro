import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Container = styled.main`
  grid-area: 'container';
  flex: 1;
  padding: 20px 10%;
  overflow: auto;
`

export {
  Grid,
  Container
}
