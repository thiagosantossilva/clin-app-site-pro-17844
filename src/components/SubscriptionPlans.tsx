import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Frequência semanal, quinzenal ou mensal",
  "Preço fixo e vantajoso",
  "Escolha sua profissional preferida",
  "Pagamentos antecipados",
  "Cancelamento fácil e sem burocracia",
];

export const SubscriptionPlans = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Planos de Assinatura
            </h2>
            <p className="text-xl text-muted-foreground">
              Tenha seu serviço regular com preços especiais
            </p>
          </div>

          <Card className="shadow-hover border-2 border-accent/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Vantagens do Plano</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center items-center text-center bg-secondary rounded-2xl p-8">
                  <div className="mb-6">
                    <p className="text-muted-foreground mb-2">Planos a partir de</p>
                    <p className="text-5xl font-bold text-accent mb-2">R$ 199</p>
                    <p className="text-muted-foreground">por mês</p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full rounded-full"
                  >
                    Conheça Nossos Planos
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    *Valores variam conforme frequência e região
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
