import { Card, CardContent } from "@/components/ui/card";
import { Gem, Shield, Award, RefreshCw } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Gem,
      title: "Oro 18k Certificado",
      description: "Todas nuestras joyas están hechas con oro de 18 quilates certificado y piedras preciosas auténticas."
    },
    {
      icon: Shield,
      title: "Garantía de Por Vida",
      description: "Ofrecemos garantía completa en todas nuestras piezas. Tu inversión está protegida."
    },
    {
      icon: Award,
      title: "Diseños Exclusivos",
      description: "Cada pieza es única, diseñada por nuestros artesanos expertos con más de 20 años de experiencia."
    },
    {
      icon: RefreshCw,
      title: "Cambios Sin Costo",
      description: "30 días para cambios sin preguntas. Tu satisfacción es nuestra prioridad."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Por Qué Elegir DOOR?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos comprometemos a ofrecerte la mejor calidad en joyería con un servicio excepcional
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;