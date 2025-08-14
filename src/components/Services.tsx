import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Blocks, 
  Bot, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Desarrollamos modelos de IA personalizados que automatizan procesos y mejoran la toma de decisiones.",
      features: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Blocks,
      title: "Desarrollo Blockchain",
      description: "Creamos soluciones blockchain seguras y escalables para transformar tu industria.",
      features: ["Smart Contracts", "DApps", "NFTs", "DeFi"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description: "Asistentes virtuales con IA que mejoran la experiencia del cliente 24/7.",
      features: ["NLP Avanzado", "Integración API", "Multi-idioma", "Analytics"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Convertimos tus datos en insights accionables con análisis predictivo avanzado.",
      features: ["Data Mining", "Predictive Analytics", "Visualización", "ETL"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Shield,
      title: "Ciberseguridad IA",
      description: "Protección avanzada con sistemas de seguridad potenciados por inteligencia artificial.",
      features: ["Detección Anomalías", "Threat Intelligence", "Blockchain Security", "Auditorías"],
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Zap,
      title: "Automatización RPA",
      description: "Automatizamos procesos empresariales con robots inteligentes y workflows optimizados.",
      features: ["Process Mining", "Workflow Automation", "Integration", "Monitoring"],
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Soluciones Tecnológicas de Vanguardia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos inteligencia artificial y blockchain para crear soluciones 
            que impulsan la innovación y el crecimiento empresarial
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-8 w-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all"
                >
                  Saber Más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Consulta Personalizada Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;