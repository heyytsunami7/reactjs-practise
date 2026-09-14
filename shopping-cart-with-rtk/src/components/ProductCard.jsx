import React from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../features/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="group flex flex-col justify-between bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
     
      <div className="w-full h-48 rounded-xl overflow-hidden bg-neutral-50 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      
      <div className="mt-4 flex flex-col gap-1">
        <p className="font-semibold text-neutral-800 line-clamp-2 text-sm leading-snug">
          {product.title}
        </p>
        <p className="text-lg font-bold text-neutral-950 mt-1">
          ₹{product.price}
        </p>
      </div>
      <button
        onClick={() => dispatch(addtoCart(product))}
        className="mt-4 w-full py-2.5 px-4 bg-neutral-950 hover:bg-neutral-800 active:scale-[0.98] text-white font-medium text-sm rounded-xl transition-all duration-150 focus:outline-none"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;