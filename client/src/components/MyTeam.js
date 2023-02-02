import React, { useEffect, useState } from 'react'
import HeroCard from './HeroCard'

// Contains the 5 hero cards with their details, that the user has picked. If less than 5 are
// picked then an empty space with  "+" is shown linking to AllHeroes page for selection.
function MyTeam({ userTeam, setUserTeam, user, handleTeamDelete }) {
  const [teamJSX, setTeamJSX] = useState(null)
  
  useEffect(() => {
    if(user){
      fetch(`/user_heros/${user.id}`)
      .then(res => {
        if (res.ok){
          res.json().then((data) => {
            setUserTeam(data)
          })
        } else {
          alert("error in MY_TEAM")
        }
      })
    }
  }, [])

  useEffect(() => {  
    if(userTeam){
      const { team_power, heroes } = userTeam
      if(team_power > 0){
        setTeamJSX(
          <>
            <h1>Your team's power level is <em>{team_power}!</em></h1>
            {heroes.map((hero) => <HeroCard key={hero.id} doFunction={handleTeamDelete} hero={hero} type="delete" />)}
          </>
        )
      } else {
        setTeamJSX(
          <>
            <h1>Go to the "All Heroes" page to put a team together!</h1>
          </>
        )
      }
    }
  }, [userTeam])
  
  return (
    <div>
      <h2>This page shows your team. <br/>See how it compares to other <br/>teams by visiting "All Teams".</h2>
      {teamJSX}
    </div>
  )
}

export default MyTeam;