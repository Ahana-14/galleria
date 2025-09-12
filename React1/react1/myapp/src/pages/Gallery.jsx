import ProductCard from "../components/ProductCard";
import { artworks } from "../data";

function Gallery() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((art) => (
          <ProductCard key={art.id} product={art} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;