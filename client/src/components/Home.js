import React, { useReducer } from "react";
//import Link from 'react-router-dom'

function Home({ user }) {
  return (
    <div>
      <h1>{`Welcome, ${user.first_name}`}!</h1>
      <h3>
        Your heroes are waiting for you! <br />
        Check them out on the following pages.
        <br />
        The navigation bar is shown at the top of every page.
        <br />
        <br />
        We must thank <em>superheroapi.com</em>, for without this resource this
        page would not have been possible.
      </h3>
    </div>
  );
}

export default Home;
