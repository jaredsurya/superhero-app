import React from 'react'
import { Link } from "react-router-dom"

function NavBar({user, setUser}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  
  
  return (
    <div className='navbar'>
      <Link to="/" className="nav">Welcome</Link>
      <Link to="/allheroes" className="nav">All Heroes</Link>
      <Link to="/allteams" className="nav">All Teams</Link>
      <Link to="/myteam" className="nav">My Team</Link>
      <a className="nav" onClick={handleLogoutClick}>Logout</a>
    </div>
  )
}

export default NavBar
