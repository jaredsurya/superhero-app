import React, {useState} from "react";
import HeroCard from "./HeroCard";
// displays cards for all of the heroes (25) within the database. each one can only be selected
// once. possible eliminating from the list on click/add to team. 5 rows of 5.
function AllHeroes({ heroArray, handleTeamAdd }) {
  
  const [name, setName] = useState("")
  const [full_name, setFullName] = useState("")
  const [publisher, setPublisher] = useState("")
  const [power_level, setPowerLevel] = useState("")
  const [errors, setErrors] = useState([])

  function heroSubmit(e){
    e.preventDefault()
    var errors
  }

  return (
    <div>
      <h2>
        Below are superhero cards.
        <br />
        Click ADD to build your team.
        <br />
        Only <em>5</em> heroes allowed per team.
      </h2>
      <div className="cards">
        {heroArray.map((hero) => (
          <HeroCard
            key={hero.id}
            hero={hero}
            doFunction={handleTeamAdd}
            type="add"
          />
        ))}
      </div>
      <form onSubmit={heroSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="fullname">Full name: </label>
        <input
          type="text"
          id="fullname"
          onChange={(e) => setFullName(e.target.value)}
        />
        <br />
        <label htmlFor="publisher">Publisher: </label>
        <input
          type="text"
          id="publisher"
          onChange={(e) => setPublisher(e.target.value)}
        />
        <br />
        <label htmlFor="powerlevel">Power level: </label>
        <input
          type="text"
          id="powerlevel"
          onChange={(e) => setPowerLevel(e.target.value)}
        />
        <br />
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
}

export default AllHeroes;
