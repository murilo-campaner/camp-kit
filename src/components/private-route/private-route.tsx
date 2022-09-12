import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/auth'

interface PrivateRouteProps {
  redirectPath?: string
  children?: ReactElement
}

export const PrivateRoute = ({ redirectPath = '/', children }: PrivateRouteProps) => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn()) {
    return <Navigate to={redirectPath} replace />
  }

  return (children != null) ? children : <Outlet />
}
