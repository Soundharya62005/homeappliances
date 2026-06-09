import React, { useState, useEffect } from "react";
import "./AdminProducts.css";
import AdminNav from "./AdminNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminCategories = () => {

  const navigate = useNavigate();

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  // GET CATEGORY
  const getCategory = async () => {

    try {

      const category = await axios.get(
        "http://localhost:5000/api/category"
      );

      console.log(category.data);

      setGetData(category.data);

    } catch (err) {

      console.error(
        "Fetch Category Error:",
        err
      );
    }
  };

  // EDIT
  const handleEdit = (categoryId) => {

    navigate(
      `/editCategory/${categoryId}`
    );
  };

  // DELETE
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this Category?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/category/${id}`
      );

      alert("Category Deleted");

      getCategory();

    } catch (err) {

      console.error(
        "Delete Category Error:",
        err
      );

      alert("Failed to Delete Category");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="products">

        <div className="product-header">

          <div className="totalProducts">

            <p>Total Categories</p>

            <h2>{getData.length}</h2>

          </div>

          <div className="Addproducts">

            <Link to="/AddCategories">
              Add Categories
            </Link>

          </div>

        </div>

        {/* TABLE */}

        <div className="ProductsTable">

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Category Name</th>

                <th>Sub Category</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {getData.map((item, index) => (

                <tr key={item._id}>

                  <td>
                    CAT{index + 1}
                  </td>

                  <td>
                    {item.category}
                  </td>

                  <td>
                    {item.subcategory}
                  </td>

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

export default AdminCategories;