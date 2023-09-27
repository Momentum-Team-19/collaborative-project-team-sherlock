import React from "react";
import { Link } from 'react-router-dom'

const Navbar = ({ setToken, isAuthenticated }) => {
  const handleLogout = () => {
    // clear the token from local storace
    setToken("");
  };
  return (
    <div className='navbar'>
      <div className="buttoncontainer">
      <Link to={{ pathname: "/" }}><p className="navbutton">🏠</p></Link>
      <Link to='/profile'><p className="navbutton">😄</p></Link>
      <Link to='/cardmaker'><p className="navbutton">✛</p></Link>
      {!isAuthenticated ? <Link to={{ pathname: "/login" }} className='sub-page-link'>
        <p className="navbutton">LI</p>
      </Link>:
      <p className="navbutton" onClick={handleLogout}>LO</p>}
      </div>
    </div>
  )
}

export default Navbar;