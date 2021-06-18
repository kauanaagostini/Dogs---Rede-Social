import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../FormsComponents/Input/Input'
import Button from '../FormsComponents/Button/Button'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../Context/UserContext'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const {userLogin} = React.useContext(UserContext)

  async function handleLogin(e) {
    e.preventDefault()

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
