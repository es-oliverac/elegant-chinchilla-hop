import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Zap, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Servicios": [
      "Inteligencia Artificial",
      "Desarrollo Blockchain",
      "Chatbots Inteligentes",
      "Big Data & Analytics",
      "Ciberseguridad IA",
      "Automatización RPA"
    ],
    "Soluciones": [
      "FinTech",
      "HealthTech",
      "E-commerce",
      "Logística",
      "Educación",
      "Gobierno"
    ],
    "Recursos": [
      "Blog Técnico",
      "Casos de Estudio",
      "Whitepapers",
      "Webinars",
      "Documentación API",
      "Centro de Ayuda"
    ],
    "Empresa": [
      "Sobre Nosotros",
      "Nuestro Equipo",
      "Carreras",
      "Prensa",
      "Contacto",
      "Partners"
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-700" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Mantente al Día con la Innovación</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y recibe insights exclusivos sobre IA, blockchain 
              y las últimas tendencias tecnológicas
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="tu@email.com" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-100"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Brain className="h-8 w-8 text-blue-400" />
                <Zap className="h-4 w-4 text-purple-400 absolute -top-1 -right-1" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Agencia IA Blockchain
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
              Transformamos negocios con soluciones innovadoras de inteligencia artificial 
              y blockchain que impulsan el crecimiento y la competitividad.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>hola@agenciaiaBlockchain.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Madrid, España</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 Agencia IA Blockchain. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Certificaciones y Partners</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl">🏆</div>
              <div className="text-2xl">🔒</div>
              <div className="text-2xl">⚡</div>
              <div className="text-2xl">🌟</div>
              <div className="text-2xl">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;