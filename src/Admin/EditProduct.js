import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";
import AdminNav from "./AdminNav";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productname: "",
    category: "",
    subcategory: "",
    price: "",
    quantity: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH PRODUCT =================
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );

      setProduct(res.data);

      if (res.data.image) {
        setPreview(`http://localhost:5000/uploads/${res.data.image}`);
      }

    } catch (err) {
      console.log(err);
      setError("Failed to load product details");
    } finally {
      setLoading(false);
    }
  };

  // ================= INPUT CHANGE =================
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // ================= IMAGE CHANGE =================
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // ================= UPDATE PRODUCT =================
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("productname", product.productname);
      formData.append("category", product.category);
      formData.append("subcategory", product.subcategory);
      formData.append("price", product.price);
      formData.append("quantity", product.quantity);
      formData.append("description", product.description);

      if (image) {
        formData.append("image", image);
      }

      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product Updated Successfully");
      navigate("/AdminProducts");

    } catch (err) {
      console.log(err);
      alert("Failed to update product");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="edit-product">

        <h2>Edit Product</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleUpdate}>

            {/* PRODUCT NAME */}
            <label>Product Name</label>
            <input
              type="text"
              name="productname"
              value={product.productname}
              onChange={handleChange}
              placeholder="Product Name"
              required
            />

            {/* CATEGORY */}
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              placeholder="Category"
              required
            />

            {/* SUBCATEGORY */}
            <label>Sub-Category</label>
            <input
              type="text"
              name="subcategory"
              value={product.subcategory}
              onChange={handleChange}
              placeholder="Sub Category"
              required
            />

            {/* PRICE */}
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />

            {/* QUANTITY */}
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              required
            />

            {/* DESCRIPTION */}
            <label>Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Description"
              required
            />

            {/* IMAGE */}
            <label>Image</label>
            <input type="file" onChange={handleImageChange} />

            {/* PREVIEW */}
            {preview && (
              <div style={{ margin: "10px 0" }}>
                <img
                  src={preview}
                  alt="preview"
                  width="120"
                  height="120"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}

            <button type="submit">Update Product</button>

          </form>
        )}
      </div>
    </>
  );
};

export default EditProduct;