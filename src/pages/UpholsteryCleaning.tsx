import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Sofa, 
  Shield, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Star,
  Droplets,
  Car,
  Bed,
  Armchair,
  MessageCircle,
  CalendarX,
  BadgeCheck,
  Wind,
  Palette,
  Timer,
  Phone,
  MapPin,
  User
} from "lucide-react";
import { useState, useEffect } from "react";

export default function UpholsteryCleaning() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    upholsteryType: ""
  });

  const testimonials = [
    {
      name: "Juliana M.",
      location: "Curitiba",
      text: "Sofá ficou impecável e com cheirinho incrível. Atendimento pontual e muito educado!",
      rating: 5,
      professional: "Profissional: Ana Paula"
    },
    {
      name: "Ricardo S.",
      location: "Curitiba",
      text: "Excelente serviço! Removeram manchas antigas que eu achava impossível tirar. Super recomendo!",
      rating: 5,
      professional: "Profissional: Carlos Eduardo"
    },
    {
      name: "Camila R.",
      location: "Curitiba",
      text: "Profissionais muito atenciosos e cuidadosos. O sofá secou rápido e ficou como novo!",
      rating: 5,
      professional: "Profissional: Marina Silva"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const trustBadges = [
    {
      icon: CheckCircle2,
      title: "Satisfação Garantida",
      description: "Se não ficar 100% satisfeito, refazemos o serviço sem custo."
    },
    {
      icon: MessageCircle,
      title: "Pós-venda humanizado",
      description: "Acompanhamento via WhatsApp com equipe de atendimento dedicada."
    },
    {
      icon: Shield,
      title: "7 dias de garantia",
      description: "Cobertura total para retrabalho se necessário."
    },
    {
      icon: CalendarX,
      title: "Cancelamento gratuito",
      description: "Cancele até 24h antes do serviço sem taxas."
    },
    {
      icon: BadgeCheck,
      title: "Profissionais verificados",
      description: "Todos os técnicos são treinados e equipados com EPIs e produtos certificados."
    },
    {
      icon: Clock,
      title: "Atendimento imediato",
      description: "Agende sua limpeza de forma simples, online ou pelo aplicativo."
    },
    {
      icon: Car,
      title: "Sem taxa de deslocamento",
      description: "Pagamento apenas pelo serviço, sem custos extras."
    }
  ];

  const whyCleanReasons = [
    {
      icon: Wind,
      title: "Elimina odores desagradáveis",
      description: "Removemos mofo, manchas e odores, deixando seu sofá limpo e perfumado por muito mais tempo."
    },
    {
      icon: Shield,
      title: "Ação bactericida e antiácaro",
      description: "Nossa limpeza tem ação bactericida, fungicida e antiácaros, melhorando a qualidade do ar e prevenindo alergias."
    },
    {
      icon: Palette,
      title: "Realça a cor e o aspecto do tecido",
      description: "Seu estofado volta a ter aparência de novo, com cores vivas e textura restaurada."
    },
    {
      icon: Timer,
      title: "Secagem rápida e eficiente",
      description: "Equipamentos de extração de alto desempenho garantem secagem rápida e segura."
    }
  ];

  const upholsteryTypes = [
    {
      icon: Sofa,
      title: "Sofás e Poltronas",
      description: "Limpeza profunda com extratora profissional."
    },
    {
      icon: Car,
      title: "Cadeiras e Bancos Automotivos",
      description: "Higienização completa de interiores automotivos."
    },
    {
      icon: Bed,
      title: "Colchões e Cabeceiras",
      description: "Eliminação de ácaros, fungos e odores."
    },
    {
      icon: Droplets,
      title: "Impermeabilização de Estofados",
      description: "Proteção duradoura contra manchas e líquidos."
    }
  ];


  const steps = [
    {
      number: "1",
      title: "Solicite seu orçamento",
      description: "Pelo site ou aplicativo Clin.",
    },
    {
      number: "2",
      title: "Agende sua data",
      description: "Escolha o melhor horário.",
    },
    {
      number: "3",
      title: "Profissionais verificados",
      description: "Técnicos especializados vão até você.",
    },
    {
      number: "4",
      title: "Sofá limpo e cheiroso!",
      description: "Aproveite o conforto e o frescor do seu ambiente.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero Section with Video */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-upholstery.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        
        <div className="container px-6 md:px-12 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Seu sofá limpo, cheiroso e como novo — com tecnologia e cuidado da Clin
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10">
              Higienização de estofados profissional com garantia de satisfação, atendimento rápido e produtos certificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Agendar Agora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Solicitar Orçamento
              </Button>
            </div>
            
            {/* Trust Badges Inline */}
            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5" />
                <span>Profissionais verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>7 dias de garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Atendimento imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia e Confiança */}
      <section className="py-20 bg-secondary">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Garantia e Confiança
            </h2>
            <p className="text-xl text-muted-foreground">
              Seu conforto e satisfação são nossa prioridade
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <Card key={index} className="hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por Que Higienizar Seus Estofados */}
      <section className="py-20 bg-background">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mais do que limpeza: é saúde, conforto e bem-estar para sua família
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyCleanReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profissionais e Equipamentos */}
      <section className="py-20 bg-secondary">
        <div className="container px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Profissionais e Equipamentos de Ponta
                    </h2>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nossos técnicos utilizam equipamentos profissionais como a <strong>extratora IPC A135</strong> e 
                  politriz com escova macia, garantindo resultados superiores com total segurança ao tecido.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Todos recebem treinamentos constantes e seguem padrões rigorosos de qualidade e atendimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tipos de Estofados Atendidos */}
      <section className="py-20 bg-background">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tipos de Estofados Atendidos
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluções completas para cada necessidade
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {upholsteryTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mb-4 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-secondary">
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
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solicite um Orçamento */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Solicite um Orçamento
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Agende sua higienização com profissionais verificados, sem taxa de visita.
                </p>
                <p className="text-lg text-primary-foreground/90">
                  <strong>Atendimento imediato em Curitiba e região metropolitana.</strong>
                </p>
              </div>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nome
                      </label>
                      <Input
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Cidade / Bairro
                      </label>
                      <Input
                        type="text"
                        placeholder="Ex: Curitiba - Centro"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Sofa className="w-4 h-4 inline mr-2" />
                        Tipo de estofado
                      </label>
                      <Input
                        type="text"
                        placeholder="Ex: Sofá 3 lugares"
                        value={formData.upholsteryType}
                        onChange={(e) => setFormData({ ...formData, upholsteryType: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Solicitar Orçamento Agora
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
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
            <p className="text-xl text-muted-foreground mb-4">
              Experiências reais de quem confia na Clin
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <Star className="w-6 h-6 fill-accent" />
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-muted-foreground">no Google Reviews</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-10">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xl text-center mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-center">
                  <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    {testimonials[currentTestimonial].professional}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-accent w-10"
                      : "bg-accent/30 hover:bg-accent/50 w-3"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-20 h-20 text-primary-foreground mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Deixe seu sofá como novo com a Clin App
            </h2>
            <p className="text-2xl mb-10 text-primary-foreground/90">
              Higienização profissional, rápida e garantida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-10">
                Baixar o App
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Agendar Serviço
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
