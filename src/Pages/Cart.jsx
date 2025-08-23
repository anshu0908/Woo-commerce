import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

const Cart = () => {
    const [cartItems, setCartItems] = useState([ { id: 1, name: "Primrose Longdress", size: "S", color: "White", price: 143, qty: 1, image: "https://bluorng.com/cdn/shop/files/IMG_7760.jpg?v=1726314137&width=1946", }, { id: 2, name: "Zinnia Blue One Set", size: "XL", color: "Blue", price: 127, qty: 1, image: "https://inspiredtees.in/cdn/shop/files/b09.jpg?v=1729235636&width=533", }, ]);

const handleQty = (id, type) => { setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) } : item ) ); };

const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0); const discount = 12; const total = subtotal - discount;
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:px-10 px-4 mb-5'>
          {/* Cart Items */}
  <div className="space-y-4 md:col-span-2">
    {cartItems.map((item) => (
      <div
        key={item.id}
        className="flex items-center gap-4 p-4 rounded-2xl shadow-md bg-white"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-28 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="">{item.name}</h3>
          <p className="text-sm text-gray-500">
            {item.size}, {item.color}
          </p>
          <p className="text-green-600 font-semibold mt-1">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQty(item.id, "dec")}
            className="p-1 border rounded-full"
          >
            <Minus size={16} />
          </button>
          <span className="px-2">{item.qty}</span>
          <button
            onClick={() => handleQty(item.id, "inc")}
            className="p-1 border rounded-full bg-green-100 text-green-600"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    ))}
  </div>

<div>
      {/* Promo Code */}
  <div className="mt-6 flex items-center border rounded-full overflow-hidden">
    <input
      type="text"
      placeholder="Enter your promo code"
      className="flex-1 px-4 py-2 outline-none"
    />
    <button className="px-4 py-2 bg-black text-white">→</button>
  </div>

  {/* Price Summary */}
  <div className="mt-6 space-y-2 text-right">
    <div className="flex justify-between">
      <span className="text-gray-500">Subtotal</span>
      <span>₹{subtotal.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-500">Discount</span>
      <span>- ₹{discount}</span>
    </div>
    <div className="flex justify-between font-semibold text-lg text-green-600">
      <span>Total Amount</span>
      <span>₹{total.toFixed(2)}</span>
    </div>
  </div>

  {/* Checkout Button */}
  <button className="w-full mt-6 bg-black text-white py-3 rounded-full text-lg font-semibold">
    Checkout
  </button>
</div>
</div>
  )
}

export default Cart