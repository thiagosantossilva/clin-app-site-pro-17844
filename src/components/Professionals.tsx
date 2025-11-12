import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const professionals = [
  {
    name: "Maria Silva",
    since: "2020",
    rating: 5.0,
    testimonial: "Excelente profissional, pontual e muito cuidadosa com os detalhes!",
    client: "João P. – Curitiba",
  },
  {
    name: "Ana Santos",
    since: "2019",
    rating: 5.0,
    testimonial: "Sempre deixa tudo impecável. Super recomendo!",
    client: "Maria L. – Porto Alegre",
  },
  {
    name: "Julia Costa",
    since: "2021",
    rating: 5.0,
    testimonial: "Profissional dedicada e de extrema confiança.",
    client: "Carlos M. – Florianópolis",
  },
  {
    name: "Fernanda Lima",
    since: "2018",
    rating: 5.0,
    testimonial: "A melhor! Minha casa nunca esteve tão limpa.",
    client: "Paula S. – Curitiba",
  },
];

export const Professionals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, professionals.length - itemsPerPage);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conheça Nossos Profissionais Parceiros
          </h2>
          <p className="text-xl text-muted-foreground">
            Profissionais qualificados e avaliados pelos clientes
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {professionals.map((professional, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-3"
                >
                  <Card className="h-full hover:shadow-hover transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                          <span className="text-3xl font-bold text-accent">
                            {professional.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-1">{professional.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Profissional desde {professional.since}
                        </p>
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-accent text-accent"
                            />
                          ))}
                          <span className="ml-2 font-semibold">{professional.rating}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic mb-2">
                        "{professional.testimonial}"
                      </p>
                      <p className="text-sm text-muted-foreground font-medium">
                        — {professional.client}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background shadow-lg p-3 rounded-full hover:bg-accent/10 transition-all z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background shadow-lg p-3 rounded-full hover:bg-accent/10 transition-all z-10"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
