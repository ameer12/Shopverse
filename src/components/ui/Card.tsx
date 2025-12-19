import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4">
      {children}
    </div>
  );
}
