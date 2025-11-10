import { Layout } from "@/components/Layout";
import { CheckCircle2, Target, Users2, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ClinPro = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Proporcionar ambientes limpos e saudáveis, superando expectativas com qualidade e inovação."
    },
    {
      icon: CheckCircle2,
      title: "Nossos Valores",
      description: "Comprometimento, excelência, sustentabilidade e respeito ao cliente e ao meio ambiente."
    },
    {
      icon: Users2,
      title: "Nossa Equipe",
      description: "Profissionais qualificados e dedicados, treinados para oferecer o melhor serviço."
    },
    {
      icon: Heart,
      title: "Nosso Compromisso",
      description: "Garantir satisfação total com serviços de alta qualidade e atendimento humanizado."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a Clin Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Referência em serviços de limpeza profissional, com anos de experiência e milhares de clientes satisfeitos.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <p className="text-lg text-muted-foreground mb-4">
              A Clin Pro nasceu da visão de transformar o mercado de limpeza profissional no Brasil. 
              Com anos de experiência e dedicação, construímos uma empresa sólida, reconhecida pela 
              qualidade excepcional de nossos serviços.
            </p>
            <p className="text-lg text-muted-foreground">
              Hoje, somos uma das maiores redes de limpeza profissional do país, atendendo milhares 
              de clientes residenciais e comerciais com excelência, inovação e compromisso com a 
              sustentabilidade.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">
            O que nos move
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Números que Impressionam</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-muted-foreground">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Profissionais</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClinPro;
