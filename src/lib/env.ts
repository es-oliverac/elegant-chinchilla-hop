// Environment variables utility
export const env = {
  // App Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Agencia IA Blockchain',
  APP_URL: import.meta.env.VITE_APP_URL || 'http://localhost:8080',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',

  // Contact Information
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'hola@agenciaiaBlockchain.com',
  CONTACT_PHONE: import.meta.env.VITE_CONTACT_PHONE || '+1 (555) 123-4567',
  CONTACT_ADDRESS: import.meta.env.VITE_CONTACT_ADDRESS || 'Madrid, España',

  // Social Media
  LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL || '#',
  TWITTER_URL: import.meta.env.VITE_TWITTER_URL || '#',
  FACEBOOK_URL: import.meta.env.VITE_FACEBOOK_URL || '#',
  YOUTUBE_URL: import.meta.env.VITE_YOUTUBE_URL || '#',

  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
  API_VERSION: import.meta.env.VITE_API_VERSION || 'v1',

  // External Services
  GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  FACEBOOK_PIXEL_ID: import.meta.env.VITE_FACEBOOK_PIXEL_ID,
  
  // Email Service
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

  // WhatsApp
  WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER || '+1234567890',
  WHATSAPP_MESSAGE: import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola, me interesa conocer más sobre sus servicios de IA y Blockchain',

  // Calendar
  CALENDLY_URL: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/agencia-ia-blockchain',

  // Utility functions
  isDevelopment: () => import.meta.env.DEV,
  isProduction: () => import.meta.env.PROD,
  getWhatsAppUrl: (customMessage?: string) => {
    const message = encodeURIComponent(customMessage || env.WHATSAPP_MESSAGE);
    return `https://wa.me/${env.WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${message}`;
  }
};