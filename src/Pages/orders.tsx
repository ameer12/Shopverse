export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <p className="text-gray-600 mb-6">Track and manage customer orders and fulfillment.</p>

      <div className="border rounded p-4 bg-white shadow-sm">
        <p className="text-sm text-gray-500">No orders yet. Orders will appear here once customers start buying.</p>
      </div>
    </div>
  );
}
