import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Gem } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-background to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Más de 5,000 clientes satisfechos</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Joyas Exclusivas
                <span className="text-yellow-600 block">Para Ti</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Descubre nuestra colección de joyas únicas. Anillos, collares, aretes y pulseras 
                de la más alta calidad con diseños únicos que reflejan tu personalidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-yellow-600 hover:bg-yellow-700">
                Ver Colección
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Joyas Personalizadas
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground">Envío Gratis</div>
                <div>En compras +$100</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Garantía</div>
                <div>1 año completo</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Oro 18k</div>
                <div>Certificado</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center">
              <div className="text-8xl">💎</div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-background border rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Gem className="text-yellow-600 h-4 w-4" />
                </div>
                <div className="text-sm">
                  <div className="font-medium">Oro 18k</div>
                  <div className="text-muted-foreground">Certificado</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-background border rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">✨</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Diseño Único</div>
                  <div className="text-muted-foreground">Exclusivo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;