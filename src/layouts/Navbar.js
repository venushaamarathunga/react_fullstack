import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Full Stack Application</a>
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
        </div>
      </nav>
    </div>
  );
}
