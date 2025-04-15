
import { Heart } from "lucide-react";

const footerSections = [
  {
    title: "About",
    links: ["Who We Are", "Careers", "Press", "Testimonials"]
  },
  {
    title: "Help",
    links: ["Contact Us", "FAQ", "Return & Refunds", "Shipping Info"]
  },
  {
    title: "Inspiration",
    links: ["Blog", "Product Stories", "AI Tips"]
  },
  {
    title: "Quick Links",
    links: ["Offers", "Track Order", "Wishlist", "Join as Seller"]
  },
  {
    title: "Top Categories",
    links: ["Electronics", "Fashion", "Home", "Beauty"]
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-gray-600">
          <p>© 2024 ConnectAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
