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

## 🌐 Despliegue con EasyPanel

### Configuración de Variables de Entorno

1. Copia el archivo `.env.example` a `.env` y configura las variables:

```bash
cp .env.example .env
```

2. Edita las variables en `.env` con tus valores reales:

```env
# Información de contacto
VITE_CONTACT_EMAIL=tu-email@empresa.com
VITE_CONTACT_PHONE=+34 123 456 789
VITE_CONTACT_ADDRESS=Tu dirección

# Redes sociales
VITE_LINKEDIN_URL=https://linkedin.com/company/tu-empresa
VITE_TWITTER_URL=https://twitter.com/tu-empresa
VITE_FACEBOOK_URL=https://facebook.com/tu-empresa

# WhatsApp
VITE_WHATSAPP_NUMBER=+34123456789

# Calendly para citas
VITE_CALENDLY_URL=https://calendly.com/tu-usuario
```

### Despliegue en EasyPanel

1. **Conecta tu repositorio**: Sube tu código a GitHub/GitLab
2. **Crea una nueva aplicación** en EasyPanel
3. **Configura las variables de entorno** en el panel de EasyPanel:
   - Ve a tu aplicación → Settings → Environment Variables
   - Agrega todas las variables del archivo `.env.example`
4. **Configura el dominio** en EasyPanel
5. **Despliega** la aplicación

### Variables de Entorno Requeridas para EasyPanel

```env
VITE_APP_NAME=Agencia IA Blockchain
VITE_APP_URL=https://tu-dominio.com
VITE_APP_ENV=production
VITE_CONTACT_EMAIL=hola@tu-empresa.com
VITE_CONTACT_PHONE=+34 123 456 789
VITE_CONTACT_ADDRESS=Madrid, España
VITE_LINKEDIN_URL=https://linkedin.com/company/tu-empresa
VITE_TWITTER_URL=https://twitter.com/tu-empresa
VITE_FACEBOOK_URL=https://facebook.com/tu-empresa
VITE_YOUTUBE_URL=https://youtube.com/@tu-empresa
VITE_WHATSAPP_NUMBER=+34123456789
VITE_WHATSAPP_MESSAGE=Hola, me interesa conocer más sobre sus servicios
VITE_CALENDLY_URL=https://calendly.com/tu-usuario
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
├── lib/           # Utilidades y configuración
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
- ✅ Variables de entorno configurables
- ✅ Integración con WhatsApp y Calendly
- ✅ Containerizado con Docker
- ✅ Configuración de producción con Nginx
- ✅ Compatible con EasyPanel

## 🔧 Configuración Personalizada

### WhatsApp Integration
El botón de WhatsApp se genera automáticamente usando la variable `VITE_WHATSAPP_NUMBER`. El mensaje se puede personalizar con `VITE_WHATSAPP_MESSAGE`.

### Calendly Integration
Los botones de "Agendar Llamada" abren automáticamente tu enlace de Calendly configurado en `VITE_CALENDLY_URL`.

### Redes Sociales
Configura tus enlaces de redes sociales en las variables de entorno y se actualizarán automáticamente en el footer.

## 📞 Soporte

Si necesitas ayuda con la configuración o despliegue, contacta al equipo de desarrollo.