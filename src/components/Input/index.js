import {
  Wrapper,
  Input as InputStyle,
  Label
} from './style'

const Input = ({
  required = false,
  placeholder,
  label,
  value,
  onChange,
  type = 'text'
}) => {
  return (
    <Wrapper>
      {
        label && (
          <Label>
            {label}
          </Label>
        )
      }
      <InputStyle
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  )
}

export default Input
