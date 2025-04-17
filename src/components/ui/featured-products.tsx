
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Smart Speaker",
    price: "₹4,999",
    rating: 4.5,
    imageClass: "bg-gray-100"
  },
  {
    id: 2,
    name: "Premium Headphones",
    price: "₹12,999",
    rating: 4.8,
    imageClass: "bg-gray-100"
  },
  {
    id: 3,
    name: "Fitness Tracker",
    price: "₹3,499",
    rating: 4.2,
    imageClass: "bg-gray-100"
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "₹8,999",
    rating: 4.7,
    imageClass: "bg-gray-100"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <a href="#" className="text-primary hover:underline font-medium">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className={`h-48 ${product.imageClass} flex items-center justify-center`}>
                <span className="text-4xl opacity-20">Product</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? "text-yellow-400 fill-yellow-400" 
                            : i < product.rating 
                              ? "text-yellow-400 fill-yellow-400 opacity-50" 
                              : "text-gray-300"
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{product.price}</span>
                  <button className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-md text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
