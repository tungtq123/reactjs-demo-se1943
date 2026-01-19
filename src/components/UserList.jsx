import { Table } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { FormGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);

  // dùng fetch để lấy data
  // useEffect(() => {
  //   fetch(
  //     "https://696dfaf7d7bacd2dd715365a.mockapi.io/api/v1/users"
  //   ).then(async (res) => {
  //     const data = await res.json();
  //     setUsers(data);
  //   }).catch((err) => {
  //     console.log(err);
  //     alert("Error when get data from server");
  //   })
  // }, []);

  // dùng axios để lấy data
  useEffect(() => {
    axios
      .get("https://696dfaf7d7bacd2dd715365a.mockapi.io/api/v1/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error when get data from server");
      });
  }, []);

  const fetchUsers = () => {
    const name = searchParams.get("name");
    const age = searchParams.get("age");
    console.log(name, age);
    const response = fetch(
      "https://696dfaf7d7bacd2dd715365a.mockapi.io/api/v1/users",
    );
    if (response.ok) {
      const data = response.json();
      setUsers(data);
    } else {
      alert("Error get data from server");
    }
  };

  const handleSearch = () => {
    setSearchParams({ name, age });
    fetchUsers();
  };

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
              <td>{user.avatar}</td>
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
