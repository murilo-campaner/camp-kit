import React from 'react'
import { useAuth } from '../../context/auth'
import { Button } from '../../components'

export const Resume = () => {
  const { authUser, logout } = useAuth()

  return (
    <div>
      <div>Dashboard</div>
      <div>Autenticado como: {authUser?.name}</div>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}
