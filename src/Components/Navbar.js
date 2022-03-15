import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
function Navbar({ getSreach }) {
  const [search, setNewSearch] = useState("");
  const [userData, setUserData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const users = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUserData(result.data);
  };
  console.log("searchData", search);
  const handleSearchChange = (e) => {
    getSreach(e.target.value);
    setNewSearch(e.target.value);
  };

  useEffect(() => {
    users();
    const filtered = !search
      ? userData
      : userData.filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        );
    setFiltered(filtered);
  }, [search]);

  console.log(filtered);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Crud-Apps
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchChange}
                value={search}
              />
            </div>
            <br />
          </div>
        </div>
        <div className="mr-3 align-self-center">
          <img
            src="https://img.icons8.com/fluency/344/guest-male.png"
            style={{
              height: "41px",
              width: "41px",
              marginRight: "15px",
              id: "imgClickAndChange",
              onclick: { LoginForm },
            }}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
