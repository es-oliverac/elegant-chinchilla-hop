import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Proyectos Completados", icon: Target },
    { number: "25+", label: "Clientes Satisfechos", icon: Users },
    { number: "5+", label: "Años de Experiencia", icon: Award },
    { number: "100%", label: "Tasa de Éxito", icon: Lightbulb }
  ];

  const values = [
    "Innovación constante en tecnologías emergentes",
    "Transparencia total en procesos y resultados",
    "Seguridad y privacidad como prioridades",
    "Soluciones escalables y sostenibles",
    "Soporte técnico especializado 24/7",
    "Metodologías ágiles y entregas rápidas"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Sobre Nosotros
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Pioneros en Transformación Digital
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Somos una agencia especializada en inteligencia artificial y blockchain, 
                comprometida con revolucionar la forma en que las empresas operan en la era digital.
              </p>
              <p className="text-muted-foreground mb-8">
                Nuestro equipo de expertos combina años de experiencia en desarrollo de software, 
                machine learning y tecnologías blockchain para crear soluciones que no solo 
                resuelven problemas actuales, sino que anticipan las necesidades futuras.
              </p>
            </div>

            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Conocer Más
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground mb-4">
                  Democratizar el acceso a tecnologías avanzadas de IA y blockchain, 
                  ayudando a empresas de todos los tamaños a competir en el mercado global.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-600 font-medium">Transformación Digital Integral</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;