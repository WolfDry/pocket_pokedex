import React from 'react'
import { ContainerStyled } from '../../nanites'

const Column = ({ ...props }) => {
  return (
    <ContainerStyled.ColumnStyled {...props}></ContainerStyled.ColumnStyled>
  )
}

export default Column