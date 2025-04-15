
import { Search } from "lucide-react";
import { Input } from "./input";

export function Navbar() {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-semibold text-xl">
          <a href="/" className="text-primary hover:opacity-80 transition-opacity">
            ConnectAI
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl px-6">
          <div className="relative">
            <Input 
              type="search"
              placeholder="Search for products, services, or brands..."
              className="w-full pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Sign In */}
        <button className="px-6 py-2 font-medium text-primary hover:text-primary/80 transition-colors">
          Sign In
        </button>
      </div>
    </div>
  );
}
