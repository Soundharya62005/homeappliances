import React from 'react'
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';
import './Add.css'

const EditSubcategory = () => {
  
    const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("editSubcategory")) || {};

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedsubcategory = {
      id: document.getElementById("id").value,
      category: document.getElementById("category").value,
      subcategory: document.getElementById("subcategory").value,
    };

    let subcategory = JSON.parse(localStorage.getItem("subcategory")) || [];

    const updatedList = subcategory.map((item) =>
      item.id === updatedsubcategory.id ? updatedsubcategory : item
    );

    localStorage.setItem("subcategory", JSON.stringify(updatedList));

    alert("Sub-Category Updated Successfully");

    navigate("/adminSubcategory");
  };

  return (
    <>

     {/* Navbar */}
      <AdminNav />
    <div className='addproducts'>

      <form onSubmit={handleUpdate}>
        <h3>Edit Sub-Category</h3>

        <label>ID</label>
        <input type="text" id="id" defaultValue={data.id} /><br />

        <label>Category</label>
        <select id="category" defaultValue={data.category}>
          <option value="">Select Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="cool">Cooling & Heating Appliances</option>
          <option value="clean">Cleaning Appliances</option>
          <option value="laundry">Laundry Appliances</option>
          <option value="tv">TV & Entertaiments</option>
        </select><br />

        <label>SubCategory</label>
        <select id="subcategory" defaultValue={data.subcategory}>
          <option value="">Select SubCategory</option>
          <option value="fridge">Refrigerators</option>
          <option value="ac">AC</option>
          <option value="vaccum">Vaccum Cleaners</option>
          <option value="dryers">Dryers</option>
          <option value="tv">Televisions</option>
        </select><br />

        <button type="submit">Update</button>
      </form>
    </div>
    </>
  );
};

export default EditSubcategory
