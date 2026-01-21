import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  async function createUser() {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });
    if (response.ok) {
      navigate("/users", { replace: true });
    } else {
      console.log("Error creating user");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    createUser();
  }

  return (
    <div>
      <h1>Create User</h1>
      <FormGroup>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <input
          type="button"
          id="create"
          value="Create User"
          onClick={handleSubmit}
        />
      </FormGroup>
    </div>
  );
};
export default CreateUser;
