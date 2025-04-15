
import { Navbar } from "@/components/ui/navbar";
import { ActionIcons } from "@/components/ui/action-icons";
import { PrimaryMenu } from "@/components/ui/primary-menu";
import { Footer } from "@/components/ui/footer";
import { TrustBadges } from "@/components/ui/trust-badges";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ActionIcons />
      <PrimaryMenu />
      
      {/* Main content area - placeholder for now */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Welcome to ConnectAI</h1>
          <p className="text-xl text-gray-600">Your AI-Powered Product Connector</p>
        </div>
      </main>
      
      <TrustBadges />
      <Footer />
    </div>
  );
};

export default Index;
