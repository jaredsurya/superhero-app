// import React, { useEffect, useState } from 'react'
// import HeroCard from './HeroCard'

// // Contains the 5 hero cards with their details, that the user has picked. If less than 5 are
// // picked then an empty space with  "+" is shown linking to AllHeroes page for selection.
// function MyTeam({ team, ensureStateIsSet, handleTeamDelete }) {
//   const [done, setDone] = useState(false)
//   const [heroCards, setHeroCards] = useState(null)
  
//   useEffect(() => {
//     if (done === false){
//       return;
//     } else {
//       const { team_power, heroes } = team
//       const teamData = () => {
//         return (
//           <>
//             <small>Team Power Level: <strong>{team_power}</strong></small>
//             <br/>
//             {heroes.map((hero) => <HeroCard key={hero.id} doFunction={handleTeamDelete} hero={hero} type="delete" />)}
//           </>
//         )}
//         setHeroCards(teamData)
//     }
//   }, [done, team])

//   ensureStateIsSet(team)
//   .then(() => setDone(true))

//   return (
//     <div>
//       <h3>This is the team you have built so far. Click a hero to return them to the All Heroes page.</h3>
//       {/* IF THE CARD IS RENDERED ON THIS PAGE, BUTTON SAYS REMOVE */}
//       {done ? heroCards : null}
//     </div>
//   )
// }

// export default MyTeam


import React, { useEffect, useState } from 'react'
import HeroCard from './HeroCard'

// Contains the 5 hero cards with their details, that the user has picked. If less than 5 are
// picked then an empty space with  "+" is shown linking to AllHeroes page for selection.
function MyTeam({ team, ensureStateIsSet, handleTeamDelete }) {
    const [done, setDone] = useState(false)
    const [heroCards, setHeroCards] = useState(null)

    useEffect(() => {
        if (done === false) {
            return;
        } else {
            const { team_power, heroes } = team
            const teamData = () => {
            return (
            <>
                <small>Team Power Level: {team_power}</small>
                <br></br>
                {heroes.map((hero) => <HeroCard key={hero.id} doFunction={handleTeamDelete} hero={hero} type="delete" />)}
            </>
            )}
            setHeroCards(teamData)
        }
    }, [done, team])

    ensureStateIsSet(team)
    .then(() => setDone(true))

  return (
    <div>
      <h3>This is the team you have built so far. Click a hero to return them to the All Heroes page.</h3>
      {/* IF THE CARD IS RENDERED ON THIS PAGE, BUTTON SAYS REMOVE */}
      {done ? heroCards : null}
    </div>
  )
}

export default MyTeam;