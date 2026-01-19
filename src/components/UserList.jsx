import { Table } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { FormGroup } from "react-bootstrap";
import { useState } from "react";

const UserList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const fetchUsers = () => {
    const name = searchParams.get("name");
    const age = searchParams.get("age");
    console.log(name, age);
    const response = fetch(
      "https://jsonplaceholder.typicode.com/users?name=" + name + "&age=" + age
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  const handleSearch = () => {
    setSearchParams({ name, age });
    fetchUsers();
  };

  const users = [
    {
      id: 1,
      name: "John",
      age: 20,
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Jane",
      age: 21,
      email: "Jane@gmail.com",
    },
    {
      id: 3,
      name: "Jack",
      age: 22,
      email: "Jack@gmail.com",
    },
  ];

  return (
    <div>
      <h1>Search Users</h1>
      <FormGroup>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={searchParams.name}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          value={searchParams.age}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </FormGroup>
      <h1>UserList</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/${user.id}`}>View</Link>
                <Link to={`/location?id=${user.id}`} state={{ user: "john" }}>
                  Location
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default UserList;
