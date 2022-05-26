import {
  Input as InputStyle
} from './style'

const Input = ({
  required = false,
  placeholder,
  value,
  onChange
}) => {
  return (
    <InputStyle
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}

export default Input
