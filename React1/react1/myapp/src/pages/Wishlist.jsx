import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

function Wishlist() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    addItem(product);
  };

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <FaHeart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h1>
              <p className="text-gray-600 mb-8">
                Start adding your favorite artworks to your wishlist!
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Browse Artworks
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your Wishlist ({items.length})
            </h1>
            <p className="text-gray-600">
              Save your favorite artworks for later
            </p>
          </div>
          
          {items.length > 0 && (
            <button
              onClick={clearWishlist}
              className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <FaTrash className="w-4 h-4 mr-2" />
              Clear All
            </button>
          )}
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover object-center rounded-lg"
                />
                
                {/* Remove from wishlist button */}
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                  aria-label="Remove from wishlist"
                >
                  <FaHeart className="w-4 h-4 fill-current" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                <p className="text-gray-600">{product.artist}</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">{formatINR(product.price)}</p>
                  {product.stock <= 5 && product.stock > 0 && (
                    <span className="text-sm text-orange-600 font-medium">
                      Only {product.stock} left
                    </span>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags?.slice(0, 2).map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <FaShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        {items.length > 0 && (
          <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {items.length} item{items.length !== 1 ? 's' : ''} in your wishlist
                </h3>
                <p className="text-gray-600">
                  Total value: {formatINR(items.reduce((sum, item) => sum + item.price, 0))}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex gap-3">
                <Link
                  to="/gallery"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={() => {
                    items.forEach(product => addItem(product));
                    clearWishlist();
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add All to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
