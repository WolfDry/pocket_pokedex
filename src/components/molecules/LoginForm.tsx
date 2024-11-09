import React from 'react'
import { Container, Text, Form } from '../atomes'
import Input from './Input'

const LoginForm = () => {
  return (
    <Container.Column>
      <Text.Title>Connexion</Text.Title>
      <Input label={'Email'} type={'email'} />
      <Input label={'Mot de passe'} type={'password'} />
      <Form.Button>Se connecter</Form.Button>
    </Container.Column>
  )
}

export default LoginForm