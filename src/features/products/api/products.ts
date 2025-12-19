import { Product } from "../types";

// بيانات وهمية مؤقتة
const mockProducts: Product[] = [
  {
    id: "1",
    name: "VESTURA Classic Hoodie",
    status: "active",
    inventory: 100,
    price: 49.99,
    vendor: "My Store",
    createdAt: "2025-12-15",
  },
  {
    id: "2",
    name: "Minimalist T-Shirt",
    status: "draft",
    inventory: 0,
    price: 19.99,
    vendor: "My Store",
    createdAt: "2025-12-10",
  },
];

export async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 500);
  });
}
