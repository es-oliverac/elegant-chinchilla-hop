import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hola@agenciaiaBlockchain.com",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+1 (555) 123-4567",
      description: "Lun - Vie, 9:00 AM - 6:00 PM"
    },
    {
      icon: MapPin,
      title: "Oficina",
      details: "Madrid, España",
      description: "Reuniones presenciales disponibles"
    },
    {
      icon: Clock,
      title: "Horario",
      details: "24/7 Soporte",
      description: "Emergencias técnicas"
    }
  ];

  const services = [
    "Consultoría en IA",
    "Desarrollo Blockchain",
    "Chatbots Inteligentes",
    "Análisis de Datos",
    "Automatización RPA",
    "Ciberseguridad",
    "Otro"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Contacto
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comencemos tu Proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para transformar tu negocio? Contáctanos para una consulta gratuita 
            y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span>Envíanos un Mensaje</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre *</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Empresa</label>
                    <Input placeholder="Nombre de tu empresa" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono</label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Servicio de Interés</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Presupuesto Estimado</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Selecciona un rango</option>
                    <option>$5,000 - $15,000</option>
                    <option>$15,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensaje *</label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                    rows={4}
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-sm font-medium text-blue-600">{info.details}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Consulta Inmediata</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ¿Necesitas hablar ahora? Agenda una videollamada de 30 minutos gratuita
                </p>
                <Button className="w-full mb-3 bg-gradient-to-r from-blue-600 to-purple-600">
                  Agendar Llamada
                </Button>
                <Button variant="outline" className="w-full">
                  WhatsApp Directo
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Tiempo de Respuesta</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Email</span>
                    <Badge variant="secondary">< 24h</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Llamada</span>
                    <Badge variant="secondary">< 2h</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">WhatsApp</span>
                    <Badge className="bg-green-500">< 30min</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;