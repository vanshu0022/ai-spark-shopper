
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Smart devices for your connected home",
    imageClass: "bg-blue-100"
  },
  {
    name: "Fashion",
    description: "Stylish outfits curated for you",
    imageClass: "bg-purple-100"
  },
  {
    name: "Home Decor",
    description: "Transform your living spaces",
    imageClass: "bg-green-100"
  },
  {
    name: "Beauty",
    description: "Premium products for self-care",
    imageClass: "bg-pink-100"
  }
];

export function CategoryShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide selection of categories to find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className={`h-40 ${category.imageClass} flex items-center justify-center`}>
                <span className="text-4xl opacity-30">{category.name[0]}</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:underline text-sm font-medium"
                >
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
