import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminNav from "./AdminNav";

const EditRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [role, setRole] = useState({
    name: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRole();
  }, [id]);

  const fetchRole = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/role/${id}`
      );

      setRole(res.data);
    } catch (err) {
      setError("Failed to load role details");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setRole({
      ...role,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/role/${id}`,
        role
      );

      alert("Role Updated Successfully");
      navigate("/AdminRole");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="edit-product">
        <h2>Edit Role</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleUpdate}>
            <input
              name="name"
              value={role.name}
              onChange={handleChange}
              placeholder="Role Name"
            />

            <button type="submit">Update</button>
          </form>
        )}
      </div>
    </>
  );
};

export default EditRole;