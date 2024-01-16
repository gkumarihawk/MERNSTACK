//7. create Product component to accept ProductName and ProductPric
 Path: reactapp/assessment/Product.js
 import React from "react";

 let Product = (props)=>{
     return(
         <div>
             <h3>Product Name - {props.productName}</h3>
             <h3>Product Price - {props.productPrice}</h3>
         </div>
     )
 }

 export default Product;