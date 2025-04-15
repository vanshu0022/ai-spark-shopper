
import { Heart, ShoppingCart, Package } from "lucide-react";

const actions = [
  { icon: Package, label: "Track Order" },
  { icon: ShoppingCart, label: "Your Cart" },
  { icon: Heart, label: "Wishlist" }
];

export function ActionIcons() {
  return (
    <div className="fixed right-4 top-20 z-50 bg-white shadow-lg rounded-lg py-2 px-4 space-y-4">
      {actions.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex flex-col items-center w-full hover:text-primary transition-colors"
        >
          <Icon className="h-5 w-5" />
          <span className="text-xs mt-1">{label}</span>
        </button>
      ))}
    </div>
  );
}
