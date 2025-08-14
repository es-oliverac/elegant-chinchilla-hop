import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Ana Rodríguez",
      role: "CEO & AI Research Director",
      bio: "PhD en Machine Learning con 10+ años en investigación de IA. Ex-Google AI.",
      avatar: "👩‍💼",
      skills: ["Deep Learning", "NLP", "Computer Vision"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Carlos Mendoza",
      role: "CTO & Blockchain Architect",
      bio: "Experto en blockchain con experiencia en Ethereum Foundation. 50+ smart contracts desplegados.",
      avatar: "👨‍💻",
      skills: ["Solidity", "DeFi", "Web3"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "María González",
      role: "Lead Data Scientist",
      bio: "Especialista en Big Data y Analytics. Ex-Microsoft Azure ML. Kaggle Grandmaster.",
      avatar: "👩‍🔬",
      skills: ["Python", "TensorFlow", "Big Data"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Roberto Silva",
      role: "Senior Full Stack Developer",
      bio: "10+ años desarrollando aplicaciones web. Experto en React, Node.js y arquitecturas escalables.",
      avatar: "👨‍🚀",
      skills: ["React", "Node.js", "DevOps"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Laura Martín",
      role: "UX/UI Designer",
      bio: "Diseñadora especializada en interfaces para aplicaciones de IA y blockchain. Premio UX Awards 2023.",
      avatar: "👩‍🎨",
      skills: ["Figma", "Design Systems", "User Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Diego Herrera",
      role: "DevOps & Security Engineer",
      bio: "Experto en infraestructura cloud y ciberseguridad. Certificado AWS Solutions Architect.",
      avatar: "👨‍🔧",
      skills: ["AWS", "Docker", "Kubernetes"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Nuestro Equipo
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Expertos en Tecnología de Vanguardia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un equipo multidisciplinario de profesionales apasionados por la innovación 
            y comprometidos con la excelencia técnica
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="text-6xl mb-4">{member.avatar}</div>
                
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-1 justify-center mb-6">
                  {member.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="icon" className="hover:text-blue-600">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-blue-400">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-gray-800">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">¿Quieres Unirte a Nuestro Equipo?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Siempre estamos buscando talento excepcional para expandir nuestro equipo. 
              Si eres apasionado por la IA y blockchain, nos encantaría conocerte.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Ver Oportunidades
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;