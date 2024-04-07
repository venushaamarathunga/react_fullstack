import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            Full Stack Application
          </Link>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <link className="nav-link active">Home</link>
              </li>
              <li className="nav-item">
                <link className="nav-link">Features</link>
              </li>
              <li className="nav-item">
                <link className="nav-link"> Pricing</link>
              </li>
              <li className="nav-item">
                <link className="nav-link disabled">Disabled</link>
              </li>
            </ul>
          </div> */}
          <Link
            className="btn btn-outline-success"
            type="submit"
            to={"/adduser"}
          >
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
