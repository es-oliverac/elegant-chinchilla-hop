import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Anillo Solitario Diamante",
      price: 1299.99,
      originalPrice: 1599.99,
      rating: 4.9,
      reviews: 87,
      image: "💍",
      badge: "Más Vendido",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Collar Perlas Cultivadas",
      price: 899.99,
      originalPrice: 1199.99,
      rating: 4.8,
      reviews: 124,
      image: "📿",
      badge: "Nuevo",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "Aretes Oro Rosa 18k",
      price: 649.99,
      originalPrice: 799.99,
      rating: 4.9,
      reviews: 156,
      image: "👂",
      badge: "Oferta",
      badgeColor: "bg-red-500"
    },
    {
      id: 4,
      name: "Pulsera Tenis Diamantes",
      price: 2199.99,
      originalPrice: 2599.99,
      rating: 5.0,
      reviews: 43,
      image: "💎",
      badge: "Premium",
      badgeColor: "bg-purple-500"
    },
    {
      id: 5,
      name: "Anillo Esmeralda Vintage",
      price: 1799.99,
      originalPrice: 2199.99,
      rating: 4.8,
      reviews: 67,
      image: "💚",
      badge: "Exclusivo",
      badgeColor: "bg-emerald-500"
    },
    {
      id: 6,
      name: "Collar Cadena Oro 18k",
      price: 549.99,
      originalPrice: 699.99,
      rating: 4.7,
      reviews: 203,
      image: "🔗",
      badge: "Clásico",
      badgeColor: "bg-yellow-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-yellow-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Joyas Destacadas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección exclusiva de joyas de alta calidad, 
            cada pieza cuidadosamente seleccionada por nuestros expertos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center text-6xl">
                    {product.image}
                  </div>
                  
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  <Button className="w-full group bg-yellow-600 hover:bg-yellow-700">
                    <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Agregar al Carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white">
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;