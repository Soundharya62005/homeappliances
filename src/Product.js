import React from 'react'
import './App.css'
import Productdetail from './Productdetail'

import img1 from './img1.jpg'
import img2 from './img10.jpg'
import img3 from './img11.jpg'
import img4 from './img2.jpg'
import img5 from './img3.jpg'
import img6 from './img13.jpg'
import img7 from './img12.jpg'
import img8 from './img4.jpg'
import img9 from './img5.jpg'
import img10 from './img6.jpg'
import img11 from './img7.jpg'
import img12 from './img8.jpg'
import img13 from './img9.jpg'
import img14 from './img14.jpg'

const Product = () => {

    const productdata = {
        productname: "Washing Machine",
        price: 30000,
    }

    // array of object
    //  var array = [
    //     {
    //         name: "soundharya",
    //         age: 20,
    //         city: "ttl"
    //     },
    //     {
    //         name: "Gayu",
    //         age: 25,
    //         city: "rjpm"
    //     },
    //     {
    //         name: "kavya",
    //         age: 24,
    //         city: "svks"
    //     },
    //     {
    //         name: "kishore",
    //         age: 25,
    //         city: "srivi"
    //     }
    // ];

    
    return (
        <>

            <div className='cards'>
                <div className='cards_img'>
                    <img src={img1}></img>
                    <img src={img2}></img>
                    <img src={img3}></img>
                    <img src={img4}></img>
                    <img src={img5}></img>
                    <img src={img6}></img>
                    <img src={img7}></img>
                    <img src={img8}></img>
                    <img src={img9}></img>
                    <img src={img10}></img>
                    <img src={img11}></img>
                    <img src={img12}></img>
                    <img src={img13}></img>
                    <img src={img14}></img>
                </div>
            </div>

            <div>
                <Productdetail product={productdata}/>
            </div>
        </>
    )
}


export default Product