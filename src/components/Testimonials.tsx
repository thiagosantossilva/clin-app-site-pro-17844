import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    professional: "Juliana Oliveira",
    text: "Excelente profissional, pontual e cuidadosa. Sempre deixa tudo impecável!",
    client: "Vinicius S.",
    location: "Curitiba",
    date: "Janeiro 2025",
  },
  {
    professional: "Carla Mendes",
    text: "Super atenciosa e dedicada. Minha casa nunca esteve tão organizada!",
    client: "Fernanda L.",
    location: "Porto Alegre",
    date: "Dezembro 2024",
  },
  {
    professional: "Patricia Santos",
    text: "Profissional de extrema confiança. Recomendo de olhos fechados!",
    client: "Ricardo M.",
    location: "Florianópolis",
    date: "Novembro 2024",
  },
  {
    professional: "Amanda Costa",
    text: "Serviço impecável e atenção aos detalhes. Estou muito satisfeita!",
    client: "Marina P.",
    location: "Curitiba",
    date: "Janeiro 2025",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Clientes Que Contratam e Confiam
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes dizem sobre nossas profissionais
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <Card className="shadow-hover border-2 border-accent/20">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex justify-center mb-6">
                        <Quote className="w-12 h-12 text-accent/30" />
                      </div>

                      <div className="text-center mb-8">
                        <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent">
                            {testimonial.professional.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <h3 className="font-bold text-2xl mb-2">{testimonial.professional}</h3>
                        <div className="flex justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>

                      <p className="text-lg text-center mb-6 italic">
                        "{testimonial.text}"
                      </p>

                      <div className="text-center text-muted-foreground">
                        <p className="font-medium">
                          {testimonial.client} – {testimonial.location}
                        </p>
                        <p className="text-sm">{testimonial.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
