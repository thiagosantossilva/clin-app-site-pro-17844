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
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-primary to-accent">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-20" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(31,128,234,0.1),rgba(0,0,0,0))]"></div>
      </div>

      <div className="container relative z-10 px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-accent/30 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white">Maior plataforma de limpeza do Sul do Brasil</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white animate-fade-in leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-white/95 animate-fade-in font-medium">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/85 max-w-3xl mx-auto leading-relaxed">
            A conexão mais rápida e segura entre profissionais autônomos de limpeza e clientes.
            <br />
            <strong className="text-accent">Prático, seguro, rápido e fácil.</strong>
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <div className="bg-white/15 backdrop-blur-md px-6 py-3.5 rounded-full border border-white/25 shadow-lg hover:bg-white/20 transition-all">
              <span className="text-white font-bold text-sm md:text-base">+8 anos de experiência</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md px-6 py-3.5 rounded-full border border-white/25 shadow-lg hover:bg-white/20 transition-all">
              <span className="text-white font-bold text-sm md:text-base">+200.000 serviços realizados</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md px-6 py-3.5 rounded-full border border-white/25 shadow-lg hover:bg-white/20 transition-all">
              <span className="text-white font-bold text-sm md:text-base">R$ 10 milhões faturados</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-7 rounded-full shadow-glow transition-all hover:scale-105 hover:shadow-hover font-semibold">
              Simular Valores
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-10 py-7 rounded-full backdrop-blur-md transition-all hover:scale-105 font-semibold">
              Baixar o App
            </Button>
          </div>
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
