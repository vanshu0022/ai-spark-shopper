
import { Truck, RotateCcw, ShieldCheck, Zap, Building2 } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹999"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "15-day return policy"
  },
  {
    icon: ShieldCheck,
    title: "100% Verified Products",
    description: "Quality guaranteed"
  },
  {
    icon: Zap,
    title: "AI Smart Matching",
    description: "Personalized recommendations"
  },
  {
    icon: Building2,
    title: "Trusted by 100+ Brands",
    description: "And counting"
  }
];

export function TrustBadges() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {badges.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <Icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-medium mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
