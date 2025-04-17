
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-purple-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Discover Smart Product Connections
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Our AI technology helps you find complementary products that work perfectly together for your unique needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-5 text-lg">
                Shop Now
              </Button>
              <Button variant="outline" className="px-6 py-5 text-lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/40 to-blue-400/40 rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-sm">
                <p className="font-medium text-gray-900 mb-2">AI-Powered Matching</p>
                <p className="text-sm text-gray-600">
                  Our smart algorithms analyze thousands of product combinations to find what works best together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
