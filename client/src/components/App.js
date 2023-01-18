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
    fetch("/heros")
    .then((r) => {
      r.json()})
    .then(data => setHeroArray(data))
  }, [])

  
  if (!user) return <Router><Login setUser={setUser} /></Router>
  
  console.log("2", heroArray)



  return (
    <Router className="App">
    <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/myteam" element={<MyTeam/>}/>
        <Route path="/allheroes" element={<AllHeroes />}/>
        <Route path="/allteams" element={<AllTeams/>}/>
      </Routes>
    </Router>
  );
}

export default App;
