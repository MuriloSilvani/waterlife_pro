import {
  ControllDate as ControllDateStyle,
  NextPrev
} from './style'
import {
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'


const ControllDate = ({
  date = 'Hoje',
  onNext = () => {},
  onPrev = () => {}
}) => {
  return (
    <ControllDateStyle>
      <NextPrev
        onClick={onPrev}
      >
        <FaChevronLeft />
      </NextPrev>
      {date}
      <NextPrev
        onClick={onNext}
      >
        <FaChevronRight />
      </NextPrev>
    </ControllDateStyle>
  )
}

export default ControllDate
