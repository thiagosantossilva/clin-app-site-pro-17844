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
    <section className="py-20 bg-background">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Contratar</h2>
          <p className="text-xl text-muted-foreground">
            Agendar seu serviço é rápido e fácil
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center border-4 border-accent">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-accent/20">
                        <div className="absolute inset-0 bg-accent animate-pulse" style={{ width: "50%" }} />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
