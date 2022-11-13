import { createContext, ReactNode, useEffect, useReducer } from 'react'
import axios from 'src/utils/axios'
import { isValidToken, setSession } from 'src/utils/jwt'
import { ActionMap, AuthState, AuthUser, JWTContextType } from 'src/@types/auth'

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Register = 'REGISTER'
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean
    user: AuthUser
  }
  [Types.Login]: {
    user: AuthUser
  }
  [Types.Logout]: undefined
  [Types.Register]: {
    user: AuthUser
  }
}

export type JWTActions =
  ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>]

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
}

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user
      }
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    case 'REGISTER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    default:
      return state
  }
}

const AuthContext = createContext<JWTContextType | null>(null)

type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(JWTReducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken =
          typeof window !== 'undefined'
            ? localStorage.getItem('accessToken')
            : ''

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken)

          const response = await axios.get('/api/user/checkuser/')
          const { user } = response.data

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user
            }
          })
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null
            }
          })
        }
      } catch (err) {
        console.error(err)
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null
          }
        })
      }
    }

    initialize()
  }, [])

  const login = async (email: string, password: string) => {
    const response = await axios.post('/api/user/login/', {
      email,
      password
    })
    const { accessToken, user } = response.data

    const { status } = user

    if (accessToken && status === 'active') {
      setSession(accessToken)

      dispatch({
        type: Types.Login,
        payload: {
          user
        }
      })
    } else {
      dispatch({
        type: Types.Initial,
        payload: {
          isAuthenticated: false,
          user: null
        }
      })
    }
  }

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    const response = await axios.post('/api/user/register', {
      name,
      email,
      password,
      confirmPassword
    })
    const { accessToken } = response.data

    localStorage.setItem('accessToken', accessToken)

    if (accessToken && isValidToken(accessToken)) {
      setSession(accessToken)

      const response = await axios.get('/api/user/checkuser/')
      const { user } = response.data

      dispatch({
        type: Types.Register,
        payload: {
          user
        }
      })
    } else {
      dispatch({
        type: Types.Initial,
        payload: {
          isAuthenticated: false,
          user: null
        }
      })
    }
  }

  const logout = async () => {
    setSession(null)
    dispatch({ type: Types.Logout })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
