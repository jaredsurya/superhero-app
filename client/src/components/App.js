import React, { useEffect, useState } from "react";
import Login from "./Login"
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MyTeam from "./MyTeam";
import AllHeroes from "./AllHeroes";
import AllTeams from "./AllTeams";

function App() {
  const [user, setUser] = useState(null)
  const [heroArray, setHeroArray] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser)
      }
    })
  }, [])

  useEffect(() => {
    fetch("/heros").then((r) => {
      r.json().then(setHeroArray)
  })
  }, [])

  
  if (!user) return <Router><Login setUser={setUser} /></Router>
  
  //console.log("2", heroArray)

  function handleTeamAdd(hero){
    //console.log(hero)
    const userHero = {
      user_id: user.id,
      hero_id: hero.id,
    }
    console.log(userHero)
    fetch("/user_heros", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userHero)
    }).then((r) => r.json())
      .then(console.log)
// USE RETURNED DATA TO POPULATE ANOTHER HEROCARD ON THE MYTEAM PAGE

    // needs to fetch that the hero was added to a team by x user
    // backend needs to register current user and add hero to that user's team

    // each user has one team, each team has one user
    // use user.id
  }


  return (
    <Router className="App">
    <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/myteam" element={<MyTeam/>}/>
        <Route path="/allheroes" element={<AllHeroes heroArray={heroArray} setHeroArray={setHeroArray} handleTeamAdd={handleTeamAdd} />}/>
        <Route path="/allteams" element={<AllTeams/>}/>
      </Routes>
    </Router>
  );
}

export default App;
