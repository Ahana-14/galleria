import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { items } = useCart();
  const location = useLocation();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

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
          <div className="absolute top-12 left-0 w-44 bg-gray-800 border border-gray-700 rounded shadow-lg z-20">
            <Link onClick={() => setMenuOpen(false)} to="/dashboard" className="block px-4 py-2 hover:bg-gray-700">User Dashboard</Link>
            <Link onClick={() => setMenuOpen(false)} to="/admin" className="block px-4 py-2 hover:bg-gray-700">Admin Dashboard</Link>
          </div>
        )}
        <h1 className="text-xl font-bold">Galleria</h1>
      </div>

      {/* Center: Search Bar - Only show if NOT on cart page */}
      {!isCartPage && (
        <div className="flex-1 flex justify-center mx-4">
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
        </div>
      )}

      {/* Right: Cart */}
      <div className="flex items-center gap-4">
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