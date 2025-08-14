import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gem } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-yellow-200">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Gem className="h-8 w-8 text-yellow-600" />
              </div>
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mantente al Día</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Suscríbete a nuestro boletín y sé el primero en conocer nuestras nuevas colecciones, 
                  ofertas exclusivas y eventos especiales de joyería.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    className="flex-1"
                  />
                  <Button className="sm:w-auto bg-yellow-600 hover:bg-yellow-700">
                    Suscribirse
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Respetamos tu privacidad. Cancela tu suscripción cuando quieras.
                </p>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground pt-6 border-t">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>5,000+ suscriptores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Ofertas semanales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Acceso VIP</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;