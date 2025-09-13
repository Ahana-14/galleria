// filepath: src/components/DashboardLayout.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Heart, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// ...rest of the provided code...
const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Admin Dashboard', path: '/admin' },
    { icon: Users, label: 'User Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Seller Dashboard', path: '/seller' },
  ];

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="h-screen w-64 bg-white border-r rounded-tr-xl rounded-br-xl shadow-lg"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 mb-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Product 1', price: '$99', image: '/placeholder.jpg' },
    { id: 2, name: 'Product 2', price: '$149', image: '/placeholder.jpg' },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Heart className="w-5 h-5" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <h3 className="text-lg font-bold mb-4">Wishlist</h3>
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-4 p-2 border rounded"
            >
              <div className="w-16 h-16 bg-gray-200 rounded">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <header className="h-16 bg-white border-b flex items-center justify-end px-6">
          <Wishlist />
        </header>
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;