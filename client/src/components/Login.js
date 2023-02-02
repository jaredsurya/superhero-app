import { useState } from "react";
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm";

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
      <div>
      
      <div className="welcome">
        Welcome, please sign in and enjoy!
      </div>
    <div className="entry-page" id="centered">
      <h2>Your superhero team awaits!</h2>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <br />
          <br />

          <p>
            Don't have an account? &nbsp;
            <button className="profile" color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up!
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <br />
          <br />
          <p>
            Already have an account? &nbsp;
            <button className="profile" color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
    </div>
  );
}

export default Login;