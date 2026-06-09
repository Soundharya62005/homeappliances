import React from 'react'
import AdminNav from './AdminNav'
import './AdminIndex.css'
import './Add.css'

const AddBanner = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = document.getElementById("image").files[0];
    const reader = new FileReader();

    reader.onload = function () {

      const banner = {
        id: document.getElementById("id").value,
        bannername: document.getElementById("bannername").value,
        image: reader.result
      };

      const oldData = JSON.parse(localStorage.getItem("banners")) || [];

      oldData.push(banner);

      localStorage.setItem("banners", JSON.stringify(oldData));

      alert("Home Banner Added");

      document.getElementById("myForm").reset();
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="addproducts">
        <form id="myForm" onSubmit={handleSubmit}>
          <h3>Add Home Banner</h3>

          <label>ID</label>
          <input type="text" id="id" /><br />

          <label>Banner Name</label>
          <input type="text" id="bannername" /><br />

          <label>Banner Image</label>
          <input type="file" id="image" /><br />

          <button type="submit">Add</button>
        </form>
      </div>
    </>
  )
}

export default AddBanner;
