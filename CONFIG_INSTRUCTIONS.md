# 📚 Documentación Completa de config.json

Este documento describe en detalle cada campo del archivo `config.json` y cómo usarlo.

---

## 📋 Índice

1. [Información de la Empresa](#company)
2. [Información de Contacto](#contact)
3. [Redes Sociales](#social)
4. [SEO y Metadatos](#seo)
5. [Tema y Colores](#theme)
6. [Configuración de Páginas](#pages)
7. [Servicios](#services)
8. [Proyectos](#projects)
9. [Testimonios](#testimonials)
10. [Blog](#blog)
11. [Características y Funcionalidades](#features)

---

## 1. Información de la Empresa {#company}

```json
"company": {
  "name": "string",           // Nombre de la empresa (obligatorio)
  "slogan": "string",         // Eslogan o tagline (obligatorio)
  "description": "string",    // Descripción breve de la empresa (obligatorio)
  "founded": "string",        // Año de fundación (opcional)
  "logo": "string",           // Ruta al logo (obligatorio)
  "favicon": "string"         // Ruta al favicon (obligatorio)
}
```

### Ejemplo:
```json
"company": {
  "name": "TechSolutions",
  "slogan": "Innovación que transforma",
  "description": "Empresa líder en soluciones tecnológicas empresariales",
  "founded": "2010",
  "logo": "/src/assets/images/logo.png",
  "favicon": "/src/assets/images/favicon.png"
}
```

### Notas:
- El **logo** debe ser PNG con fondo transparente, tamaño recomendado: 200x80px
- El **favicon** debe ser 32x32px o 16x16px

---

## 2. Información de Contacto {#contact}

```json
"contact": {
  "phone": "string",          // Teléfono principal (obligatorio)
  "email": "string",          // Email de contacto (obligatorio)
  "whatsapp": "string",       // Número de WhatsApp (opcional)
  "address": {
    "street": "string",       // Dirección completa
    "city": "string",         // Ciudad
    "postalCode": "string",   // Código postal
    "country": "string",      // País
    "countryCode": "string"   // Código de país (ISO)
  },
  "coordinates": {
    "latitude": "string",     // Latitud para Google Maps
    "longitude": "string"     // Longitud para Google Maps
  },
  "hours": {
    "weekdays": "string",     // Horario entre semana
    "weekend": "string"       // Horario fin de semana
  }
}
```

### Ejemplo:
```json
"contact": {
  "phone": "+34912345678",
  "email": "info@techsolutions.com",
  "whatsapp": "+34912345678",
  "address": {
    "street": "Calle Mayor 123, Oficina 4B",
    "city": "Madrid",
    "postalCode": "28001",
    "country": "España",
    "countryCode": "ES"
  },
  "coordinates": {
    "latitude": "40.4168",
    "longitude": "-3.7038"
  },
  "hours": {
    "weekdays": "09:00 - 18:00",
    "weekend": "Cerrado"
  }
}
```

### Notas:
- Usa el formato internacional para teléfonos: `+[código país][número]`
- Las coordenadas se pueden obtener de Google Maps

---

## 3. Redes Sociales {#social}

```json
"social": {
  "facebook": "string",       // URL de Facebook (opcional)
  "instagram": "string",      // URL de Instagram (opcional)
  "linkedin": "string",       // URL de LinkedIn (opcional)
  "twitter": "string",        // URL de Twitter/X (opcional)
  "youtube": "string"         // URL de YouTube (opcional)
}
```

### Ejemplo:
```json
"social": {
  "facebook": "https://facebook.com/techsolutions",
  "instagram": "https://instagram.com/techsolutions",
  "linkedin": "https://linkedin.com/company/techsolutions",
  "twitter": "",
  "youtube": "https://youtube.com/@techsolutions"
}
```

### Notas:
- Deja vacío (`""`) las redes que no uses
- Usa URLs completas

---

## 4. SEO y Metadatos {#seo}

```json
"seo": {
  "siteUrl": "string",        // URL completa del sitio (obligatorio)
  "keywords": "string",       // Palabras clave separadas por comas (obligatorio)
  "author": "string",         // Autor del sitio (obligatorio)
  "language": "string",       // Código de idioma (ej: "es", "en")
  "locale": "string"          // Locale (ej: "es_ES", "en_US")
}
```

### Ejemplo:
```json
"seo": {
  "siteUrl": "https://www.techsolutions.com",
  "keywords": "tecnología, software, soluciones empresariales, desarrollo",
  "author": "TechSolutions",
  "language": "es",
  "locale": "es_ES"
}
```

### Notas:
- Las **keywords** ayudan al posicionamiento SEO
- Usa entre 5-10 palabras clave relevantes

---

## 5. Tema y Colores {#theme}

```json
"theme": {
  "primaryColor": "string",     // Color principal (hex) (obligatorio)
  "secondaryColor": "string",   // Color secundario (hex) (obligatorio)
  "accentColor": "string",      // Color de acento (hex) (opcional)
  "textColor": "string",        // Color del texto (hex) (obligatorio)
  "backgroundColor": "string",  // Color de fondo (hex) (obligatorio)
  "headerBg": "string",         // Color del header (hex) (opcional)
  "footerBg": "string"          // Color del footer (hex) (opcional)
}
```

### Ejemplo:
```json
"theme": {
  "primaryColor": "#3b82f6",
  "secondaryColor": "#2563eb",
  "accentColor": "#f59e0b",
  "textColor": "#1f2937",
  "backgroundColor": "#ffffff",
  "headerBg": "#ffffff",
  "footerBg": "#111827"
}
```

### Notas:
- Usa colores en formato hexadecimal (#RRGGBB)
- Asegúrate de que haya suficiente contraste entre texto y fondo
- Herramientas útiles: [Coolors.co](https://coolors.co/), [Adobe Color](https://color.adobe.com/)

---

## 6. Configuración de Páginas {#pages}

Cada página del sitio tiene su propia configuración:

```json
"pages": {
  "index": {
    "title": "string",          // Título de la página (SEO)
    "description": "string",    // Meta descripción (SEO)
    "heroImage": "string",      // Imagen principal
    "heroTitle": "string",      // Título del hero
    "heroSubtitle": "string",   // Subtítulo del hero
    "ctaText": "string",        // Texto del botón
    "ctaLink": "string"         // Enlace del botón
  },
  "servicios": { /* ... */ },
  "proyectos": { /* ... */ },
  "galeria": { /* ... */ },
  "blog": { /* ... */ },
  "sobreNosotros": { /* ... */ },
  "contacto": {
    "title": "string",
    "description": "string",
    "headerTitle": "string",
    "headerSubtitle": "string",
    "formSubmitUrl": "string",      // URL para envío de formulario
    "formSuccessPage": "string"     // Página de éxito
  }
}
```

### Ejemplo - Página de Inicio:
```json
"index": {
  "title": "TechSolutions | Soluciones Tecnológicas",
  "description": "Ofrecemos soluciones tecnológicas innovadoras para empresas",
  "heroImage": "/src/assets/images/hero-tech.jpg",
  "heroTitle": "Transformamos tu negocio con tecnología",
  "heroSubtitle": "Soluciones a medida para empresas modernas",
  "ctaText": "Solicitar Demo",
  "ctaLink": "/contacto.html"
}
```

### Ejemplo - Página de Contacto:
```json
"contacto": {
  "title": "Contacto | TechSolutions",
  "description": "Ponte en contacto con nosotros para más información",
  "headerTitle": "Contáctanos",
  "headerSubtitle": "Estamos aquí para ayudarte",
  "formSubmitUrl": "https://formsubmit.co/info@techsolutions.com",
  "formSuccessPage": "/gracias.html"
}
```

---

## 7. Servicios {#services}

Array de objetos que representan tus servicios o productos:

```json
"services": [
  {
    "id": "string",             // ID único (obligatorio)
    "name": "string",           // Nombre del servicio (obligatorio)
    "description": "string",    // Descripción (obligatorio)
    "icon": "string",           // Emoji o símbolo (opcional)
    "image": "string",          // Ruta a imagen (obligatorio)
    "features": ["string"]      // Array de características (opcional)
  }
]
```

### Ejemplo:
```json
"services": [
  {
    "id": "desarrollo-web",
    "name": "Desarrollo Web",
    "description": "Creamos sitios web modernos, rápidos y escalables",
    "icon": "💻",
    "image": "/src/assets/images/servicios/desarrollo-web.jpg",
    "features": [
      "Diseño responsive",
      "Optimización SEO",
      "Alto rendimiento",
      "Seguridad avanzada"
    ]
  },
  {
    "id": "apps-moviles",
    "name": "Apps Móviles",
    "description": "Desarrollamos aplicaciones nativas e híbridas",
    "icon": "📱",
    "image": "/src/assets/images/servicios/apps-moviles.jpg",
    "features": [
      "iOS y Android",
      "UX optimizada",
      "Integración API",
      "Publicación en stores"
    ]
  }
]
```

---

## 8. Proyectos {#projects}

Array de proyectos realizados:

```json
"projects": [
  {
    "id": "string",             // ID único (obligatorio)
    "name": "string",           // Nombre del proyecto (obligatorio)
    "description": "string",    // Descripción (obligatorio)
    "image": "string",          // Imagen principal (obligatorio)
    "category": "string",       // Categoría (obligatorio)
    "year": "string",           // Año (opcional)
    "duration": "string",       // Duración (opcional)
    "features": ["string"]      // Características (opcional)
  }
]
```

### Ejemplo:
```json
"projects": [
  {
    "id": "proyecto-ecommerce",
    "name": "Tienda Online Fashion Store",
    "description": "Plataforma de e-commerce completa con gestión de inventario",
    "image": "/src/assets/images/proyectos/fashion-store.jpg",
    "category": "E-commerce",
    "year": "2024",
    "duration": "3 meses",
    "features": [
      "Pasarela de pago integrada",
      "Panel de administración",
      "App móvil complementaria",
      "Sistema de envíos"
    ]
  }
]
```

---

## 9. Testimonios {#testimonials}

Array de testimonios de clientes:

```json
"testimonials": [
  {
    "id": number,               // ID único (obligatorio)
    "name": "string",           // Nombre del cliente (obligatorio)
    "role": "string",           // Cargo o empresa (obligatorio)
    "text": "string",           // Testimonio (obligatorio)
    "rating": number,           // Calificación 1-5 (obligatorio)
    "image": "string"           // Foto del cliente (opcional)
  }
]
```

### Ejemplo:
```json
"testimonials": [
  {
    "id": 1,
    "name": "Ana García",
    "role": "CEO, StartupXYZ",
    "text": "Excelente servicio y profesionalidad. Superaron nuestras expectativas en todos los aspectos del proyecto.",
    "rating": 5,
    "image": "/src/assets/images/testimonios/ana-garcia.jpg"
  }
]
```

---

## 10. Blog {#blog}

Array de artículos del blog:

```json
"blog": [
  {
    "id": number,               // ID único (obligatorio)
    "titulo": "string",         // Título (obligatorio)
    "descripcion": "string",    // Descripción corta (obligatorio)
    "imagen": "string",         // Imagen destacada (obligatorio)
    "url": "string",            // Enlace al artículo (obligatorio)
    "fecha": "string",          // Fecha ISO (YYYY-MM-DD) (opcional)
    "autor": "string",          // Autor (opcional)
    "categoria": "string"       // Categoría (opcional)
  }
]
```

### Ejemplo:
```json
"blog": [
  {
    "id": 1,
    "titulo": "10 Tendencias de Desarrollo Web en 2024",
    "descripcion": "Descubre las tecnologías y prácticas que dominarán el desarrollo web este año",
    "imagen": "/src/assets/images/blog/tendencias-2024.jpg",
    "url": "/blog/tendencias-desarrollo-web-2024.html",
    "fecha": "2024-01-15",
    "autor": "Equipo TechSolutions",
    "categoria": "Desarrollo Web"
  }
]
```

---

## 11. Características y Funcionalidades {#features}

Controla qué funcionalidades están activas:

```json
"features": {
  "showWhatsappButton": boolean,      // Mostrar botón de WhatsApp
  "showCookieConsent": boolean,       // Mostrar aviso de cookies
  "enableBlog": boolean,              // Activar sección de blog
  "enableTestimonials": boolean,      // Mostrar testimonios
  "enableGallery": boolean,           // Activar galería
  "enableProjects": boolean,          // Mostrar proyectos
  "googleAnalyticsId": "string",      // ID de Google Analytics
  "facebookPixelId": "string"         // ID de Facebook Pixel
}
```

### Ejemplo:
```json
"features": {
  "showWhatsappButton": true,
  "showCookieConsent": true,
  "enableBlog": true,
  "enableTestimonials": true,
  "enableGallery": true,
  "enableProjects": true,
  "googleAnalyticsId": "G-XXXXXXXXXX",
  "facebookPixelId": "123456789012345"
}
```

---

## 🎯 Plantillas de Configuración por Industria

### Empresa de Reformas
Ver ejemplo en `config.json` actual (Jepeto Reformas)

### Restaurante
```json
{
  "company": {
    "name": "Restaurante El Buen Sabor",
    "slogan": "Sabores auténticos, momentos inolvidables"
  },
  "services": [
    {
      "name": "Menú del Día",
      "icon": "🍽️"
    },
    {
      "name": "Eventos Privados",
      "icon": "🎉"
    }
  ]
}
```

### Agencia Digital
```json
{
  "company": {
    "name": "Digital Agency Pro",
    "slogan": "Tu socio en transformación digital"
  },
  "services": [
    {
      "name": "Marketing Digital",
      "icon": "📈"
    },
    {
      "name": "Diseño UX/UI",
      "icon": "🎨"
    }
  ]
}
```

---

## ⚠️ Errores Comunes

1. **Comillas mal cerradas**: Asegúrate de que todos los strings están entre comillas
2. **Comas faltantes o extras**: JSON requiere comas entre elementos, pero NO después del último
3. **Rutas de imágenes incorrectas**: Verifica que las rutas coincidan con la ubicación real
4. **IDs duplicados**: Cada servicio, proyecto, etc. debe tener un ID único
5. **Formato de fecha incorrecto**: Usa formato ISO `YYYY-MM-DD`

---

## 🔍 Validación

Antes de publicar, valida tu `config.json`:
- Usa [JSONLint](https://jsonlint.com/)
- Abre la consola del navegador (F12) y verifica que no haya errores
- Prueba todas las páginas del sitio

---

## 📝 Changelog

Mantén un registro de cambios importantes:

```json
{
  "_changelog": [
    "2024-02-14: Configuración inicial para Cliente ABC",
    "2024-02-15: Actualizados servicios y colores"
  ]
}
```

(Nota: El campo `_changelog` no afecta el funcionamiento, es solo para documentación interna)

---

¿Necesitas más ayuda? Consulta `TEMPLATE_GUIDE.md` para ejemplos prácticos.
