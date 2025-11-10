import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { HowItWorks } from "@/components/HowItWorks";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Advantages } from "@/components/Advantages";
import { Professionals } from "@/components/Professionals";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { AppDownload } from "@/components/AppDownload";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <ServicesGrid />
      <Advantages />
      <Professionals />
      <SubscriptionPlans />
      <AppDownload />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
