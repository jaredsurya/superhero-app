import React, { useEffect, useState } from "react";

// shows all of the teams of the various users in rows of 5 with the user-owner of each team
// displayed to the right. shows the sum total team power to the right of hero cards. 
function AllTeams() {
  const [allTeams, setAllTeams] = useState([])


  // WE MAY want to use User controller INDEX method instead of user_heros
  // herosByUser = User.all
  // render json: herosByUser, include: :heros

  // useEffect(() => {
  //   fetch("/user_heros").then((r) => {
  //     if (r.ok) {
  //       r.json().then((data) => {
  //         setAllTeams(data)
  //         sortTeamData()
  //       })
  //     }
  //     else {
  //       alert("ERROR IN ALL_TEAMS")
  //     }
  //   })
  // }, [])

  // function sortTeamData(){
  //   console.log("allTeams", allTeams)
  // }

  
  return (
    <div>
      <h3>These are the teams made by you and other website users.</h3>
    </div>
  )
}

export default AllTeams
