import React from 'react'
import { TextStyled } from '../../nanites'


const Title = ({ ...props }) => {
  return (
    <TextStyled.TitleStyled {...props}></TextStyled.TitleStyled>
  )
}

export default Title