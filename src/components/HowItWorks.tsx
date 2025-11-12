import { Smartphone, Calendar, UserCheck, CreditCard, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Baixe o App da Clin",
    description: "Disponível para Android e iOS",
  },
  {
    icon: Calendar,
    title: "Escolha o serviço e data",
    description: "Selecione o que você precisa",
  },
  {
    icon: UserCheck,
    title: "Selecione sua profissional",
    description: "Veja perfis e avaliações",
  },
  {
    icon: CreditCard,
    title: "Pague com segurança",
    description: "Pagamento online protegido",
  },
  {
    icon: Sparkles,
    title: "Relaxe",
    description: "A Clin cuida do resto!",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(31,128,234,0.05),transparent_60%)]"></div>
      <div className="container px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy via-primary to-accent bg-clip-text text-transparent">
            Como Contratar
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Agendar seu serviço é rápido e fácil
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = ['primary', 'accent', 'success', 'primary', 'accent'];
              const color = colors[index % colors.length];
              
              return (
                <div key={index} className="text-center relative group">
                  <div className="relative inline-block mb-6">
                    <div className={`w-28 h-28 mx-auto bg-gradient-to-br from-${color}/20 to-${color}/5 rounded-3xl flex items-center justify-center border-4 border-${color}/30 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className={`w-12 h-12 text-${color}`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${color} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-14 left-[calc(50%+4rem)] w-[calc(100%+1.5rem)] h-1 bg-gradient-to-r from-accent/30 to-primary/30">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary animate-pulse" style={{ width: "40%" }} />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-navy">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
