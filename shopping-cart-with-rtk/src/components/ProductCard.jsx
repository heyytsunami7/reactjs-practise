import React from 'react'
import { useDispatch } from "react-redux"
import { addtoCart } from "../features/cartSlice"

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <>
    <img src={product.image} alt={product.title} />
    <p>{product.title}</p>
    <p>₹{product.price}</p>
    <button onClick={()=>dispatch(addtoCart(product))}>Add to cart</button>
    </>
  )
}

export default ProductCard