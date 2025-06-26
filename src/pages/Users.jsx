import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const limit = 5;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((err) => {
        console.error("Foydalanuvchilarni olishda xatolik:", err);
      });
  }, []);

  useEffect(() => {
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedUsers = allUsers.slice(start, end);
    setUsers(paginatedUsers);
  }, [page, allUsers]);

  const totalPages = Math.ceil(allUsers.length / limit);

  const nextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const moveSingleUser = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Foydalanuvchilar ro'yxati</h3>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company</th>
            <th>Address</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                Yuklanmoqda...
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} onClick={() => moveSingleUser(user.id)}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.company?.name}</td>
                <td>
                  {user.address?.city}, {user.address?.street},{" "}
                  {user.address?.suite}
                </td>
                {/* <td>
                  <Link to={`/users/${user.id}`} className="btn btn-info">
                    visit
                  </Link>
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* buttons */}
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-secondary"
          onClick={prevPage}
          disabled={page === 1}
        >
          prev
        </button>
        <span className="align-self-center">
          Sahifa: {page} / {totalPages || 1}
        </span>
        <button
          className="btn btn-primary"
          onClick={nextPage}
          disabled={page === totalPages}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Users;
