import React, {useEffect, useState} from 'react'

const Profile = ({user}) => {
  //console.log(user)
  const [updatedProfile, setUpdatedProfile] = useState({"email": null, "bio": null})
  //console.log(updatedProfile)
  function handleSubmit(){
    fetch("/users")
  }

  function updateUser(){

  }

  function deleteAcct(){

  }

  const form = <div>
  <h3>Would you like to add more info to your profile?</h3>
  <form>
    <label for="email">Enter an email:</label><br/>
    <input type="email" id="email" name="email" onChange={(e) => setUpdatedProfile({...updatedProfile, "email": e.target.value})}/><br/><br/>
    <label>Enter a short bio, 250 character max:</label><br/>
    <textarea type="text" id="bio" name="bio" maxlength="250" onChange={(e) => setUpdatedProfile({...updatedProfile, "bio": e.target.value})}/><br/><br/>
    <input onSubmit={handleSubmit} type="submit"/>
  </form>
</div>

const showData = <div>
  <h3>Here is your profile info</h3>
  <p>Email: {user.email}</p>
  <p>Bio: {user.bio}</p>
  <button onClick={updateUser}>Click to update data</button>
</div>

  return (
    <div>
      <h1>Hello, {user.first_name}.</h1>
      {user.email ? showData : form}<br/>
      <button onClick={deleteAcct}>CLICK TO DELETE ACCOUNT</button>
    </div>
  )
}

export default Profile
