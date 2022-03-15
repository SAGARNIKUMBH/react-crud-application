import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ResizableTable from "./Resizer";
import Pagination from "./Pagination";

function Home(props) {
  const [users, setUsers] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    loadUsers();
    console.log("called");
  }, []);

  useEffect(() => {
    console.log("condition ", users);
    const filtered =
      props.dataSreach === ""
        ? users
        : users.filter((person) =>
            person.name.toLowerCase().includes(props.dataSreach.toLowerCase())
          );
    console.log("filtered", filtered);
    setUsers(filtered);
  }, [props.dataSreach]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

  console.log("users ", users);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  const indexOfLastPost = CurrentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container ">
      <div className="py-3">
        <header>
          <div className="container">
            <h1 className="headerTitle">
              Admin DashBoard
              <Link className="btn btn-primary " to="/users/add">
                <i className="fas fa-user-plus"></i>
              </Link>
            </h1>
          </div>
        </header>

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
            {currentPosts.map((user, index) => {
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
                      // className="btn btn-primary m-1"
                      to={`/users/${user.id}`}
                    >
                      <i className="fa fab-duotone fa-eye"></i>
                    </Link>
                    <Link
                      // className="btn btn-outline-primary m-1"
                      to={`/users/edit/${user.id}`}
                    >
                      <i className="fa fab-duotone fa-pen-to-square"></i>
                    </Link>
                    <Link
                      // className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      <i className="fa fab-duotone fa-trash-can"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* </ResizableTable> */}
        </table>
      </div>
      <Pagination
        userPerPage={usersPerPage}
        totalPosts={users.length}
        paginate={paginate}
        CurrentPage={CurrentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
