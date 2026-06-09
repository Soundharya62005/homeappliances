import React, { useState } from 'react'
import './AdminProducts.css'
import AdminNav from './AdminNav'
import { Link, useNavigate } from 'react-router-dom'

const AdminSubcategory = () => {

  const navigate = useNavigate();

  const [subcategory, setSubcategory] = useState(() => {
    return JSON.parse(localStorage.getItem("subcategory")) || [];
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (confirmDelete) {
      const updated = subcategory.filter((item) => item.id !== id);
      localStorage.setItem("subcategory", JSON.stringify(updated));
      setSubcategory(updated);
    }
  };

  const handleEdit = (subcategory) => {
    localStorage.setItem("editSubcategory", JSON.stringify(subcategory));
    navigate("/editSubcategory");
  };

  return (
    <>
      {/* Navbar */}
      <AdminNav />

      <div className='products'>
        <div className='product-header'>
          <div className='totalProducts'>
            <p>Total Subcategories</p>
            <h2>{subcategory.length}</h2>
          </div>

          <div className='Addproducts'>
            <Link to="/AddSubcategory">Add Sub-Categories</Link>
          </div>
        </div>

        {/* Table */}
        <div className='ProductsTable'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {subcategory.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.category}</td>
                  <td>{item.subcategory}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AdminSubcategory;