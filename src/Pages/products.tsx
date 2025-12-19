export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <p className="text-gray-600 mb-6">Manage your product listings, inventory, and availability.</p>

      <div className="border rounded p-4 bg-white shadow-sm">
        <p className="text-sm text-gray-500">No products yet. Start by adding your first product.</p>
        <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
          Add Product
        </button>
      </div>
    </div>
  );
}
