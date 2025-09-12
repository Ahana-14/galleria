import ProductCard from "../components/ProductCard";
import TopBanner from "../components/TopBanner";
import HeroCarousel from "../components/HeroCarousel";
import Footer from "../components/Footer";
import { artworks } from "../data";

function Home() {
  return (
    <>
      <TopBanner />
      <HeroCarousel />
      
      {/* Featured Artworks */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🎨 Handpicked for You
        </h2>
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
                title: "World-Class Artists",
                description: "Curated collection from renowned artists"
              },
              {
                title: "Exclusive Collections",
                description: "Limited edition artworks"
              },
              {
                title: "Certified Authenticity",
                description: "Every piece verified and certified"
              },
              {
                title: "Virtual Tours Available",
                description: "Experience art from anywhere"
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