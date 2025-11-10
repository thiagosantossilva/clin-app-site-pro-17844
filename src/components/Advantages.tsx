import { ShieldCheck, Smartphone, Clock, CreditCard, CheckCircle, Star } from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Profissionais Verificadas",
    description: "Todas as profissionais são verificadas e treinadas",
  },
  {
    icon: Smartphone,
    title: "Agendamento Fácil",
    description: "Agende em poucos minutos pelo app",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Suporte humanizado sempre que precisar",
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "Pagamento online protegido e prático",
  },
  {
    icon: CheckCircle,
    title: "Garantia de Qualidade",
    description: "Cobertura de faltas e garantia do serviço",
  },
  {
    icon: Star,
    title: "Avaliação e Suporte",
    description: "Sistema de avaliação e suporte no app",
  },
];

export const Advantages = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher a Clin?
          </h2>
          <p className="text-xl text-muted-foreground">
            Confiança, praticidade e qualidade em cada serviço
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-secondary transition-all duration-300 group"
              >
                <div className="w-20 h-20 mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
