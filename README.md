# DOOR Joyería - Sitio Web

Una elegante página web para joyería construida con React, TypeScript y Tailwind CSS.

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🐳 Docker

### Desarrollo con Docker

```bash
# Construir y ejecutar con docker-compose
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d
```

La aplicación estará disponible en `http://localhost:3000`

### Producción con Docker

```bash
# Para producción con proxy nginx
docker-compose --profile production up -d
```

### Comandos Docker útiles

```bash
# Ver logs
docker-compose logs -f

# Parar servicios
docker-compose down

# Reconstruir imagen
docker-compose build --no-cache

# Limpiar volúmenes
docker-compose down -v
```

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── hooks/         # Hooks personalizados
├── lib/           # Utilidades
└── utils/         # Funciones auxiliares
```

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Vite** - Build tool
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos
- **Docker** - Containerización

## 🌟 Características

- ✅ Diseño responsive
- ✅ Componentes modernos de UI
- ✅ Optimizado para SEO
- ✅ Containerizado con Docker
- ✅ Configuración de producción con Nginx