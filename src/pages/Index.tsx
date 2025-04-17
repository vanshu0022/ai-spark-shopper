
import { Navbar } from "@/components/ui/navbar";
import { ActionIcons } from "@/components/ui/action-icons";
import { PrimaryMenu } from "@/components/ui/primary-menu";
import { Footer } from "@/components/ui/footer";
import { TrustBadges } from "@/components/ui/trust-badges";
import { FeaturedProducts } from "@/components/ui/featured-products";
import { HeroSection } from "@/components/ui/hero-section";
import { CategoryShowcase } from "@/components/ui/category-showcase";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ActionIcons />
      <PrimaryMenu />
      
      {/* Main content area */}
      <main className="flex-1">
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
      </main>
      
      <TrustBadges />
      <Footer />
    </div>
  );
};

export default Index;
