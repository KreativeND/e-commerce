// src/components/ProductCard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { FiShoppingCart, FiTrash } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id: product.id }));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base mb-2">{product.description.substring(0, 100)}...</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-900 font-bold">${product.price}</span>
          {isInCart ? (
            <button
              onClick={handleRemoveFromCart}
              className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none"
            >
              <FiTrash className="text-xl mr-2" /> Remove
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex items-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none"
            >
              <FiShoppingCart className="text-xl mr-2" /> Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
