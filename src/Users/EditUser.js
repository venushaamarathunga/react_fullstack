import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEditUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadEditUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <div className="card text-center">
              <div className="card-header">
                <legend>Update User</legend>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="nameInput"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      onInputChange(e);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userNameInput" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userNameInput"
                    className="form-control"
                    placeholder="User Name"
                    name="username"
                    value={username}
                    onChange={(e) => {
                      onInputChange(e);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    id="emailInput"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      onInputChange(e);
                    }}
                  />
                </div>
                <div className="d-grid gap-2 d-md-block">
                  <button type="submit" className="btn btn-primary me-3">
                    Submit
                  </button>
                  <Link type="button" className="btn btn-outline-danger" to="/">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
