import { ProductTable } from "../features/products";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <p className="text-gray-600 mb-6">Manage your product listings, inventory, and availability.</p>
      <ProductTable />
    </div>
  );
}
