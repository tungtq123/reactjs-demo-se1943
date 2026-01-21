/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function ProfileComponent() {
  const { id } = useParams();
  const [profile, setProfile] = useState({ name: "", age: "", email: "" });
  const url = import.meta.env.VITE_API_URL;
  async function fetchData() {
    const response = await fetch(
      `${url}/${id}`,
    );
    if (response.ok) {
      const data = await response.json();
      setProfile(data);
    } else {
      console.log("Error fetching profile data.");
    }
  }
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
      <p>Profile Name: {JSON.stringify(profile.name)}</p>
      <p>Profile Age: {JSON.stringify(profile.age)}</p>
      <p>Profile Email: {JSON.stringify(profile.email)}</p>
    </div>
  );
}

export default ProfileComponent;
