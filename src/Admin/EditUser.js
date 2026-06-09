import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminNav from "./AdminNav";

const EditUser = () => {

const { id } = useParams();

const navigate = useNavigate();

const [user, setUser] = useState({
username: "",
email: "",
password: "",
role: "user",
address: "",
phone: ""
});

const [loading, setLoading] = useState(true);

const [error, setError] = useState("");

useEffect(() => {

fetchUser();


}, []);

const fetchUser = async () => {


try {

  const res = await axios.get(
    `http://localhost:5000/api/users/${id}`
  );

  setUser({
    username: res.data.username || "",
    email: res.data.email || "",
    password: res.data.password || "",
    role: res.data.role || "user",
    address: res.data.address || "",
    phone: res.data.phone || ""
  });

  setLoading(false);

} catch (err) {

  console.log(err);

  setError("Failed to Load User");

  setLoading(false);
}


};

const handleChange = (e) => {


setUser({
  ...user,
  [e.target.name]: e.target.value
});


};

const handleUpdate = async (e) => {


e.preventDefault();

try {

  const response = await axios.put(
    `http://localhost:5000/api/users/${id}`,
    user
  );

  alert("User Updated Successfully");

  if (response.data.role === "admin") {

    navigate("/admin");

  } else {

    navigate("/AdminUsers");

  }

} catch (err) {

  console.log(err);

  alert("Update Failed");
}

};

return (
<> 
<AdminNav />

  <div className="edit-product">

    <h2>Edit User</h2>

    {loading ? (
      <p>Loading...</p>
    ) : (
      <form onSubmit={handleUpdate}>

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <label>Role</label>

        <select
          name="role"
          value={user.role}
          onChange={handleChange}
        >
          <option value="user">
            User
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />

        <button type="submit">
          Update User
        </button>

      </form>
    )}

    {error && (
      <p style={{ color: "red" }}>
        {error}
      </p>
    )}

  </div>
</>


);
};

export default EditUser;
