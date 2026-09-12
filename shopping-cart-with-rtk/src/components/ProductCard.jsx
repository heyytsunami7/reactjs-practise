import React from 'react'

function ProductCard() {
    const product = [{title: "hello" , price: "55",},] 
  return (
    <>
    <div className='border border-black-600'>
    <img src={product.title} alt={product.title} />
    <p>{product[0].title}</p>
    <p>{product[0].price}</p>
    <button className='bg-blue-500 text-white font-bold py-2 px-4'>Add to Cart</button>
    </div>
    </>
  )
}

export default ProductCard