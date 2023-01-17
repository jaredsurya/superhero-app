import React, { useReducer } from 'react'
//import Link from 'react-router-dom'

function Home({user}) {
  
  console.log(user)
  return (
    <div>
      <h1>{`Welcome, ${user.first_name}`}!</h1>
      <h3></h3>
    </div>
  )
}

export default Home
