import { Text, Form, Container } from '../atomes'

interface Props {
  label: string,
  type: string
}

const Input = ({ label, type, ...props }: Props) => {
  return (
    <Container.Column>
      <Text.Label>{label}</Text.Label>
      <Form.Input type={type} />
    </Container.Column>
  )
}

export default Input