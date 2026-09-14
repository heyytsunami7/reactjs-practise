import React from 'react'
import {useDispatch} from "react-redux"
import {deleteCart,decreaseqnt ,increaseqnt} from "../features/cartSlice"

function Cart( {item }) {
    const dispatch = useDispatch();
  return (
    <>
      <p>{item.title}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={()=>dispatch(increaseqnt(item.id))}>-</button>
      <button onClick={()=>dispatch(decreaseqnt(item.id))}>+</button>
      <button onClick={()=>dispatch(deleteCart(item.id))}>del</button>
    </>
  )
}

export default Cart