// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItemCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        E-Commerce
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="relative">
          <FiHome size={24} />
        </Link>
        <Link to="/cart" className="relative">
          <FiShoppingCart size={24} />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform translate-x-2 -translate-y-2">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
