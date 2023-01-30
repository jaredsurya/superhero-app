import React from 'react'
import { Link } from "react-router-dom"

function NavBar({user, setUser, setUserTeam}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUserTeam({heroes: [], team_power: 0})
        setUser(null);
      }
    });
  }

  // ON LOGIN erase old power levels and sum current team's power for display on myTeam
  
  return (
    <div className='navbar'>
      <Link to="/" className="nav">Welcome</Link>
      <Link to="/allheroes" className="nav">All Heroes</Link>
      <Link to="/myteam" className="nav">My Team</Link>
      <Link to="/allteams" className="nav">All Teams</Link>
      <Link to="/myprofile" className="nav">My Profile</Link>
      <a className="nav" onClick={handleLogoutClick}>Logout</a>
    </div>
  )
}

export default NavBar
