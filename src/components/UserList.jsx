import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserList = () => {
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default UserList;
