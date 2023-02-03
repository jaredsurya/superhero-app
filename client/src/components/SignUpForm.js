import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function signupSubmit(event) {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, first_name: firstName }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <h3>Please create an account:</h3>
      <form onSubmit={signupSubmit}>
        <label htmlFor="firstname">First name: </label>
        <input
          type="text"
          id="firstname"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
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

export default SignUpForm;
