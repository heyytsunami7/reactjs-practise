import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart, decreaseqnt, increaseqnt } from "../features/cartSlice";

function Cart({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white border border-neutral-200 rounded-2xl shadow-sm">
      <p className="font-semibold text-neutral-800 text-sm sm:text-base sm:max-w-md line-clamp-2">
        {item.title}
      </p>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <div className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 rounded-xl px-2 py-1">
          <button
            onClick={() => dispatch(decreaseqnt(item.id))}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-neutral-600 hover:bg-white hover:text-neutral-900 active:scale-95 transition-all focus:outline-none"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <p className="text-xs font-semibold text-neutral-700 select-none">
            Quantity:{" "}
            <span className="text-neutral-950 font-bold">{item.quantity}</span>
          </p>

          <button
            onClick={() => dispatch(increaseqnt(item.id))}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-neutral-600 hover:bg-white hover:text-neutral-900 active:scale-95 transition-all focus:outline-none"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(deleteCart(item.id))}
          className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 hover:bg-rose-50 rounded-lg active:scale-95 transition-all focus:outline-none"
        >
          del
        </button>
      </div>
    </div>
  );
}

export default Cart;
