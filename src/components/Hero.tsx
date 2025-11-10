import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroUpholstery from "@/assets/hero-upholstery.jpg";

const slides = [
  {
    title: "Limpeza Residencial",
    subtitle: "Seu lar sempre limpo, com profissionais de confiança.",
    image: heroResidential,
  },
  {
    title: "Limpeza Comercial",
    subtitle: "Ambientes corporativos limpos e saudáveis, todos os dias.",
    image: heroCommercial,
  },
  {
    title: "Higienização de Estofados",
    subtitle: "Seu sofá, colchão e carro sempre limpos e protegidos.",
    image: heroUpholstery,
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-30" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="container relative z-10 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
            A conexão mais rápida e segura entre profissionais autônomos de limpeza e clientes.
            <br />
            <strong>Prático, seguro, rápido e fácil.</strong>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="bg-background/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/20">
              <span className="text-primary-foreground font-semibold">+8 anos no mercado</span>
            </div>
            <div className="bg-background/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/20">
              <span className="text-primary-foreground font-semibold">+200.000 serviços realizados</span>
            </div>
            <div className="bg-background/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/20">
              <span className="text-primary-foreground font-semibold">Maior plataforma do Sul do Brasil</span>
            </div>
          </div>

          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-hover transition-all hover:scale-105">
            Simular Valores
          </Button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm p-3 rounded-full hover:bg-background/30 transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm p-3 rounded-full hover:bg-background/30 transition-all"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
