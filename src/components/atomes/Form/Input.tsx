import React from 'react'
import { FormStyled } from '../../nanites'

const Input = ({ ...props }) => {
  return (
    <FormStyled.InputStyled {...props} />
  )
}

export default Input