import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProfileComponent({ isLoggedIn, setIsLoggedIn }) {
  // const [isLogggedIn, setIsLoggedIn] = useState(false);
  //const [user, setUser] = useState(null);
  useEffect(() => {
    // This effect runs once when the component is mounted
    console.log("ProfileComponent mounted");
  }, []);
  return (
    <div>
      {isLoggedIn === false && Navigate("/login", { replace: true })}
      <h1>User Profile</h1>
      <p>This is the profile component.</p>
    </div>
  );
}

export default ProfileComponent;
