const Navbar = () => {
  const name = 'Daniel'
  return (
    <header className="navbar">
      <div className="navbar__user">
        <div className="navbar__avatar">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="logo"
          />
        </div>
        <div className="navbar__greeting">
          <h1>
            Hello,<span>{name}</span>
          </h1>
        </div>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  )
}

export default Navbar
