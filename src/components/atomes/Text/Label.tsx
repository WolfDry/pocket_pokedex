import React from 'react'
import { TextStyled } from '../../nanites'

const Label = ({ ...props }) => {
  return (
    <TextStyled.LabelStyled {...props}></TextStyled.LabelStyled>
  )
}

export default Label