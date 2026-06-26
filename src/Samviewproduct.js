import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Samproduct.css";

function Samviewproduct({ productdata }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loginUser"));

  const wishlistKey = user
    ? `wishlist_${user._id}`
    : "wishlist_guest";

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem(wishlistKey)) || []
  );

  const toggleWishlist = (product) => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login first"
      });
      return;
    }

    const wishlistKey = `wishlist_${user._id}`;

    let updatedWishlist;

    const exists = wishlist.find(

      (item) => item._id === product._id
    );

    if (exists) {
      updatedWishlist = wishlist.filter(
        (item) => item._id !== product._id
      );

      Swal.fire({
        icon: "success",
        title: "Removed",
        text: "Product Removed From Wishlist",
        timer: 1200,
        showConfirmButton: false
      });
    } else {
      updatedWishlist = [...wishlist, product];

      Swal.fire({
        icon: "success",
        title: "Added",
        text: "Product Added To Wishlist",
        timer: 1200,
        showConfirmButton: false
      });
    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updatedWishlist)
    );
  };

  const handleAddToCart = async (product) => {
    try {
      const user = JSON.parse(localStorage.getItem("loginUser"));

      if (!user) {
        Swal.fire({
          icon: "warning",
          title: "Login Required",
          text: "Please login first"
        });
        return;
      }

      await axios.post("http://localhost:5000/api/cart", {
        userId: user._id,
        productId: product._id,
        productname: product.productname,
        price: product.price,
        image: product.image,
        quantity: 1
      });

      Swal.fire({
        icon: "success",
        title: "Added",
        text: "Product Added To Cart Successfully"
      });
    } catch (err) {
      console.log(err);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed To Add Cart"
      });
    }
  };

  const handleBuyNow = (product) => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login first"
      }).then(() => {
        navigate("/Signin", {
          state: {
            redirectTo: `/ProductDetails/${product._id}`
          }
        });
      });

      return;
    }

    navigate(`/ProductDetails/${product._id}`);
  };

  return (
    <div className="product">
      {productdata.length === 0 ? (
        <h3>No Products Found</h3>
      ) : (
        productdata.map((product) => (
          <div className="productdetail" key={product._id}>
            <i
              className={
                wishlist.some((item) => item._id === product._id)
                  ? "fa-solid fa-heart wishlist-icon active"
                  : "fa-regular fa-heart wishlist-icon"
              }
              onClick={() => toggleWishlist(product)}
            ></i>

            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.productname}
              width="180"
              height="200"
            />

            <h3>{product.productname}</h3>
            <p>{product.subcategory}</p>
            <h4>₹ {product.price}</h4>

            <button
              className="add-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>

            <button
              className="buy-now-btn"
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Samviewproduct;
