import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
// shows all of the teams of the various users in rows of 5 with the user-owner of each team
// displayed to the right. shows the sum total team power to the right of hero cards. 
function AllTeams() {
  const [allTeams, setAllTeams] = useState([])
  const [done, setDone] = useState(false)


  useEffect(() => {
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setAllTeams(data)
          sortTeamData()
        })
      }
      else {
        alert("ERROR IN ALL_TEAMS")
      }
    })
  }, [])
// below is isas code
  useEffect(() => {
    if (done === false) {
      return;
    } else {
      const { team_power, heroes } = allTeams
      const teamData = () => {
        return (
          <>
            {team_power ? 
            <h1>Your team's power level is <em>{team_power}!</em></h1> :
            <h1>Go to the "My Team" page to adjust your team.</h1>}
            <br/>
            {heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
          </>
        )}
      setHeroCards(teamData)
    }
}, [done, team])

ensureStateIsSet(team)
.then(() => setDone(true))

// above is isas code

  function sortTeamData(){
    console.log("allTeams", allTeams)
  }

  
  return (
    <div>
      <h2>These are the teams made by you and other website users.</h2>

    </div>
  )
}

export default AllTeams
