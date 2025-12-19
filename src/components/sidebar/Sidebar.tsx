import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Orders", href: "/orders" },
  { name: "Customers", href: "/customers" },
  { name: "Store Builder", href: "/store-builder" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 bg-gray-100 p-6 border-r border-gray-200">
      <h1 className="text-2xl font-bold text-blue-800 mb-8">Shopverse</h1>
      <nav className="space-y-3">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-100 text-blue-800" : "text-gray-700 hover:text-blue-800"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
