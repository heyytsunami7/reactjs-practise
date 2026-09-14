import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchProducts, STATUS } from "../features/productSlice"
import  ProductCard  from "./ProductCard"
function ProductList() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[]);

  if(status === STATUS.LOADING) return <p>Loading data..</p>
  if(status === STATUS.ERROR) return <p>Loading data..</p>

  return (
  <>
   {data.map(product=>(
    <ProductCard key={product.id} product={product} />
   ))}
  </>
)};

export default ProductList;
