import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Home from "./Home";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [product]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOrder = () => {
    navigate("/CheckoutPage", {
      state: {
        product,
        quantity,
      },
    });
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Home />

      <div className="product-details-container">
        <div className="product-card">
          <div className="product-image-section">
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.productname}
              className="product-image"
            />
          </div>

          <div className="product-info-section">

            <h2 className="product-name">{product.productname}</h2>

            <p className="product-description">
              {product.description}
            </p>                                                                                 

            {/* <p className="product-subcategory">
              {product.subcategory}
            </p> */}

            <h3 className="product-price">
              ₹ {product.price}
            </h3>

            <div className="quantity-section">
              <label>
                <strong>Quantity:</strong>
              </label>

              <select
                className="quantity-select"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>

            <h3 className="total-price">
              Total: ₹ {product.price * quantity}
            </h3>

            <button
              className="order-btn"
              onClick={handleOrder}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;