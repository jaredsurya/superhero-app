import React from 'react'
import HeroCard from './HeroCard'

// Contains the 5 hero cards with their details, that the user has picked. If less than 5 are
// picked then an empty space with  "+" is shown linking to AllHeroes page for selection.
function MyTeam({team}) {
  return (
    <div>
      <h3>This is the team you have built so far. Click a hero to return them to the All Heroes page.</h3>
      // IF THE CARD IS RENDERED ON THIS PAGE, BUTTON SAYS REMOVE
      {team.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
    </div>
  )
}

export default MyTeam
