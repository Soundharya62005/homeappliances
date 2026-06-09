import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import { Link, useNavigate } from "react-router-dom";
import "./AdminProducts.css";

const AdminRole = () => {

  const navigate = useNavigate();

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  // GET ROLES
  const fetchRoles = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/role"
      );
      setRoles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE ROLE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete role?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/role/${id}`
      );

      alert("Role deleted");
      fetchRoles();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdminNav />

      <div className="products">

        <div className="product-header">

          <div className="totalProducts">
            <p>Total Roles</p>
            <h2>{roles.length}</h2>
          </div>

          <div className="Addproducts">
            <Link to="/AddRole">Add Role</Link>
          </div>

        </div>

        <div className="ProductsTable">

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Role Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {roles.map((item, index) => (
                <tr key={item._id}>

                  <td>ROLE{index + 1}</td>

                  <td>{item.name}</td>

                  <td>
                    <button onClick={() =>
                      navigate(`/editRole/${item._id}`)
                    }>
                      Edit
                    </button>

                    <button onClick={() =>
                      handleDelete(item._id)
                    }>
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

export default AdminRole;