/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function ProfileComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {id} = useParams();
  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (response.ok) {
      const data = await response.json();
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };
  //const [user, setUser] = useState(null);
  useEffect(() => {
    // This effect runs once when the component is mounted
    console.log("ProfileComponent mounted");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  return (
    <div>
      {/* {isLoggedIn === true && <Navigate to="/login" replace />} */}
      <h1>User Profile: {id}</h1>
      <p>This is the profile component.</p>
    </div>
  );
}

export default ProfileComponent;
