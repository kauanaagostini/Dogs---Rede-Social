import React from 'react'
import {useNavigate} from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Input from '../FormsComponents/Input/Input'
import Button from '../FormsComponents/Button/Button'
import Error from '../Helper/Error'
import {PASSWORD_RESET} from '../../api'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = useForm('password')
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
  },[])

  async function handleSubmit(e) {
    e.preventDefault()
    const { url, options} = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })
    const {response} = await request(url, options)
    if(response.ok) navigate('/login')
  }

  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password}/>
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  )
}

export default LoginPasswordReset
