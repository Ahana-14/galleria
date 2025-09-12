function UserDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="space-y-4">
        <section className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">My Orders</h3>
          <p className="text-sm text-gray-600">Track your purchases and their status.</p>
        </section>
        <section className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Saved Items</h3>
          <p className="text-sm text-gray-600">Your wishlist and favorites.</p>
        </section>
        <section className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Account</h3>
          <p className="text-sm text-gray-600">Update profile and preferences.</p>
        </section>
      </div>
    </div>
  );
}

export default UserDashboard;


