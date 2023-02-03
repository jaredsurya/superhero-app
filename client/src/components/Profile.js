import React, { useState } from "react";

const Profile = ({ user, setUser }) => {
  const [toggle, setToggle] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((data) => {
        setToggle(true);
        setUser(data);
      });
  }

  function updateUser() {
    setToggle(false);
  }

  function deleteAcct() {
    if (window.confirm("ARE YOU SURE?")) {
      fetch(`/users/${user.id}`, { method: "DELETE" });
      setUser(null);
    }
  }

  const form = (
    <div>
      <h3>Would you like to add more info to your profile?</h3>
      <form onSubmit={handleSubmit}>
        <label for="email">Enter an email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <br />
        <label>Enter a short bio, 250 character max:</label>
        <br />
        <textarea
          type="text"
          id="bio"
          name="bio"
          maxLength="250"
          value={user.bio}
          onChange={(e) => setUser({ ...user, bio: e.target.value })}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );

  const showData = (
    <div>
      <h3>Here is your profile info:</h3>
      <p>
        <strong>Email:</strong>{" "}
        {user.email ? user.email : "You have not entered an email yet."}
      </p>
      <p>
        <strong>Bio:</strong>{" "}
        {user.bio ? user.bio : "You have not entered a bio yet."}
      </p>
      <button className="profile" onClick={updateUser}>
        Click to update data
      </button>
    </div>
  );

  return (
    <div id="centered">
      <h1>Hello, {user.first_name}.</h1>
      {toggle ? showData : form}
      <br />
      <button className="profile" id="delete-btn" onClick={deleteAcct}>
        CLICK TO DELETE ACCOUNT
      </button>
    </div>
  );
};

export default Profile;
