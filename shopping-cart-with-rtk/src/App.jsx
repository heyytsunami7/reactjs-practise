import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { useSelector } from 'react-redux'

function App() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Side: Product List */}
        <div className="flex-1 w-full">
          <ProductList />
        </div>

        {/* Right Side: Cart Section */}
        <div className="w-full lg:w-96 flex flex-col gap-3">
          {cart.map((item) => (
            <Cart key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App;