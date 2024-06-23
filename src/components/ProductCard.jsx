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
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-gray-800 text-xl font-medium mb-2">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{product.description.substring(0, 100)}...</p>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-gray-800 font-bold">${product.price}</span>
          <button
            onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
            className={`flex items-center mt-2 ${
              isInCart ? 'bg-red-500' : 'bg-blue-500'
            } text-white px-4 py-2 rounded hover:bg-opacity-75 focus:outline-none`}
          >
            {isInCart ? (
              <><FiTrash className="text-lg mr-2" /> Remove</>
            ) : (
              <><FiShoppingCart className="text-lg mr-2" /> Add to Cart</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
