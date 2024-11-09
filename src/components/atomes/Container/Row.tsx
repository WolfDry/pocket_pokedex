import React from 'react'
import { ContainerStyled } from '../../nanites'

const Row = ({ ...props }) => {
  return (
    <ContainerStyled.RowStyled {...props}></ContainerStyled.RowStyled>
  )
}

export default Row