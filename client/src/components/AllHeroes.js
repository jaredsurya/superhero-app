import React from "react";
import HeroCard from "./HeroCard";
// displays cards for all of the heroes (25) within the database. each one can only be selected
// once. possible eliminating from the list on click/add to team. 5 rows of 5.
function AllHeroes({ heroArray, handleTeamAdd }) {
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
    </div>
  );
}

export default AllHeroes;
