import React, { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import "./Add.css";

const AddRole = () => {

  const [roleData, setRoleData] = useState({
    name: ""
  });

  const handleChange = (e) => {
    setRoleData({
      ...roleData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/role",
        roleData
      );

      alert("Role added successfully");

      setRoleData({ name: "" });

    } catch (err) {
      console.log(err);
      alert("Failed to add role");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="addproducts">

        <form onSubmit={handleSubmit}>

          <h2>Add Role</h2>

          <label>Role Name</label>

          <input
            type="text"
            name="name"
            value={roleData.name}
            onChange={handleChange}
            placeholder="Enter role"
          />

          <br /><br />

          <button type="submit">
            Add Role
          </button>

        </form>

      </div>
    </>
  );
};

export default AddRole;