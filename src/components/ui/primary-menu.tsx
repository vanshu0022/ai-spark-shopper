
import { ChevronDown } from "lucide-react";

const menuItems = [
  { label: "Categories", bold: true },
  { label: "Brands" },
  { label: "Top Deals" },
  { label: "AI Recommendations" },
  { label: "New Arrivals" },
  { label: "Inspire Me" },
  { label: "More", dropdown: true }
];

export function PrimaryMenu() {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center space-x-8 h-12">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center h-full hover:text-primary transition-colors ${
                  item.bold ? "font-semibold" : ""
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
