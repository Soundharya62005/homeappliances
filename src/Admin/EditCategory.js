import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminNav from "./AdminNav";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState({
    category: "",
    subcategory: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const fetchCategory = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/category/${id}`
      );

      setCategory(res.data);
    } catch (err) {
      setError("Failed to load category details");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => { 
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/category/${id}`,
        category
      );

      alert("Category Updated Successfully");
      navigate("/AdminCategories");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="edit-product">
        <h2>Edit Category</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleUpdate}>
            <input
              name="category"
              value={category.category}
              onChange={handleChange}
              placeholder="Category"
            />

            <input
              name="subcategory"
              value={category.subcategory}
              onChange={handleChange}
              placeholder="Subcategory"
            />

            <button type="submit">Update</button>
          </form>
        )}
      </div>
    </>
  );
};

export default EditCategory;