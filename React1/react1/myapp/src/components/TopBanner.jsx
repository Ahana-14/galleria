import { Link } from "react-router-dom";

function TopBanner() {
  return (
    <div className="bg-amber-50 text-gray-800 px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">🎨 New Exhibition: Modern Indian Art – Book Tickets Today</p>
        <Link to="/exhibitions" className="text-sm font-medium hover:text-indigo-600 transition-colors">
          Learn More →
        </Link>
      </div>
    </div>
  );
}

export default TopBanner;