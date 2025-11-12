import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Advantages } from "@/components/Advantages";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

const Residential = () => {
  return (
    <Layout>
      <Hero />
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Limpeza Residencial
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Transformamos sua casa em um ambiente impecável com nossos serviços de limpeza profissional.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <Advantages />
      <Testimonials />
      <FAQ />
    </Layout>
  );
};

export default Residential;
