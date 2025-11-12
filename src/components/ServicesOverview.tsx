import { Home, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesOverview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(55,180,170,0.08),transparent_50%)]"></div>
      <div className="container px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
            Soluções Completas de Limpeza
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendemos residências e empresas com qualidade e profissionalismo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="group hover:shadow-hover transition-all duration-300 border-none shadow-card hover:-translate-y-2 bg-gradient-to-br from-white to-secondary/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full -mr-16 -mt-16"></div>
            <CardContent className="p-10 text-center relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Home className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-navy">Para o seu lar</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Limpeza doméstica, faxina completa, organização de ambientes e limpeza de vidros.
                Deixe seu lar impecável com profissionais qualificados.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-hover transition-all duration-300 border-none shadow-card hover:-translate-y-2 bg-gradient-to-br from-white to-secondary/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16"></div>
            <CardContent className="p-10 text-center relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Building2 className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-navy">Para sua empresa</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Limpeza comercial, manutenção diária, limpeza pós-obra e condomínios.
                Ambientes corporativos sempre limpos e organizados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
