import { Layout } from "@/components/Layout";
import { TrendingUp, HandshakeIcon, Award, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Franchise = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Mercado em Crescimento",
      description: "Segmento de limpeza com alta demanda e crescimento constante."
    },
    {
      icon: HandshakeIcon,
      title: "Suporte Completo",
      description: "Treinamento, marketing e suporte operacional durante toda jornada."
    },
    {
      icon: Award,
      title: "Marca Consolidada",
      description: "Faça parte de uma marca reconhecida e confiável no mercado."
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento Personalizado",
      description: "Equipe dedicada para auxiliar no crescimento da sua unidade."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seja um Franqueado Clin Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Invista em um negócio lucrativo e em crescimento. Faça parte da nossa rede de sucesso.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vantagens de ser um Franqueado
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <advantage.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-center mb-6">
                Solicite Mais Informações
              </h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <Label htmlFor="city">Cidade de Interesse</Label>
                  <Input id="city" placeholder="Sua cidade" />
                </div>
                <Button className="w-full" size="lg">
                  Quero ser Franqueado
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Franchise;
