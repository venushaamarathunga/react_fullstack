import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      // Handle network errors
      console.error("Error loading users:", error.message);
      // You can also set state or display an error message to the user
    }
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((usr, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>
                  <div
                    className="btn-group me-2"
                    role="group"
                    aria-label="First group"
                  >
                    <Link
                      type="button"
                      className="btn btn-success"
                      to={`/viewuser/${usr.id}`}
                    >
                      View
                    </Link>
                  </div>
                  <div
                    className="btn-group me-2"
                    role="group"
                    aria-label="First group"
                  >
                    <Link
                      type="button"
                      className="btn btn-outline-info"
                      to={`/edituser/${usr.id}`}
                    >
                      Edit
                    </Link>
                  </div>
                  <div
                    className="btn-group me-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(usr.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
