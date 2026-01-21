import { Table } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FormGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
// import axios from "axios";

const UserList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentUsers, setCurrentUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [users, setUsers] = useState([]);
  let first = true;

  const navigate = useNavigate();
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
  // useEffect(() => {
  //   axios
  //     .get("https://696dfaf7d7bacd2dd715365a.mockapi.io/api/v1/users")
  //     .then((res) => {
  //       setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Error when get data from server");
  //     });
  // }, []);

  async function fetchUsers(first) {
    const name = searchParams.get("name");
    const age = searchParams.get("age");
    const url = import.meta.env.VITE_API_URL;
    console.log(name, age);
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCurrentUsers(data);
        if (first === true) {
          setCurrentUsers(data);
          console.log("first: " + first);
        } else {
          console.log("first: " + first);
          setCurrentUsers(
            currentUsers &&
              currentUsers.filter((user) => {
                if (userName === "" && userAge === "") return true;
                if (userName === "") return user.age.includes(userAge);
                if (userAge === "") return user.name.includes(userName);
                return (
                  user.name.includes(userName) && user.age.includes(userAge)
                );
              }),
          );
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
        setUsers(null);
        alert("Error get data from server");
      })
      .finally(() => {
        console.log("Finally");
      });
  }

  useEffect(() => {
    fetchUsers(first);
  }, []);

  const handleSearch = () => {
    setSearchParams({ userName, userAge });
    fetchUsers(false);
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
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Name"
          value={searchParams.name}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={(e) => setUserAge(e.target.value)}
          placeholder="Age"
          value={searchParams.age}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>

        <button
          type="submit"
          onClick={() => navigate("/adduser", { replace: true })}
        >
          Add User
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
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.avatar}</td>
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
