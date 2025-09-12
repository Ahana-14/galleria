import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Manage Products</h3>
          <p className="text-sm text-gray-600 mb-3">Add, edit, or remove artworks.</p>
          <Link to="/admin/products" className="text-blue-600 hover:underline">Go to Products</Link>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Orders</h3>
          <p className="text-sm text-gray-600 mb-3">View and update order statuses.</p>
          <Link to="/admin/orders" className="text-blue-600 hover:underline">Go to Orders</Link>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Users</h3>
          <p className="text-sm text-gray-600 mb-3">Manage user accounts and roles.</p>
          <Link to="/admin/users" className="text-blue-600 hover:underline">Go to Users</Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;


