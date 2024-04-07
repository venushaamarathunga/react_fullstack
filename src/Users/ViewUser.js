import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  // let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        <div className="card text-center">
          <div className="card-header">
            <legend>View User</legend>
          </div>{" "}
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <div class="input-group-text">{user.name}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="userNameInput" className="form-label">
                User Name
              </label>
              <div className="input-group-text">{user.username}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email
              </label>
              <div className="input-group-text">{user.email}</div>
            </div>
            <div className="d-grid gap-2 d-md-block">
              <Link type="button" className="btn btn-primary" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}
