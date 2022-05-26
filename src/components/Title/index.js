import {
  Title as TitleStyle
} from './style'

const Title = ({
  small = false,
  children
}) => {
  return (
    <TitleStyle small={small}>
      {children}
    </TitleStyle>
  )
}

export default Title
