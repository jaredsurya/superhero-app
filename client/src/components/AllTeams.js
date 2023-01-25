import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
// shows all of the teams of the various users in rows of 5 with the user-owner of each team
// displayed to the right. shows the sum total team power to the right of hero cards. 
function AllTeams({ensureStateIsSet}) {
  const [allTeams, setAllTeams] = useState(null)
  const [done, setDone] = useState(false)
  const [heroCards, setHeroCards] = useState(null)

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
    if (allTeams){
      console.log(allTeams)
      const teamsJSX = allTeams.map((team) => {
        console.log(team)
      })
      const teamData = () => {
        return (
          <>
            <h1>hi</h1>
            <br/>
            //map over allteams to produce herocards without buttons
          </>
        )}
      setHeroCards(teamData)
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

    </div>
  )
}

export default AllTeams
