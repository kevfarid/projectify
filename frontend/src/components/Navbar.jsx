import React from 'react'
import useUser from 'Hooks/useUser'

const Navbar = () => {
  const { userInfo, isLogged, logout } = useUser()
  return isLogged ? (
    <header className="navbar">
      <div className="navbar__user">
        <div className="navbar__avatar">
          <img src={userInfo.urlImg} alt="logo" />
        </div>
        <div className="navbar__greeting">
          <h1>
            Hello, {userInfo.name && <span>{userInfo.name.split(' ')[0]}</span>}{' '}
          </h1>
        </div>
      </div>
      <div className="navbar__menu">
        <a href="/">Home</a>
        <button
          className="btn btn__text btn__danger"
          type="button"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </header>
  ) : null
}

export default Navbar
