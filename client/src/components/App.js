import React, { useEffect, useState } from "react";
import Login from "./Login";
import "../App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTeam from "./MyTeam";
import AllHeroes from "./AllHeroes";
import AllTeams from "./AllTeams";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState(null);
  const [heroArray, setHeroArray] = useState([]);
  const [userTeam, setUserTeam] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      } else {
        setUser(null);
        res.json().then((err) => alert(err.error));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/heros")
      .then((res) => res.json())
      .then((data) => setHeroArray(data));
  }, []);

  if (!user)
    return (
      <Router>
        <Login setUser={setUser} />
      </Router>
    );

  function handleTeamAdd(hero) {
    let nickname = prompt("Enter a nickname for your hero:", "");
    console.log(nickname);
    const userHero = {
      user_id: user.id,
      hero_id: hero.id,
      nickname: nickname,
    };
    fetch("/user_heros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userHero),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => setUserTeam(data));
        alert(
          `${nickname ? nickname : hero.name} added! Your team received +${
            hero.power_level
          } power points!`
        );
      } else {
        r.json().then((r) => alert(r.errors));
      }
    });
  }

  function handleTeamDelete(hero) {
    fetch(`/user_heros/${hero.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedUserTeam = {
          ...userTeam,
          team_power: userTeam["team_power"] - hero["power_level"],
          heroes: userTeam.heroes.filter((userHero) => userHero.id !== hero.id),
        };
        setUserTeam(updatedUserTeam);
      });
  }

  return (
    <Router className="App">
      <NavBar setUser={setUser} setUserTeam={setUserTeam} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/myteam"
          element={
            <MyTeam
              user={user}
              handleTeamDelete={handleTeamDelete}
              userTeam={userTeam}
              setUserTeam={setUserTeam}
            />
          }
        />
        <Route
          path="/allheroes"
          element={
            <AllHeroes heroArray={heroArray} handleTeamAdd={handleTeamAdd} />
          }
        />
        <Route path="/allteams" element={<AllTeams />} />
        <Route
          path="/myprofile"
          element={<Profile setUser={setUser} user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
