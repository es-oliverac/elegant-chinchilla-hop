import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-background to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2 text-blue-600" />
                Innovación en IA y Blockchain
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Transformamos tu
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Negocio Digital
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Desarrollamos soluciones de inteligencia artificial y blockchain 
                que revolucionan industrias y crean ventajas competitivas sostenibles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explorar Servicios
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Casos de Éxito
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <div>
                  <div className="font-semibold text-foreground">+300%</div>
                  <div>ROI Promedio</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <div>
                  <div className="font-semibold text-foreground">100%</div>
                  <div>Seguridad</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <div>
                  <div className="font-semibold text-foreground">50+</div>
                  <div>Proyectos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl">🤖</div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 bg-background border rounded-lg p-3 shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">AI</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Machine Learning</div>
                    <div className="text-muted-foreground">Activo</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-background border rounded-lg p-3 shadow-lg animate-pulse delay-300">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">⛓️</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Blockchain</div>
                    <div className="text-muted-foreground">Seguro</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 bg-background border rounded-lg p-3 shadow-lg animate-pulse delay-150">
                <div className="text-sm">
                  <div className="font-medium text-green-600">+99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
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