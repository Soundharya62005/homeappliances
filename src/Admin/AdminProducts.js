import React, { useState, useEffect } from "react";
import "./AdminProducts.css";
import AdminNav from "./AdminNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminProducts = () => {

  const navigate = useNavigate();

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  // GET PRODUCTS
  const getProducts = async () => {

    try {

      const products = await axios.get(
        "http://localhost:5000/api/products"
      );

      console.log(products.data);

      setGetData(products.data);

    } catch (err) {

      console.error(
        "Fetch Product Error:",
        err
      );
    }
  };

  // EDIT
  const handleEdit = (productId) => {
    navigate(`/edit/${productId}`);
  };

  // DELETE
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this Product?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      alert("Product Deleted");

      getProducts();

    } catch (err) {

      console.error(
        "Delete Product Error:",
        err
      );

      alert("Failed to Delete Product");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="products">

        <div className="product-header">

          <div className="totalProducts">
            <p>Total Products</p>

            <h2>{getData.length}</h2>
          </div>

          <div className="Addproducts">
            <Link to="/AddProducts">
              Add Products
            </Link>
          </div>

        </div>

        <div className="ProductsTable">

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Image</th>

                <th>Product Name</th>

                <th>Category</th>

                <th>SubCategory</th>

                <th>Price</th>

                <th>Quantity</th>

                <th>Description</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {getData.map((item, index) => (

                <tr key={item._id}>

                  <td>PRO{index + 1}</td>

                  {/* IMAGE */}
                  <td>

                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt={item.productname}
                      width="70"
                      height="100"
                    />

                  </td>

                  <td>{item.productname}</td>

                  <td>{item.category}</td>

                  <td>{item.subcategory}</td>

                  <td>₹{item.price}</td>

                  <td>{item.quantity}</td>

                  <td>{item.description}</td>

                  <td>

                    <button
                      onClick={() =>
                        handleEdit(item._id)
                      }
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(item._id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
};

export default AdminProducts;