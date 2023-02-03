import React, { useReducer } from "react";
//import Link from 'react-router-dom'

function Home({ user }) {
  return (
    <div>
      <h1>{`Welcome, ${user.first_name}`}!</h1>
      <h3>
        The heroes are waiting for you! <br />
        Check them out and make your team on the following pages.
        <br />
        Navigate from page to page using the orange bar above.
        <br />
        <br />
        We must thank <em><a className="a" href="https://superheroapi.com/">superheroapi.com</a></em> and <em><a className="a" href="https://flatironschool.com/">Flatiron School</a></em>, for without <br/>these resources this
        page would not have been possible.
      </h3>
    </div>
  );
}

export default Home;
