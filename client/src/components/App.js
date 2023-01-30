import React, { useEffect, useState } from "react";
import Login from "./Login"
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MyTeam from "./MyTeam";
import AllHeroes from "./AllHeroes";
import AllTeams from "./AllTeams";
import Profile from "./Profile";

// resend the fetch for the myteam data bc
// sometimes it doesn't load 

function App() {
  const [user, setUser] = useState(null)
  const [heroArray, setHeroArray] = useState([])
  const [userTeam, setUserTeam] = useState([])
    // create a promise to check whether state is set or not
    
    // function ensureStateIsSet(state) {
    //   return new Promise(function (resolve, reject) {
    //     (function waitForState(){
    //       if (state) return resolve();
    //       setTimeout(waitForState, 30);
    //       })();
    //     });
    // }

  useEffect(() => {
    fetch("/me")
        .then(res => res.json())
        .then(data => setUser(data))
  }, [])

  useEffect(() => {
    fetch("/heros")
    .then(res => res.json())
    .then(data => setHeroArray(data))
  }, [])

  // useEffect(() => {
  //   if(user){
  //     fetch(`/user_heros/${user.id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       if (!data) {
  //         data = {
  //           team_power: 0,
  //           heroes: []
  //           }
  //         }
  //       setUserTeam(data)
  //     })
  //   }
  // }, [])

  // useEffect(() => {
  //   ensureStateIsSet(user)
  //   .then(() => {
  //     
  // })
  // }, [user])
  
console.log("userTeam", userTeam)

  if (!user) return <Router><Login setUser={setUser} /></Router>
  
  function handleTeamAdd(hero){
    const userHero = {
      user_id: user.id,
      hero_id: hero.id,
    }
    fetch("/user_heros", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userHero)
    }).then((r) => {
      if (r.ok){
        r.json()
        .then(data => setUserTeam(data))
        alert(`${hero.name} was added to your team with ${hero.power_level} power points!`)
      }
      else {
        r.json()
        .then(r => alert(r.errors))
      }
    })   
// USE RETURNED DATA TO POPULATE ANOTHER HEROCARD ON THE MYTEAM PAGE

    // needs to fetch that the hero was added to a team by x user
    // backend needs to register current user and add hero to that user's team

    // each user has one team, each team has one user
    // use user.id
  }

  function handleTeamDelete(hero) {
      fetch(`/user_heros/${hero.id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(() => {
        const updatedUserTeam = {
            ...userTeam,
            team_power: userTeam["team_power"] - hero["power_level"],
            heroes: userTeam.heroes.filter(userHero => userHero.id !== hero.id)
        }
        setUserTeam(updatedUserTeam)
      })
    }

  return (
    <Router className="App">
    <NavBar user={user} setUser={setUser} setUserTeam={setUserTeam} />
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/myteam" element={<MyTeam user={user} handleTeamDelete={handleTeamDelete} userTeam={userTeam} setUserTeam={setUserTeam} />}/>
        <Route path="/allheroes" element={<AllHeroes heroArray={heroArray} handleTeamAdd={handleTeamAdd} />}/>
        <Route path="/allteams" element={<AllTeams />}/>
        <Route path="/myprofile" element={<Profile setUser={setUser} user={user} />}/>
      </Routes>
    </Router>
  );
}

export default App;