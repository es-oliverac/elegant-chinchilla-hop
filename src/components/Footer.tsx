import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Gem } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Tienda": [
      "Anillos",
      "Collares",
      "Aretes",
      "Pulseras",
      "Relojes",
      "Tarjetas de Regalo"
    ],
    "Servicios": [
      "Contacto",
      "Preguntas Frecuentes",
      "Envíos",
      "Devoluciones",
      "Guía de Tallas",
      "Cuidado de Joyas"
    ],
    "Empresa": [
      "Sobre Nosotros",
      "Nuestros Artesanos",
      "Certificaciones",
      "Blog",
      "Prensa"
    ],
    "Legal": [
      "Política de Privacidad",
      "Términos de Servicio",
      "Política de Cookies",
      "Garantías",
      "Mapa del Sitio"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gem className="h-8 w-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-primary">DOOR</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Tu destino para joyas exclusivas de la más alta calidad. 
              Cada pieza cuenta una historia única y refleja tu personalidad especial.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 DOOR Joyería. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Aceptamos:</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs font-bold">
                💳
              </div>
              <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs font-bold">
                💰
              </div>
              <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs font-bold">
                🏦
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;