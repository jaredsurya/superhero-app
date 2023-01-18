import React from 'react'

const HeroCard = ({ hero, handleTeamAdd }) => {
    
  return (
    <div className='card'>
      <h3 className='title'>{hero.name}</h3>
      <img className='image' alt='hero' src={hero.image} />
      <ul>
        <li>Full name: {hero.full_name}</li>
        <li>Publisher: {hero.publisher}</li>
        <li>Power level: {hero.power_level}</li>
      </ul>
      <button onClick={() => handleTeamAdd(hero)}>ADD TO TEAM</button>
    </div>
  )
}

export default HeroCard
