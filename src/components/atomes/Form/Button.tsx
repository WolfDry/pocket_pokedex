import { FormStyled } from "../../nanites"

const Button = ({ ...props }) => {
  return (
    <FormStyled.ButtonStyled {...props}></FormStyled.ButtonStyled>
  )
}

export default Button