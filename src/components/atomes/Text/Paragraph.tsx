import React from 'react'
import { TextStyled } from '../../nanites'

const Paragraph = ({ ...props }) => {
  return (
    <TextStyled.ParagraphStyled {...props}></TextStyled.ParagraphStyled>
  )
}

export default Paragraph