import React from 'react'
import loginReducer from './reducer'

interface AuthContextType {
  state?: any
  dispatch?: any
}

const users = [
  {
    name: 'Murilo Campaner',
    username: 'murilonkz',
    password: '123',
    authToken: '123456'
  }
]

const AuthContext = React.createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = loginReducer()

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)

  if (context == null) {
    throw new Error('useAuth must be used within <LoginContext.Provider>')
  }

  const { state, dispatch } = context

  const isLoggedIn = () => {
    /* @TODO: Implement backend login check */
    const authUser = sessionStorage.getItem('auth-user')
    // @TODO: Validate token
    return !!authUser
  }

  const login = React.useCallback(
    ({ username, password }) => {
      /* @TODO: Implement backend login */
      const user = users.find(
        (user) => user.username === username && user.password === password
      )
      if (user != null) {
        sessionStorage.setItem('auth-user', JSON.stringify(user))
        dispatch({
          type: 'login',
          payload: user
        })
      } else {
        dispatch({
          type: 'login',
          error: true
        })
      }
    },
    [dispatch]
  )

  const logout = React.useCallback(() => {
    /* @TODO: Implement backend logout */
    sessionStorage.removeItem('auth-user')
    dispatch({
      type: 'logout'
    })
  }, [dispatch])

  const recoveryPassword = React.useCallback(
    ({ username }: { username: string }) => {
      /* @TODO: Implement backend recovery password */
      console.log(username)
      dispatch({
        type: 'recovery'
      })
    },
    [dispatch]
  )

  return {
    authUser: state.authUser,
    isLoggedIn,
    login,
    logout,
    recoveryPassword
  }
}
