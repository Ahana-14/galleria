import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { formatUSD } from "../utils/currency";
import { FaHeart } from "react-icons/fa";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="block group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-indigo-400 hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
              {imageError ? (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🖼️</div>
                    <div className="text-sm">Image not available</div>
                  </div>
                </div>
              ) : (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transform transition duration-500 ease-in-out group-hover:scale-105"
                  onError={handleImageError}
                />
              )}
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 text-xs rounded-full">
            New
          </span>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 left-3 p-2 rounded-full transition-all duration-200 z-20 ${
            isInWishlist(product.id)
              ? 'bg-red-500 text-white shadow-lg hover:bg-red-600'
              : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white shadow-md hover:shadow-lg'
          }`}
          aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <FaHeart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
        </button>
        
        {/* Overlay with actions */}
        <div 
          className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              // Add quick view functionality
            }}
            className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white transition-colors"
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.artist}</p>
        <div className="flex items-center justify-between">
                 <p className="text-xl font-bold">{formatUSD(product.price)}</p>
          {product.stock <= 5 && product.stock > 0 && (
            <span className="text-sm text-orange-600">
              Only {product.stock} left
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="mt-2 flex gap-2">
          {product.tags?.map(tag => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;