import { Home, Building, Sofa, Car, Package, Sparkles, Droplets, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Limpeza Residencial",
    description: "Faxina completa com profissionais qualificados para seu lar",
    link: null,
  },
  {
    icon: Building,
    title: "Limpeza Comercial",
    description: "Manutenção profissional para ambientes corporativos",
    link: null,
  },
  {
    icon: Sofa,
    title: "Higienização de Estofados",
    description: "Limpeza profunda e impermeabilização de sofás e colchões",
    link: "/higienizacao-estofados",
  },
  {
    icon: Car,
    title: "Lavagem Automotiva",
    description: "Lavagem delivery para seu veículo onde você estiver",
    link: null,
  },
  {
    icon: Package,
    title: "Organização de Ambientes",
    description: "Organize sua casa ou escritório profissionalmente",
    link: null,
  },
  {
    icon: Sparkles,
    title: "Limpeza de Vidraças",
    description: "Vidros e vitrines sempre cristalinos",
    link: null,
  },
  {
    icon: Droplets,
    title: "Piscineiro",
    description: "Manutenção e limpeza profissional de piscinas",
    link: null,
  },
  {
    icon: Calendar,
    title: "Planos de Assinatura",
    description: "Frequência regular com preços especiais",
    link: null,
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços de Limpeza Profissional
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções completas para todas as suas necessidades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardContent = (
              <Card
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 p-0">
                    Saiba mais →
                  </Button>
                </CardContent>
              </Card>
            );
            
            return service.link ? (
              <Link key={index} to={service.link}>
                {cardContent}
              </Link>
            ) : (
              <div key={index}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
