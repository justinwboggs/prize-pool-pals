import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Footer } from "@/components/footer";

const Index = () => {
  console.log("Index component rendering...");
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="analytics">
          <DashboardPreview />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
