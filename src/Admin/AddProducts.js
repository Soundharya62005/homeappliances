import React, { useState } from "react";
import axios from "axios";
import AdminNav from './AdminNav'
import './Add.css'

function AddProducts() {

  const [productData, setProductData] = useState({
    productname: "",
    category: "",
    subcategory: "",
    quantity: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append(
        "productname",
        productData.productname
      );

      formData.append(
        "category",
        productData.category
      );

      formData.append(
        "subcategory",
        productData.subcategory
      );

      formData.append(
        "quantity",
        productData.quantity
      );

      formData.append(
        "price",
        productData.price
      );

      formData.append(
        "description",
        productData.description
      );

      formData.append("image", image);

      const res = await axios.post(
        "http://localhost:5000/api/products",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      alert("Product Added Successfully");

      setProductData({
        productname: "",
        category: "",
        subcategory: "",
        quantity: "",
        price: "",
        description: "",
      });

      setImage(null);

    } catch (err) {
      console.log(err);
      alert("Error Adding Product");
    }
  };

  return (
    <>
    {/* Navbar */}

    <AdminNav />

    <div className="addproducts">
      <form onSubmit={handleSubmit}>

      <h2>Add Product</h2>
      <label>Product Name</label>
        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          value={productData.productname}
          onChange={handleChange}
        />

        <br /><br />

        <label>Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={productData.category}
          onChange={handleChange}
        />

        <br /><br />
        <label>Sub-Category</label>
        <input
          type="text"
          name="subcategory"
          placeholder="Subcategory"
          value={productData.subcategory}
          onChange={handleChange}
        />

        <br /><br />

        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={productData.quantity}
          onChange={handleChange}
        />

        <br /><br />

        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
        />

        <br /><br />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description"
          value={productData.description}
          onChange={handleChange}
        />

        <br /><br />

        <label>Image</label>
        <input
          type="file"
          onChange={handleImageChange}
        />

        <br /><br />

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>
    </>
  );
}

export default AddProducts;