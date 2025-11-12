import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { HowItWorks } from "@/components/HowItWorks";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Advantages } from "@/components/Advantages";
import { TrustedClients } from "@/components/TrustedClients";
import { Professionals } from "@/components/Professionals";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { AppDownload } from "@/components/AppDownload";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <ServicesGrid />
      <Advantages />
      <TrustedClients />
      <Professionals />
      <SubscriptionPlans />
      <AppDownload />
      <Testimonials />
      <FAQ />
    </Layout>
  );
};

export default Index;
