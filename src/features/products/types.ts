export interface Product {
  id: string;
  name: string;
  status: "active" | "draft" | "archived";
  inventory: number;
  price: number;
  vendor: string;
  createdAt: string;
}
