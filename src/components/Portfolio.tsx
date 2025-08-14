import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Sistema de Trading IA",
      description: "Plataforma de trading automatizado con algoritmos de machine learning que analiza mercados en tiempo real.",
      technologies: ["Python", "TensorFlow", "Blockchain", "React"],
      category: "FinTech",
      results: "+250% ROI",
      image: "📈",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "NFT Marketplace",
      description: "Marketplace descentralizado para NFTs con smart contracts seguros y interfaz intuitiva.",
      technologies: ["Solidity", "Web3", "IPFS", "Next.js"],
      category: "Blockchain",
      results: "10K+ usuarios",
      image: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Chatbot Médico IA",
      description: "Asistente virtual para diagnósticos preliminares con procesamiento de lenguaje natural avanzado.",
      technologies: ["NLP", "Python", "FastAPI", "Vue.js"],
      category: "HealthTech",
      results: "95% precisión",
      image: "🏥",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Supply Chain Blockchain",
      description: "Sistema de trazabilidad para cadena de suministro usando blockchain para garantizar transparencia.",
      technologies: ["Ethereum", "Node.js", "MongoDB", "Angular"],
      category: "Logística",
      results: "100% trazabilidad",
      image: "📦",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Predicción de Demanda IA",
      description: "Sistema predictivo para optimizar inventarios usando análisis de big data y machine learning.",
      technologies: ["Scikit-learn", "Apache Spark", "Docker", "React"],
      category: "Retail",
      results: "-30% costos",
      image: "📊",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "DeFi Lending Platform",
      description: "Plataforma de préstamos descentralizada con yield farming y staking automatizado.",
      technologies: ["Solidity", "Hardhat", "Ethers.js", "TypeScript"],
      category: "DeFi",
      results: "$2M+ TVL",
      image: "💰",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Nuestro Portafolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Casos de Éxito Comprobados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo hemos transformado negocios con soluciones innovadoras 
            de IA y blockchain que generan resultados medibles
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-10`}>
                    {project.image}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Resultado:</span>
                    </div>
                    <span className="text-sm font-bold text-green-600">{project.results}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;