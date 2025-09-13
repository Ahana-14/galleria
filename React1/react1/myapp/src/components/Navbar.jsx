import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaSearch, FaHeart } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();
  const location = useLocation();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const wishlistCount = wishlistItems.length;

  // Check if we're on the cart page
  const isCartPage = location.pathname === '/cart';

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center">
      {/* Left: Dashboard hamburger */}
      <div className="flex items-center gap-3 relative">
        <button
          type="button"
          aria-label="Open dashboard menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="p-2 rounded hover:bg-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75z"/>
          </svg>
        </button>
        {menuOpen && (
          <div className="absolute top-12 left-0 w-56 bg-gray-800 border border-gray-700 rounded shadow-lg z-20">
            {/* Authentication Links */}
            <div className="border-b border-gray-700">
              <Link onClick={() => setMenuOpen(false)} to="/login" className="block px-4 py-2 hover:bg-gray-700 text-blue-400">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login
              </Link>
              <Link onClick={() => setMenuOpen(false)} to="/register" className="block px-4 py-2 hover:bg-gray-700 text-green-400">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Sign Up
              </Link>
            </div>
            
            {/* Profile Section */}
            <div className="border-b border-gray-700">
              <Link onClick={() => setMenuOpen(false)} to="/profile" className="block px-4 py-2 hover:bg-gray-700 text-purple-400">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </Link>
            </div>
            
            {/* Dashboard Links */}
            <div className="pt-1">
              <Link onClick={() => setMenuOpen(false)} to="/dashboard" className="block px-4 py-2 hover:bg-gray-700">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
                User Dashboard
              </Link>
              <Link onClick={() => setMenuOpen(false)} to="/seller-dashboard" className="block px-4 py-2 hover:bg-gray-700 text-orange-400">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Seller Dashboard
              </Link>
              <Link onClick={() => setMenuOpen(false)} to="/admin" className="block px-4 py-2 hover:bg-gray-700 text-red-400">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Admin Dashboard
              </Link>
            </div>
          </div>
        )}
        <h1 className="text-xl font-bold">Galleria</h1>
      </div>

      {/* Center: Navigation Links and Search */}
      <div className="flex-1 flex justify-center mx-4">
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
            <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
          </div>
          
          {/* Search Bar - Only show if NOT on cart page */}
          {!isCartPage && (
            <div className="relative w-full max-w-md">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search artworks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    searchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Right: Wishlist and Cart */}
      <div className="flex items-center gap-4">
        {/* Wishlist */}
        <Link to="/wishlist" aria-label="Wishlist" className="relative p-2 rounded hover:bg-gray-800">
          <FaHeart className="w-6 h-6" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-[10px] leading-none bg-red-600 text-white rounded-full px-1.5 py-0.5">
              {wishlistCount}
            </span>
          )}
        </Link>
        
        {/* Cart */}
        <Link to="/cart" aria-label="Cart" className="relative p-2 rounded hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M2.25 3a.75.75 0 0 1 .75-.75h1.382a1.5 1.5 0 0 1 1.414 1.05l.318.955h12.436a.75.75 0 0 1 .73.935l-1.5 6a.75.75 0 0 1-.73.565H7.09l-.3.9a1.5 1.5 0 0 1-1.414 1.05H3a.75.75 0 0 1 0-1.5h2.376l2.25-6.75H4.886l-.45-1.35H3a.75.75 0 0 1-.75-.75z"/>
            <path d="M8.25 19.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
          </svg>
          {count > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-[10px] leading-none bg-red-600 text-white rounded-full px-1.5 py-0.5">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;