export default function CustomersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <p className="text-gray-600 mb-6">View and manage your customer base.</p>

      <div className="border rounded p-4 bg-white shadow-sm">
        <p className="text-sm text-gray-500">No customers yet. Once you receive orders, customers will appear here.</p>
      </div>
    </div>
  );
}
