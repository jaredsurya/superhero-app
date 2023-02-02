import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function loginSubmit(e) {
    e.preventDefault();
    const user = { username: username, password: password };
    setErrors(null);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
        navigate("/");
      } else {
        r.json().then((err) => {
          setErrors(err.errors)
        });
      }
    });
  }
  const displayErrors = () =>
    errors.map((err) => {
      return (
        <p className="errors" key={err}>
          {err}
        </p>
      );
    });

  return (
    <div>
      <h3>Please log in:</h3>
      <form onSubmit={loginSubmit}>
        <label for="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label for="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
        {errors ? displayErrors() : null}
      </form>
    </div>
  );
}

export default LoginForm;
