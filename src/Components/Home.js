import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ResizableTable from "./Resizer";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
    console.log("Hello everyone");
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container ">
      <br />
      <Link className="btn btn-primary " to="/users/add">
        Add User
      </Link>
      <div className="py-3">
        <h1>Admin Page </h1>
        <br />
        <table className="table border shadow">
          {/* <ResizableTable resizable={true} resizeOptions={{}}> */}

          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No</th>
              <th scope="col">Company Name</th>
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
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <Link
                      className="btn btn-primary m-1"
                      to={`/users/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary m-1"
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* </ResizableTable> */}
        </table>
      </div>

      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          // onClick={this.handleprevClick}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          // onClick={this.handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default Home;
