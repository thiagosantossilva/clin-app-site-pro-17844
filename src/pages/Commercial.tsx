import { Layout } from "@/components/Layout";
import { Building2, Users, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Commercial = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Ambientes Corporativos",
      description: "Soluções especializadas para escritórios, lojas e estabelecimentos comerciais."
    },
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais treinados e uniformizados para atender seu negócio."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Protocolos de segurança e produtos certificados para ambientes comerciais."
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Atendimento fora do expediente para não interromper suas operações."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Limpeza Comercial Profissional
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Mantenha seu ambiente de trabalho impecável e produtivo com nossos serviços especializados para empresas.
          </p>
          <Button size="lg" className="mt-4">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher nossos serviços comerciais?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;
