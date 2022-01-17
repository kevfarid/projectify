import React from 'react'
import useUser from 'Hooks/useUser'

const Navbar = () => {
  const { userInfo, isLogged } = useUser()
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
      <div className="navbar__search">
        <input type="text" placeholder="Search" className="input--primary" />
      </div>
    </header>
  ) : null
}

export default Navbar
