import React from 'react'


// const Productdetail = ({ array}) => {
//   return (
//     <div>
//       <h2>Product Name: {product.productname}</h2>
//       <h3>Price: {product.price}</h3>
//     </div>
//   )
// }

//array of object


    function Productdetail({data}) {
    
    return (
        <>
            <div>
                {data.map((a) => (
                    <div>
                        <li>User</li>
                        <li>{a.name}</li>
                        <li>{a.age}</li>
                        <li>{a.city}</li>


                    </div>
                ))}
            </div>
         </>   
    )
}

export default Productdetail