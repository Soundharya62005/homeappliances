import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import logo from './logo1.jpg';
import "./Samproduct.css";
// import { jsx } from "react/jsx-runtime";

function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loginUser"));
    console.log("Testing")

    if (!user) {
      return;
    }

    const data =
      JSON.parse(
        localStorage.getItem(`wishlist_${user._id}`)
      ) || [];
 
    setWishlistProducts(data); 
  }, []);

  const removeFromWishlist = (id) => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

    if (!user) return;

    const updatedWishlist = wishlistProducts.filter(
      (item) => item._id !== id
      
    );

    setWishlistProducts(updatedWishlist);

    localStorage.setItem(
      `wishlist_${user._id}`,
      JSON.stringify(updatedWishlist)
    );

    Swal.fire({
      icon: "success",
      title: "Removed",
      text: "Product Removed From Wishlist",
      timer: 1200,
      showConfirmButton: false
    });
  };

  return (
    <>
    <div className="top-header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>KS HOME APPLIANCES</h2>
        </div>
      </div>

    <div className="product">
      <h1>
        My Wishlist
      </h1>

      {wishlistProducts.length === 0 ? (
        <h3>No Wishlist Products Found</h3>
       
      ) : (
        wishlistProducts.map((product) => (
          <div className="productdetail" key={product._id}>
            <i
              className="fa-solid fa-heart wishlist-icon active"
              onClick={() => removeFromWishlist(product._id)}
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
          </div>
        ))
      )}
    </div>

    </>
  );
}

export default Wishlist;