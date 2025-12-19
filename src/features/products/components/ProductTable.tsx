import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Product } from "../types";

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-gray-500">Loading products...</p>;

  return (
    <div className="overflow-x-auto border rounded shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Inventory</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Vendor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2 capitalize">{product.status}</td>
              <td className="px-4 py-2">{product.inventory}</td>
              <td className="px-4 py-2">${product.price.toFixed(2)}</td>
              <td className="px-4 py-2">{product.vendor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
              }
