import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sofa, 
  Shield, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Star,
  Droplets,
  Wind,
  Car,
  Bed,
  Armchair
} from "lucide-react";
import { useState, useEffect } from "react";

export default function UpholsteryCleaning() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Camila R.",
      location: "Curitiba",
      text: "Meu sofá ficou impecável e com cheirinho ótimo! Atendimento pontual e profissional.",
      rating: 5,
    },
    {
      name: "Ricardo M.",
      location: "Porto Alegre",
      text: "Excelente serviço! Removeram manchas antigas que eu achava impossível tirar. Super recomendo!",
      rating: 5,
    },
    {
      name: "Juliana S.",
      location: "Florianópolis",
      text: "Profissionais muito atenciosos e cuidadosos. O sofá secou rápido e ficou como novo!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const serviceTypes = [
    {
      icon: Sofa,
      title: "Limpeza de Sofás",
      description: "Profundamente higienizados com extratora profissional.",
    },
    {
      icon: Armchair,
      title: "Poltronas e Cadeiras",
      description: "Limpeza técnica para uso residencial ou corporativo.",
    },
    {
      icon: Droplets,
      title: "Impermeabilização",
      description: "Protege contra manchas e líquidos.",
    },
    {
      icon: Bed,
      title: "Colchões e Cabeceiras",
      description: "Eliminação de ácaros e odores.",
    },
    {
      icon: Car,
      title: "Bancos Automotivos",
      description: "Higienização completa interna do veículo.",
    },
  ];

  const benefits = [
    "Elimina até 99% dos ácaros e fungos",
    "Reduz alergias e melhora a qualidade do ar",
    "Restaura o toque e a aparência do tecido",
    "Prolonga a vida útil do estofado",
    "Seca rapidamente (em poucas horas)",
  ];

  const differentials = [
    {
      icon: Shield,
      title: "Profissionais Certificados",
      description: "Técnicos selecionados e treinados pela Clin Edu.",
    },
    {
      icon: Sparkles,
      title: "Equipamentos Profissionais",
      description: "Extratora IPC A135 e produtos certificados.",
    },
    {
      icon: Clock,
      title: "Agendamento via App",
      description: "Atendimento rápido e horários flexíveis.",
    },
    {
      icon: CheckCircle2,
      title: "Garantia de Satisfação",
      description: "Suporte humanizado e compromisso com qualidade.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Simule seu serviço",
      description: "Faça seu orçamento no site ou app.",
    },
    {
      number: "2",
      title: "Agende o horário ideal",
      description: "Escolha o melhor dia e horário.",
    },
    {
      number: "3",
      title: "Profissionais Certificados",
      description: "Técnicos treinados e equipados chegam até você.",
    },
    {
      number: "4",
      title: "Sofá limpo e perfumado!",
      description: "Sinta o conforto de um ambiente renovado.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Higienização de Estofados Profissional
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Seu sofá limpo, perfumado e como novo!
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto">
              Removemos ácaros, sujeiras e odores com tecnologia e cuidado. 
              Agende sua higienização pelo app da Clin e renove o conforto da sua casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Agendar Higienização
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Baixar o App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Serviço */}
      <section className="py-20 bg-background">
        <div className="container px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Mais do que limpar, nós cuidamos da saúde da sua casa
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A <strong>higienização de estofados da Clin</strong> utiliza equipamentos profissionais 
                (como a <strong>extratora IPC A135</strong>) e produtos certificados, que removem sujeiras 
                profundas, ácaros e odores sem agredir o tecido. O processo é rápido, seguro e ideal para{" "}
                <strong>sofás, poltronas, cadeiras, colchões, bancos automotivos e cabeceiras</strong>.
              </p>
            </div>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Benefícios da Higienização</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tipos de Serviços */}
      <section className="py-20 bg-secondary">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tipos de Serviços
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluções completas para cada necessidade
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-background">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Processo simples e transparente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Escolher a Clin */}
      <section className="py-20 bg-secondary">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Por Que Escolher a Clin
            </h2>
            <p className="text-xl text-muted-foreground">
              A maior plataforma de limpeza do Sul do Brasil
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {differentials.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <Card key={index} className="text-center hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mb-4 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{diff.title}</h3>
                    <p className="text-sm text-muted-foreground">{diff.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-background">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Experiências reais de quem confia na Clin
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-center mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-center">
                  <p className="font-bold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-accent w-8"
                      : "bg-accent/30 hover:bg-accent/50"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Assinaturas */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Quer praticidade todo mês?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Assine a <strong>Clin App</strong> e receba higienizações e limpezas regulares com desconto exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Conheça nossos Planos
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Baixar o App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-24 bg-gradient-to-br from-secondary to-background">
        <div className="container px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Renove seu lar com a Clin
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Higienização profissional, com tecnologia, segurança e propósito.
            </p>
            <Button size="lg" className="text-lg px-10">
              Agendar minha limpeza agora
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
