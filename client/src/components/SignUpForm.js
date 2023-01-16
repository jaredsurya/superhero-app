import React, { useState } from "react";

// toggles to show signup when showLogin reads "false"

function SignUpForm({onLogin}) {
  return (
    <div>
      <h3>Please create an account:</h3>
      <form>
        <label for="firstname">First name: </label>
        <input type="text" id="firstname"/><br/>
        <label for="lastname">Last name: </label>
        <input type="text" id="username"/><br/>
        <label for="username">Username: </label>
        <input type="text" id="username"/><br/>
        <label for="password">Password: </label>
        <input type="password" id="password"/><br/>
        <label for="cpassword">Confirm password: </label>
        <input type="password" id="cpassword"/><br/>
        <input type="submit" value="Submit" id="submit"/>
      </form>
    </div>
)}

export default SignUpForm