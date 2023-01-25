import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
// shows all of the teams of the various users in rows of 5 with the user-owner of each team
// displayed to the right. shows the sum total team power to the right of hero cards. 
function AllTeams({ensureStateIsSet}) {
  const [allTeams, setAllTeams] = useState(null)
  const [done, setDone] = useState(false)
  const [heroCards, setHeroCards] = useState(null)
  const [teamsJSX, setTeamsJSX] = useState(null)

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
// HAVE TO CLEAN UP TEAMSJSX VARIABLE, MAKE IT PRODUCE THE JSX FOR USER AND THEIR HEROES
// USE STATE WHERE NECESSARY AND CLEAN UP UNUSED STATE VARIABLES
  useEffect(() => {
    if (allTeams){
      console.log("ALL", allTeams)
      setTeamsJSX(allTeams.map((team) => {
        return (
          <div className="team">
            <h1>{team.first_name}'s team:</h1>
            <h2>Power level: {team.team_power}!</h2>
            {team.heros.map((hero) => <HeroCard key={hero.id} hero={hero} type="blank" />)}
          </div>
        )
      }))
      
      //setHeroCards(teamData)
    }
}, [done, allTeams])

ensureStateIsSet(allTeams)
.then(() => setDone(true))

// above is isas code

  function sortTeamData(){
    console.log("allTeams", allTeams)
  }

  
  return (
    <div>
      <h2>These are the teams made by you and other website users.</h2>
      {teamsJSX}
    </div>
  )
}

export default AllTeams
