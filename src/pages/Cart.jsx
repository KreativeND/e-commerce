// src/pages/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, removeFromCart, addToCart } from '../redux/cartSlice';
import { FiTrash, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity({ id: productId }));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(addToCart({ id: productId }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex border rounded-lg p-4 shadow-lg bg-white">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                <div className="ml-4 flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-gray-700">${item.price}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-300 focus:outline-none"
                      >
                        <FiMinus size={16} />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-300 focus:outline-none"
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <FiTrash size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
