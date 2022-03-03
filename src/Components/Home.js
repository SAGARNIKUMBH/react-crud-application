import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
    console.log("Hello everyone");
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };
  return (
    <div className="container ">
      <br />
      <Link className="btn btn-primary " to="/users/add">
        Add User
      </Link>
      <div className="py-3">
        <h1>Home Page </h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-primary m-1">View</Link>
                    <Link className="btn btn-outline-primary m-1">Edit</Link>
                    <Link className="btn btn-danger">Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
