import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
  
  
  
  return (
    <div className='navbar'>
      <Link to="/" className="nav">Welcome</Link>
      <Link to="/myteam" className="nav">My Team</Link>
      <Link to="/allteams" className="nav">All Teams</Link>
      <Link to="/allheroes" className="nav">All Heroes</Link>
    </div>
  )
}

export default NavBar
