import {
  ControllDate as ControllDateStyle,
  NextPrev
} from './style'
import {
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'
import { DateTime } from 'luxon'

const ControllDate = ({
  date = 'Hoje',
  onNext = () => {},
  onPrev = () => {}
}) => {
  const today = DateTime.local()
  const allowNext = +today.diff(date, ['days']).days.toFixed(0) <= 0

  const formatDate = date => DateTime.fromISO(date).toFormat('dd/MM/yyyy')

  return (
    <ControllDateStyle>
      <NextPrev
        onClick={onPrev}
      >
        <FaChevronLeft />
      </NextPrev>
      {formatDate(date)}
      <NextPrev
        disabled={allowNext}
        onClick={onNext}
      >
        <FaChevronRight />
      </NextPrev>
    </ControllDateStyle>
  )
}

export default ControllDate
