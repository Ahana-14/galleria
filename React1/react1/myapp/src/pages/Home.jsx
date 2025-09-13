import ProductCard from "../components/ProductCard";
import TopBanner from "../components/TopBanner";
import HeroCarousel from "../components/HeroCarousel";
import Footer from "../components/Footer";
import { artworks } from "../data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <TopBanner />
      <HeroCarousel />
      
      {/* Featured Artworks */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            🎨 Featured Arts & Crafts
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Discover our handpicked collection of unique handmade treasures
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {artworks.map((art) => (
            <ProductCard key={art.id} product={art} />
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Handcrafted Quality",
                description: "Every piece is carefully crafted by skilled artisans"
              },
              {
                title: "Unique Collections",
                description: "One-of-a-kind handmade treasures"
              },
              {
                title: "Authentic Materials",
                description: "Natural and sustainable materials only"
              },
              {
                title: "Global Shipping",
                description: "Worldwide delivery to your doorstep"
              }
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;