import React, { useEffect, useState } from "react";
import Login from "./Login"
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />


// CHECK OUT LIZZIES APP
// GET ROUTES AND LINK ELEMENTS RIGHT


  return (
    <Router className="App">
    <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
