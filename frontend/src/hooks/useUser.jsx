import { useCallback, useContext, useState } from 'react'
import Context from 'Context/UserContext'
import { login as loginService } from 'Services/auth'

export default function useUser() {
  const { userInfo, token, setUserInfo, setToken } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false })
      loginService({ email, password })
        .then((resp) => {
          window.sessionStorage.setItem('token', resp.data.data.token)
          window.sessionStorage.setItem(
            'userInfo',
            JSON.stringify(resp.data.data.userInfo)
          )
          setUserInfo(resp.data.data.userInfo)
          setToken(resp.data.data.token)
          setState({ loading: false, error: false })
        })
        .catch(() => {
          setState({ loading: false, error: true })
          window.sessionStorage.removeItem('token')
        })
    },
    [setUserInfo, setToken]
  )

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token')
    setToken(null)
  }, [setToken])

  return {
    userInfo,
    isLogged: Boolean(token),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  }
}
