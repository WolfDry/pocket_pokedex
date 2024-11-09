import React from 'react'
import { ContainerStyled } from '../../nanites'

const Wrap = ({ ...props }) => {
  return (
    <ContainerStyled.WrapStyled {...props}></ContainerStyled.WrapStyled>
  )
}

export default Wrap