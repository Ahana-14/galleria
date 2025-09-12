import { useParams } from "react-router-dom";
import { artworks } from "../data";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";

function Product() {
  const { id } = useParams();
  const product = artworks.find((item) => item.id === parseInt(id));
  const { addItem } = useCart();

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
            {product.isNew && (
              <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                New
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-xl text-gray-600">by {product.artist}</p>
            <p className="text-2xl font-bold text-indigo-600">{formatINR(product.price)}</p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-600">{product.description || "No description available."}</p>
            </div>

            {product.tags && (
              <div className="flex gap-2 flex-wrap">
                {product.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <button 
                onClick={() => addItem(product, 1)} 
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Add to Cart
              </button>
              
              <button 
                className="w-full border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;