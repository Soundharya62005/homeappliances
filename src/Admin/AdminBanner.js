import React, { useState } from 'react'
import './AdminIndex.css'
import './AdminProducts.css'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'

const AdminBanner = () => {

  const [banners, setBanners] = useState(() =>{
    return JSON.parse(localStorage.getItem("banners")) || [];
  });
  return (
    <>
        {/* Navbar */}
      <AdminNav />

      <div className='products'>
        <div className='product-header'>
          <div className='totalProducts'>
            <p>Total Banner</p>
            <h2>{banners.length}</h2>
          </div>

          <div className='Addproducts'>
            <Link to="/AddBanner">Add Home Banner</Link>
          </div>
        </div>

        {/* Table */}
        <div className='ProductsTable'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Banner Name</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {banners.map((item, index) =>(
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.bannername}</td>
                  <td><img src={item.image} alt = "Banner" width="50" /></td>
                  <td>Edit / Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>        
        </div>
    </>
  )
}

export default AdminBanner
