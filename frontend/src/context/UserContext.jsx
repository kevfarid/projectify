import React, { useState, useMemo } from 'react'

const Context = React.createContext({})

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() =>
    JSON.parse(window.sessionStorage.getItem('userInfo'))
  )
  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem('token')
  )

  const values = useMemo(
    () => ({
      userInfo,
      token,
      setUserInfo,
      setToken,
    }),
    [userInfo, token]
  )

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export default Context
