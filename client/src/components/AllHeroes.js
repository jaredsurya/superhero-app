import React from 'react'
import HeroCard from './HeroCard'
// displays cards for all of the heroes (25) within the database. each one can only be selected
// once. possible eliminating from the list on click/add to team. 5 rows of 5.
function AllHeroes({ heroArray, setHeroArray, handleTeamAdd }) {
  return (
    <div>
      <h3>Below are superhero cards. Click them to add to your team.</h3>
      // IF THE CARD IS RENDERED ON THIS PAGE, BUTTON SAYS ADD
      {heroArray.map((hero) => <HeroCard key={hero.id} hero={hero} handleTeamAdd={handleTeamAdd} />)}
    </div>
  )
}

export default AllHeroes
