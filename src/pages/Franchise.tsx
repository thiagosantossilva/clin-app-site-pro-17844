import { Layout } from "@/components/Layout";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  Smartphone, 
  CreditCard, 
  GraduationCap, 
  MessageSquare,
  Server,
  DollarSign,
  Clock,
  Package,
  BarChart3,
  Target,
  Heart,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Franchise = () => {
  const marketData = [
    { label: "Mercado Nacional", value: "R$ 20 bilhões/ano", icon: DollarSign },
    { label: "Crescimento Médio", value: "+15% ao ano", icon: TrendingUp },
    { label: "Serviços Realizados", value: "+200.000", icon: Target },
    { label: "Faturamento em Curitiba", value: "+R$ 10 milhões", icon: BarChart3 }
  ];

  const platformFeatures = [
    {
      icon: Shield,
      title: "Sistema de Gestão Completo",
      description: "Controle total da operação — clientes, agendamentos, profissionais, pagamentos e relatórios em tempo real."
    },
    {
      icon: Smartphone,
      title: "App do Cliente",
      description: "Agendamento 24/7, pagamento seguro e escolha do profissional preferido."
    },
    {
      icon: Users,
      title: "App do Profissional",
      description: "Agenda integrada, gestão de MEI, controle de pagamentos e cadastro validado."
    },
    {
      icon: CreditCard,
      title: "Banco Digital Próprio",
      description: "Split automático de pagamentos, máxima segurança e confiabilidade nas transações."
    },
    {
      icon: GraduationCap,
      title: "Treinamentos e Certificações",
      description: "Área EAD com cursos, reciclagens e certificações válidas em todo o Brasil."
    },
    {
      icon: MessageSquare,
      title: "Chat WhatsApp Integrado",
      description: "Histórico completo de conversas, agendamentos e avaliações automáticas."
    },
    {
      icon: Server,
      title: "Alta Performance e Segurança",
      description: "Plataforma com infraestrutura de nuvem, criptografia e monitoramento contínuo."
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Investimento baixo", description: "Comece com apenas R$ 8.990,00" },
    { icon: TrendingUp, title: "Receita recorrente", description: "Clientes contratam limpeza regularmente" },
    { icon: Clock, title: "Flexibilidade total", description: "Trabalhe no seu ritmo, em casa ou em escritório" },
    { icon: Package, title: "Sem estoque", description: "Produtos comprados pelos clientes — zero custo adicional" },
    { icon: Target, title: "Baixa concorrência", description: "Mercado ainda pouco explorado em nível local" },
    { icon: Sparkles, title: "Alta demanda", description: "Serviço essencial e constante, independente da economia" }
  ];

  const guarantees = [
    "Treinamento completo da plataforma",
    "Material de marketing personalizado",
    "Suporte técnico vitalício",
    "Atualizações contínuas da tecnologia",
    "Consultoria de crescimento do negócio",
    "Acesso à rede nacional de parceiros"
  ];

  const testimonials = [
    {
      text: "A Clin mudou minha vida. Em poucos meses, consegui estabilidade financeira e montei uma rede de profissionais na minha cidade.",
      author: "Lisiane B.",
      location: "Licenciada Clin – Joinville/SC",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnptMCAxOGMwLTEuMS0uOS0yLTItMmgtMmMtMS4xIDAtMiAuOS0yIDJ2MmMwIDEuMS45IDIgMiAyaDJjMS4xIDAgMi0uOSAyLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold">Líder do Mercado de Limpeza no Sul do Brasil</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empreenda com a maior plataforma<br />de limpeza do Sul do Brasil
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
            Entre no mercado bilionário de limpeza por apenas <strong>R$ 8.990,00</strong> e inicie seu negócio com a tecnologia da Clin App — mais de 200 mil serviços realizados e R$ 10 milhões faturados só em Curitiba.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Quero ser licenciado
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20">
              Falar com um consultor
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, label: "+8 anos de experiência" },
              { icon: DollarSign, label: "R$ 20 bi movimentados/ano" },
              { icon: TrendingUp, label: "+15% crescimento/ano" },
              { icon: Target, label: "+200 mil serviços" },
              { icon: BarChart3, label: "R$ 10 mi em Curitiba" }
            ].map((stat, index) => (
              <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
                <stat.icon className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Clin App */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Um modelo de negócio validado, acessível e pronto para crescer
          </h2>
          <p className="text-xl text-center text-muted-foreground max-w-4xl mx-auto mb-12">
            A Clin App é a melhor plataforma de gestão de serviços, profissionais e clientes do mercado. Com mais de 8 anos de experiência, a Clin já faturou mais de R$ 10 milhões apenas em Curitiba, revolucionando o setor com tecnologia e suporte em um mercado que movimenta mais de R$ 20 bilhões por ano no Brasil.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Liderança", description: "Referência em tecnologia e inovação para o setor de limpeza" },
              { icon: Users, title: "Comunidade", description: "Milhares de profissionais e clientes conectados" },
              { icon: Globe, title: "Crescimento", description: "Expansão nacional com oportunidades em todo o país" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <item.icon className="h-16 w-16 text-primary mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Um mercado em constante crescimento e resistente a crises
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {marketData.map((data, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <data.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <p className="text-3xl font-bold mb-2">{data.value}</p>
                  <p className="text-muted-foreground">{data.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Mercado Resiliente
                </h3>
                <p className="text-muted-foreground">
                  Essencial, sem sazonalidade e com demanda constante.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Crescimento Sustentável
                </h3>
                <p className="text-muted-foreground">
                  Expansão anual e forte presença no franchising.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Differentials */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Tecnologia completa para você operar com excelência
          </h2>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Toda a infraestrutura tecnológica que você precisa para crescer
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Seu negócio próprio com liberdade, segurança e alta rentabilidade
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Tudo o que você precisa para começar com segurança
          </h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{guarantee}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center bg-primary/10 rounded-lg p-8">
            <p className="text-3xl font-bold mb-2">Valor do Licenciamento</p>
            <p className="text-5xl font-bold text-primary mb-4">R$ 8.990,00</p>
            <p className="text-muted-foreground mb-6">Pagamento único</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Garantir minha licença agora
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Solicitar informações
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto text-center max-w-4xl">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mais do que um negócio, a Clin transforma vidas
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada licenciada da Clin ajuda a gerar renda e autonomia para dezenas de profissionais, fortalecendo o empreendedorismo feminino e o impacto social em sua região.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Depoimentos de Licenciados
          </h2>
          
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Solicite mais informações e comece a empreender com propósito
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="Sua cidade" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Conte-nos mais sobre seu interesse</Label>
                  <Textarea id="message" placeholder="Descreva seu interesse em se tornar um licenciado..." rows={4} />
                </div>
                
                <Button className="w-full" size="lg">
                  Solicitar informações
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold mb-1">Telefone</p>
                  <p className="text-muted-foreground">(41) 4141-4444</p>
                </div>
                <div>
                  <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold mb-1">E-mail</p>
                  <p className="text-muted-foreground">contato@clin.com.br</p>
                </div>
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold mb-1">Localização</p>
                  <p className="text-muted-foreground">Curitiba / PR</p>
                </div>
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4 text-center text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Resposta em até 24h</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Consultoria gratuita</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Sem compromisso inicial</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold">Oferta Limitada</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Garanta sua licença por apenas R$ 8.990,00
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Entre agora no mercado bilionário de limpeza com a tecnologia mais avançada do setor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Quero ser licenciado
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20">
              Falar com um consultor
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Franchise;
