import React from 'react'
import AdminNav from './AdminNav'
import './Add.css'

const AddSubcategory = () => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const subcategory = {
  //     id: document.getElementById("id").value,
  //     categoryname: document.getElementById("categoryname").value,
  //     subcategoryname: document.getElementById("subcategoryname").value,
  //   };

  //   let oldData = JSON.parse(localStorage.getItem("subcategory")) || [];

  //   oldData.push(subcategory);

  //   localStorage.setItem("subcategory", JSON.stringify(oldData));

  //   alert("Sub-Category Added");

  //   document.getElementById("myForm").reset();
  // };

  return (
    <>
      {/* Navbar */}
      <AdminNav />

      <div className="addproducts">

        <form >
          <h3>Add Sub Category</h3>

          <label>ID</label>
          <input type="text" name="id" /><br />

          <label>Category Name</label>
          <select name="categoryname" >
            <option value="">Select Category</option>
            <option value="kitchen">Kitchen Appliances</option>
            <option value="cool">Cooling & Heating Appliances</option>
            <option value="clean">Cleaning Appliances</option>
            <option value="laundry">Laundry Appliances</option>
            <option value="tv">TV & Entertaiments</option>
          </select><br />

          <label>Sub-Category Name</label>
          <select name="subcategoryname">
            <option value="">Select Sub-Category</option>
            <option value="fridge">Refrigerators</option>
            <option value="oven">Micro Oven</option>
            <option value="air">Air Coolers</option>
            <option value="vaccum">Vaccum Cleaners</option>
            <option value="dryers">Dryers</option>
            <option value="tv">Televisions</option>

          </select><br />

            <button type="submit">Add</button>
        </form>

      </div>
    </>
  )
}

export default AddSubcategory
