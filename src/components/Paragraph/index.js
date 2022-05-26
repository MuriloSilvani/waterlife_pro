import {
  Paragraph as ParagraphStyle
} from './style'

const Paragraph = ({
  children
}) => {
  return (
    <ParagraphStyle>
      {children}
    </ParagraphStyle>
  )
}

export default Paragraph
