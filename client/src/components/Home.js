import React, { useReducer } from 'react'
//import Link from 'react-router-dom'

function Home({user}) {
  
  // CREATE SOME WELCOMING THING TO INITIATE THE USER INTO HIS HERO TRAINING
  return (
    <div>
      <h1>{`Welcome, ${user.first_name}`}!</h1>
      <h3>Your heroes are waiting for you! Check them out on the following pages. The navigation bar is shown at the top of every page. </h3>
    </div>
  )
}

export default Home
