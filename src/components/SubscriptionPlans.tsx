import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const plans = [
  {
    id: "quinzenal",
    title: "Quinzenal",
    badge: null,
    benefits: [
      "Agendamento recorrente.",
      "Profissional preferêncial.",
      "Descontos de até 15%.",
      "Suporte Humano via WhatsApp.",
    ],
    featured: false,
  },
  {
    id: "semanal",
    title: "Semanal",
    badge: "O mais pedido",
    benefits: [
      "Seu lar limpo toda semana.",
      "Profissional preferêncial.",
      "Descontos de até 20%.",
      "Suporte Humano via WhatsApp.",
    ],
    featured: true,
  },
  {
    id: "comercial",
    title: "Comercial",
    badge: null,
    benefits: [
      "Multipla",
      "Agendamento recorrente.",
      "Profissional preferêncial.",
      "Horários flexiveis.",
      "Suporte Humano via WhatsApp.",
    ],
    featured: false,
  },
];

export const SubscriptionPlans = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-white to-secondary/50">
      <div className="container px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
              Planos de assinatura
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Temos o plano de assinatura ideal para você manter seu lar limpo, cheiroso e feliz.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {plans.map((plan) => (
                <CarouselItem key={plan.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card
                    className={`h-full transition-all duration-300 ${
                      plan.featured
                        ? "border-2 border-accent shadow-hover scale-105 bg-gradient-to-br from-white to-accent/5"
                        : "border border-border shadow-card hover:shadow-hover"
                    }`}
                  >
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Badge */}
                      {plan.badge && (
                        <div className="mb-4 -mt-2">
                          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-accent to-success text-white text-sm font-bold rounded-full shadow-glow">
                            <Star className="w-4 h-4 fill-current" />
                            {plan.badge}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-navy mb-6">
                        {plan.title}
                      </h3>

                      {/* Benefits */}
                      <ul className="space-y-4 mb-8 flex-grow">
                        {plan.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-4 h-4 text-accent" />
                            </div>
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button
                        size="lg"
                        className={`w-full rounded-full font-bold ${
                          plan.featured
                            ? "bg-gradient-to-r from-accent to-success hover:shadow-glow text-white"
                            : "bg-primary hover:bg-primary/90 text-primary-foreground"
                        }`}
                      >
                        Quero este plano
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-accent/20 hover:bg-accent hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-accent/20 hover:bg-accent hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
