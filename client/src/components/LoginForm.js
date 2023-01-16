import React, {useState} from "react"

// toggles to show login when showLogin reads "true"
function LoginForm ({onLogin}) {
  
  function loginSubmit(){
    
  }
  
  return (
    <div>
      <h3>Please log in:</h3>
      <form onSubmit={loginSubmit}>
        <label for="username">Username: </label>
        <input type="text" id="username" value={username}/><br/>
        <label for="password">Password: </label>
        <input type="password" id="password"/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
)}

export default LoginForm