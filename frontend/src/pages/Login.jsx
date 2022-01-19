import React, { useState, useEffect } from 'react'
import useUser from 'Hooks/useUser'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [isLogged, navigate])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    <div className="login text__center">
      <div className="login--logo">
        <img src="logo.png" alt="logo" />
        <h1>Projectify</h1>
        <span>working Faster</span>
      </div>
      {isLoginLoading && <p>Loading...</p>}
      {!isLoginLoading && (
        <React.Fragment>
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form__group">
              <input
                type="text"
                className="input--primary"
                placeholder="Username"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input input--primary"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="form__group">
              <button type="submit" className="btn btn--primary btn__large">
                Login
              </button>
            </div>
          </form>
          {hasLoginError && (
            <div className="alert--error">
              <p>
                <b>Error</b> Invalid username or password
              </p>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  )
}

export default Login
