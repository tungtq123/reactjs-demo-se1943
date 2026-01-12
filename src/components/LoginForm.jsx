import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username", username);
    console.log("password", password);
    if (username === "admin" && password === "password") {
      alert("Login successful");
      navigate("/users", {replace: true});
    } else {
      alert("Login failed");
    }
  };

  useEffect(() => {
    console.log("LoginForm component mounted");
    console.log("username", username);
    console.log("password", password);
  }, [password, username]);

  return (
    <div className="login-form">
      <h1>Login</h1>
      <p>Enter your username and password to login.</p>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <form>
        <input
          type="text"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
