import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
import "./AdminProducts.css";

const AdminUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // GET USERS
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  // EDIT
  const handleEdit = (id) => {
    navigate(`/editUser/${id}`);
  };

  // DELETE
  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete this user?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      alert("User deleted");
      fetchUsers();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="products">

        {/* HEADER */}
        <div className="product-header">
          <div className="totalProducts">
            <p>Total Users</p>
            <h2>{users.length}</h2>
          </div>

          <div className="Addproducts">
            <Link to="/AddUsers">Add Users</Link>
          </div>
        </div>

        {/* TABLE */}
        <div className="ProductsTable">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>

                  <td>
                    <button onClick={() => handleEdit(item._id)}>
                      Edit
                    </button>

                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </>
  );
};

export default AdminUsers;