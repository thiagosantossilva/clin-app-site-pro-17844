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
    <section className="py-24 bg-gradient-to-b from-white via-secondary/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(55,180,170,0.1),transparent_50%)]"></div>
      <div className="container px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            Por Que Escolher a Clin?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Confiança, praticidade e qualidade em cada serviço
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const gradients = [
              'from-primary/10 to-primary/5',
              'from-accent/10 to-accent/5',
              'from-success/10 to-success/5',
              'from-primary/10 to-accent/5',
              'from-accent/10 to-success/5',
              'from-success/10 to-primary/5'
            ];
            const iconColors = ['text-primary', 'text-accent', 'text-success', 'text-primary', 'text-accent', 'text-success'];
            
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white hover:shadow-hover transition-all duration-300 group hover:-translate-y-2 border border-border/50"
              >
                <div className={`w-24 h-24 mb-6 bg-gradient-to-br ${gradients[index]} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className={`w-12 h-12 ${iconColors[index]}`} />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-navy">{advantage.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
