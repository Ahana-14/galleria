import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function CatalogProductCard({ product }) {
  const [imageError, setImageError] = useState(false);
  const { addItem } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist(product);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Product Image */}
      <div className="w-full h-48 overflow-hidden">
        {imageError ? (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🖼️</div>
              <div className="text-sm">Image not available</div>
            </div>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
            onError={handleImageError}
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-xl font-semibold text-gray-900 mb-4">${product.price.toFixed(2)}</p>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleAddToWishlist}
            className="w-full py-2 mt-2 rounded-lg text-white font-medium transition bg-blue-600 hover:bg-blue-700"
          >
            Add to Wishlist
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full py-2 mt-2 rounded-lg text-white font-medium transition bg-green-600 hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CatalogProductCard;
