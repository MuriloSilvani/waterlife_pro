
import {
  Button as ButtonStyle
} from './style'

const Button = ({
  children,
  danger,
  success,
  onClick
}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      danger={danger}
      success={success}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button
