import AdminNav from './AdminNav'
import './Add.css'

import React, { useState } from "react";
import axios from "axios";


const AddCategories = () => {

  const [categoryData, setCategoryData] = useState({

    category: "",
    subcategory: ""
  })

  const handleChange = (e) => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/category", categoryData);
      alert("Category Added Successfully")
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to Add Category")
    }
  };


  return (
    <>
      {/* Navbar */}
      <AdminNav />

      <div className="addproducts">
        <form onSubmit={handleSubmit}>
          <h2>Add Category</h2>

          <label>Category</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={categoryData.category}
            onChange={handleChange}
          />

          <br /><br />
          <label>Sub-Category</label>
          <input
            type="text"
            name="subcategory"
            placeholder="Subcategory"
            value={categoryData.subcategory}
            onChange={handleChange}
          />

       
        <button type="submit">Add</button>
      </form>
    </div >
    </>
  )
}

export default AddCategories;