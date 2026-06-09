import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(res.data);
  };

  return (
    <div>

      <h2>Products</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >

        {products.map((product) => (

          <div
            key={product._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "250px",
            }}
          >

            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.productname}
              width="200"
              height="200"
            />

            <h3>{product.productname}</h3>

            <p>{product.category}</p>

            <p>₹ {product.price}</p>

            <p>{product.description}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;