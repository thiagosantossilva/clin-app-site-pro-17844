import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Award, Users, CheckCircle, Target, Shield, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "2017",
      title: "O Início de Tudo",
      content: "A história da Clin começou com um propósito simples, mas poderoso: valorizar o trabalho das profissionais de limpeza e facilitar a vida de quem precisa desses serviços. No início, operando sob o nome Clean House Express, a empresa nasceu da observação de um mercado carente de confiança, tecnologia e profissionalismo."
    },
    {
      year: "2018",
      title: "Primeiras Parcerias Corporativas",
      content: "Com a demanda crescente, a empresa expandiu sua atuação e iniciou o atendimento ao segmento B2B, prestando serviços de limpeza e conservação para empresas e condomínios. Esse foi o primeiro passo rumo à consolidação de um modelo de operação mais estruturado, escalável e confiável."
    },
    {
      year: "2019",
      title: "Plataforma de Gestão Própria",
      content: "Em busca de mais eficiência e controle operacional, foi desenvolvida a primeira versão do sistema administrativo próprio da Clean House Express, voltado à gestão de atendimentos, profissionais e clientes. Esse marco tecnológico se tornou a base para toda a evolução digital que viria nos anos seguintes."
    },
    {
      year: "2020",
      title: "Expansão e Tecnologia",
      content: "O ano marcou uma grande virada: lançamos o aplicativo de agendamento de limpeza, permitindo que clientes escolhessem suas profissionais favoritas e programassem os serviços com praticidade, segurança e rapidez. A inovação trouxe uma nova experiência para clientes e profissionais, unindo tecnologia e confiança em um único ambiente digital."
    },
    {
      year: "2021",
      title: "Novos Serviços e Especialização",
      content: "A plataforma ampliou seu portfólio, passando a oferecer higienização e impermeabilização de estofados, limpeza pós-obra e serviços personalizados para residências e empresas. Essas novas frentes reforçaram o compromisso da Clin com qualidade, especialização e inovação contínua."
    },
    {
      year: "2022",
      title: "Nasce a Nova Marca: Clin App",
      content: "Com o crescimento e a maturidade da operação, a Clean House Express se transformou oficialmente em Clin App. A nova identidade visual trouxe uma marca moderna, leve e próxima das pessoas, representando o propósito de unir tecnologia, cuidado e propósito em cada serviço prestado."
    },
    {
      year: "2023",
      title: "Profissionalização e Impacto Social",
      content: "A Clin deu um passo decisivo rumo à profissionalização do setor de limpeza. Foi criado um modelo próprio de recrutamento, seleção e capacitação de diaristas, com treinamentos constantes, avaliações de desempenho e trilhas de aprendizado via EAD exclusivo. Mais de 3.000 profissionais foram capacitadas, gerando renda, autonomia e reconhecimento para centenas de mulheres em todo o Brasil."
    },
    {
      year: "2024",
      title: "Expansão Corporativa e Novas Soluções",
      content: "Com foco em ampliar o impacto e oferecer soluções completas, a Clin passou a atender empresas, hotéis e condomínios, através de contratos de assinatura mensal e serviços sob demanda. Foi lançado também o Clin Business, um painel inteligente de gestão operacional que permite acompanhar indicadores, equipes e resultados em tempo real."
    },
    {
      year: "2025",
      title: "A Maior Plataforma de Limpeza do Sul do Brasil",
      content: "Hoje, a Clin se consolida como referência em inovação, qualidade e confiança, com mais de 200.000 serviços realizados e presença em diversas cidades do Sul do país. Com um modelo escalável e tecnologia proprietária, a marca segue crescendo com o propósito de transformar o mercado de limpeza e gerar oportunidades para milhares de profissionais autônomas."
    }
  ];

  const workProcess = [
    {
      icon: Users,
      title: "Recrutamento e Seleção",
      description: "Profissionais passam por processo seletivo, entrevistas e checagem de antecedentes."
    },
    {
      icon: Award,
      title: "Treinamentos Constantes",
      description: "Através do EAD Clin Edu, todas recebem capacitação técnica e comportamental."
    },
    {
      icon: Target,
      title: "Supervisão e Qualidade",
      description: "Acompanhe seu serviço pelo app, com suporte ativo e avaliações em tempo real."
    },
    {
      icon: Shield,
      title: "Segurança e Confiança",
      description: "Pagamentos protegidos e cobertura de faltas garantida."
    }
  ];

  const commitments = [
    "Qualidade e pontualidade em cada atendimento",
    "Suporte e acompanhamento humanizado",
    "Uso de produtos e equipamentos profissionais",
    "Respeito, valorização e desenvolvimento das diaristas"
  ];

  const stats = [
    { value: "+200.000", label: "serviços realizados" },
    { value: "+8 anos", label: "de atuação e inovação" },
    { value: "+3.000", label: "profissionais treinadas" },
    { value: "+98%", label: "de satisfação dos clientes" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transformando a forma de contratar profissionais de limpeza no Brasil
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-4xl mx-auto animate-slide-up">
            A Clin App conecta clientes a diaristas qualificadas com segurança, tecnologia e propósito — garantindo mais tempo livre e ambientes impecáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Simular Valores
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background/10 text-primary-foreground border-primary-foreground hover:bg-background/20">
                <Smartphone className="mr-2 h-5 w-5" />
                Baixar o App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Nossa História
          </h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Propósito */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <Heart className="w-16 h-16 mx-auto mb-8 text-accent" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Nosso Propósito
          </h2>
          <blockquote className="text-xl md:text-2xl italic text-muted-foreground mb-8 leading-relaxed">
            "Mais do que uma plataforma, somos um movimento para valorizar o trabalho das profissionais de limpeza e tornar o dia a dia das pessoas mais leve, limpo e feliz."
          </blockquote>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Na Clin, acreditamos que <strong>cuidar de um lar é cuidar de quem vive nele</strong>. Por isso, nossa missão é conectar pessoas de forma justa, transparente e humana — unindo tecnologia e propósito para transformar vidas.
          </p>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Como Trabalhamos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nosso Compromisso */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Nosso Compromisso
          </h2>
          <div className="space-y-4">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconhecimentos e Impacto */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Reconhecimentos e Impacto
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer saber como é fácil contratar sua limpeza com a Clin?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Baixe o app e descubra um novo jeito de manter seu lar sempre limpo e feliz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Smartphone className="mr-2 h-5 w-5" />
                Baixar o App
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background/10 text-primary-foreground border-primary-foreground hover:bg-background/20">
                Conheça Nossos Planos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
