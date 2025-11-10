import { Home, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesOverview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="group hover:shadow-hover transition-all duration-300 border-2 hover:border-accent cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Home className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Para o seu lar</h3>
              <p className="text-muted-foreground">
                Limpeza doméstica, faxina completa, organização de ambientes e limpeza de vidros.
                Deixe seu lar impecável com profissionais qualificados.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-hover transition-all duration-300 border-2 hover:border-accent cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building2 className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Para sua empresa</h3>
              <p className="text-muted-foreground">
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
