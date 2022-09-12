import { Button, Form, H1, Link, TextInput } from '../../components'
import { useAuth } from '../../context/auth'

export const RecoveryPassword = () => {
  const { recoveryPassword } = useAuth()
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target)) as any
    recoveryPassword(formData)
  }

  return (
    <div>
      <H1>Recuperar senha</H1>
      <Form onSubmit={handleSubmit}>
        <TextInput type="text" placeholder="E-mail ou CPF" name="username" />
        <Button type="submit">Recuperar</Button>
      </Form>
      <Link href="/">Voltar</Link>
    </div>
  )
}
