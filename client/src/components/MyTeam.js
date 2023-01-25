import React, { useEffect, useState } from 'react'
import HeroCard from './HeroCard'

// Contains the 5 hero cards with their details, that the user has picked. If less than 5 are
// picked then an empty space with  "+" is shown linking to AllHeroes page for selection.
function MyTeam({ team, ensureStateIsSet, handleTeamDelete }) {
    // const [done, setDone] = useState(false)
  const [heroCards, setHeroCards] = useState(null)
  
  //RESET HEROCARDS TO EMPTY ON LOGOUT

  useEffect(() => {  
    if(team){
      const { team_power, heroes } = team
      function teamData(){
      return (
        <>
          {team_power ? 
          <h1>Your team's power level is <em>{team_power}!</em></h1> :
          <h1>Go to the "All Heroes" page to put a team together!</h1>}
          <br/>
          {heroes.map((hero) => <HeroCard key={hero.id} doFunction={handleTeamDelete} hero={hero} type="delete" />)}
        </>
      )
      }
      setHeroCards(teamData)
    }
  }, [team])

  // function listCards(){
  //   console.log(team)
  //   if(team){
  //     console.log(team)
  //     const { team_power, heroes } = team
  //     return (
  //       <>
  //         {team_power ? 
  //         <h1>Your team's power level is <em>{team_power}!</em></h1> :
  //         <h1>Go to the "All Heroes" page to put a team together!</h1>}
  //         <br/>
  //         {heroes.map((hero) => <HeroCard key={hero.id} doFunction={handleTeamDelete} hero={hero} type="delete" />)}
  //       </>
  //     )
  //   }
  // }

    // // should be able to NAME your team

    // useEffect(() => {
    //     if (done === false) {
    //       return;
    //     } else {
    //       const { team_power, heroes } = team
    //       const teamData = () => {
    //         return (
    //           <>
    //             {team_power ? 
    //             <h1>Your team's power level is <em>{team_power}!</em></h1> :
    //             <h1>Go to the "All Heroes" page to put a team together!</h1>}
    //             <br/>
    //             {heroes.map((hero) => <HeroCard key={hero.id} doFunction={handleTeamDelete} hero={hero} type="delete" />)}
    //           </>
    //         )}
    //       setHeroCards(teamData)
    //     }
    // }, [done, team])

    // ensureStateIsSet(team)
    // .then(() => setDone(true))

  return (
    <div>
      <h3>This page shows your team. <br/>See how it compares to other <br/>teams by visiting "All Teams".</h3>
      {/* IF THE CARD IS RENDERED ON THIS PAGE, BUTTON SAYS REMOVE */}
      {heroCards ? heroCards : <h1>Go to the "All Heroes" page to put a team together!</h1>}
    </div>
  )
}

export default MyTeam;