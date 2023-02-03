import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";

function AllTeams() {
  const [allTeams, setAllTeams] = useState(null);
  const [teamsJSX, setTeamsJSX] = useState(null);

  useEffect(() => {
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setAllTeams(data);
        });
      } else {
        console.log("error:", r);
      }
    });
  }, []);

  useEffect(() => {
    if (allTeams) {
      setTeamsJSX(
        allTeams.map((team) => {
          if (team.team_power) {
            return (
              <div className="team">
                <h1>{team.first_name}'s team:</h1>
                <h2>
                  Power level: <em>{team.team_power}!</em>
                </h2>
                {team.heros.map((hero) => (
                  <HeroCard key={hero.id} hero={hero} type="blank" />
                ))}
              </div>
            );
          }
        })
      );
    }
  }, [allTeams]);

  return (
    <div>
      <h2>
        These are the teams made by <br />
        you and other website users.
      </h2>
      {teamsJSX}
    </div>
  );
}

export default AllTeams;
