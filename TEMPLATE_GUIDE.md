# 📝 Guía de Uso del Template Web

## 🎯 Objetivo

Este proyecto es una **plantilla base reutilizable** para crear páginas web profesionales. Está diseñado para que puedas crear sitios web para diferentes clientes cambiando únicamente:

- ✏️ **Textos** (nombres, descripciones, títulos)
- 🎨 **Imágenes** (logos, fotos, banners)
- 🎨 **Colores** (esquema de colores de la marca)
- 📞 **Información de contacto**

**NO necesitas tocar el código HTML, CSS o JavaScript.** Todo se configura desde un único archivo: `config.json`

---

## 🚀 Inicio Rápido (5 minutos)

### Paso 1: Abre el archivo de configuración

```bash
docs/config.json
```

### Paso 2: Modifica los datos de la empresa

Cambia el nombre, descripción, teléfono, email, etc:

```json
{
  "company": {
    "name": "TU EMPRESA",
    "slogan": "Tu eslogan aquí",
    "description": "Descripción de tu empresa"
  },
  "contact": {
    "phone": "+34XXXXXXXXX",
    "email": "contacto@tuempresa.com"
  }
}
```

### Paso 3: Cambia las imágenes

1. Reemplaza las imágenes en `docs/src/assets/images/`
2. Mantén los mismos nombres de archivo O actualiza las rutas en `config.json`

### Paso 4: Personaliza los servicios/productos

Edita la sección `services` en `config.json`:

```json
"services": [
  {
    "name": "Tu Servicio 1",
    "description": "Descripción del servicio",
    "icon": "🚀",
    "image": "/src/assets/images/servicios/servicio1.jpg"
  }
]
```

### Paso 5: Prueba tu sitio

Abre `docs/index.html` en tu navegador. ¡Listo!

---

## 📂 Estructura del Proyecto

```
jepeto-web/
├── docs/                           # Carpeta principal del sitio web
│   ├── config.json                # ⭐ ARCHIVO PRINCIPAL DE CONFIGURACIÓN
│   ├── index.html                 # Página de inicio
│   ├── servicios.html             # Página de servicios
│   ├── proyectos.html             # Página de proyectos
│   ├── galeria.html               # Galería de imágenes
│   ├── blog.html                  # Blog/Noticias
│   ├── sobre-nosotros.html        # Sobre la empresa
│   ├── contacto.html              # Formulario de contacto
│   │
│   └── src/
│       ├── js/
│       │   ├── config-loader.js   # Carga automática de configuración
│       │   ├── main.js            # Scripts principales
│       │   └── components.js      # Componentes reutilizables
│       │
│       ├── assets/
│       │   ├── images/            # 🖼️ REEMPLAZA TUS IMÁGENES AQUÍ
│       │   │   ├── logo.png
│       │   │   ├── hero-bg.jpg
│       │   │   ├── servicios/
│       │   │   ├── proyectos/
│       │   │   ├── galeria/
│       │   │   └── blog/
│       │   │
│       │   ├── fonts/             # Tipografías
│       │   └── data/              # Datos adicionales
│       │
│       └── styles/
│           └── style.css          # Estilos personalizados
│
├── TEMPLATE_GUIDE.md              # Esta guía
├── CONFIG_INSTRUCTIONS.md         # Documentación detallada del config.json
└── README.md                      # Información general
```

---

## 🎨 Personalización Avanzada

### Cambiar Colores del Tema

En `config.json`, modifica la sección `theme`:

```json
"theme": {
  "primaryColor": "#10b981",      // Color principal (botones, enlaces)
  "secondaryColor": "#059669",    // Color secundario
  "accentColor": "#f59e0b",       // Color de acento
  "textColor": "#1f2937",         // Color del texto
  "backgroundColor": "#ffffff"     // Fondo
}
```

### Agregar Nuevos Servicios

```json
"services": [
  {
    "id": "nuevo-servicio",
    "name": "Nombre del Servicio",
    "description": "Descripción completa",
    "icon": "🎯",
    "image": "/src/assets/images/servicios/nuevo.jpg",
    "features": [
      "Característica 1",
      "Característica 2",
      "Característica 3"
    ]
  }
]
```

### Agregar Proyectos Realizados

```json
"projects": [
  {
    "id": "proyecto-x",
    "name": "Nombre del Proyecto",
    "description": "Descripción del proyecto",
    "image": "/src/assets/images/proyectos/proyectoX.jpg",
    "category": "Categoría",
    "year": "2024",
    "duration": "2 semanas",
    "features": ["Detalle 1", "Detalle 2"]
  }
]
```

### Configurar el Formulario de Contacto

El formulario usa [FormSubmit.co](https://formsubmit.co/) (gratuito):

```json
"pages": {
  "contacto": {
    "formSubmitUrl": "https://formsubmit.co/TU-EMAIL@ejemplo.com",
    "formSuccessPage": "/gracias.html"
  }
}
```

---

## 📱 Redes Sociales

Actualiza los enlaces en `config.json`:

```json
"social": {
  "facebook": "https://facebook.com/tu-pagina",
  "instagram": "https://instagram.com/tu-usuario",
  "linkedin": "https://linkedin.com/company/tu-empresa",
  "twitter": "https://twitter.com/tu-usuario"
}
```

Si no usas alguna red social, déjala vacía: `"twitter": ""`

---

## 🖼️ Gestión de Imágenes

### Tamaños Recomendados:

- **Logo**: 200x80px (PNG con fondo transparente)
- **Favicon**: 32x32px
- **Hero/Banner**: 1920x1080px
- **Servicios**: 800x600px
- **Proyectos**: 1200x800px
- **Blog**: 800x600px
- **Galería**: 1200x800px

### Formatos Recomendados:

- `.jpg` para fotografías
- `.png` para logos y gráficos con transparencia
- `.webp` para mejor rendimiento (opcional)

### Cómo Cambiar Imágenes:

1. **Opción A** (Recomendada): Reemplaza los archivos existentes manteniendo los mismos nombres
2. **Opción B**: Sube imágenes con nuevos nombres y actualiza las rutas en `config.json`

---

## 🔧 Configuración SEO

Para mejorar el posicionamiento en Google:

```json
"seo": {
  "siteUrl": "https://tu-dominio.com",
  "keywords": "palabra1, palabra2, palabra3",
  "author": "Tu Empresa"
}
```

Y en cada página:

```json
"pages": {
  "index": {
    "title": "Título para Google",
    "description": "Descripción que aparecerá en resultados de búsqueda"
  }
}
```

---

## 📊 Análisis y Seguimiento

### Google Analytics

```json
"features": {
  "googleAnalyticsId": "G-XXXXXXXXXX"
}
```

### Facebook Pixel

```json
"features": {
  "facebookPixelId": "XXXXXXXXXX"
}
```

---

## ✅ Lista de Verificación para Nuevo Cliente

- [ ] Cambiar nombre de la empresa en `config.json`
- [ ] Actualizar información de contacto (teléfono, email, dirección)
- [ ] Reemplazar logo y favicon
- [ ] Cambiar imagen del hero/banner principal
- [ ] Actualizar colores del tema
- [ ] Modificar servicios/productos
- [ ] Agregar proyectos realizados (si aplica)
- [ ] Actualizar enlaces de redes sociales
- [ ] Configurar formulario de contacto con email del cliente
- [ ] Cambiar todas las imágenes de servicios
- [ ] Revisar y actualizar textos de todas las páginas
- [ ] Configurar Google Analytics (si aplica)
- [ ] Probar el sitio en diferentes navegadores
- [ ] Probar el sitio en móvil y tablet
- [ ] Verificar que todos los enlaces funcionan
- [ ] Probar el formulario de contacto

---

## 🌐 Publicación

### Opción 1: GitHub Pages (Gratis)

1. Sube el proyecto a GitHub
2. Ve a Settings → Pages
3. Selecciona la carpeta `docs/` como fuente
4. Tu sitio estará en: `https://tu-usuario.github.io/tu-repositorio/`

### Opción 2: Netlify (Gratis)

1. Conecta tu repositorio de GitHub
2. Configura Build settings:
   - Base directory: `docs`
   - Publish directory: `docs`
3. Deploy!

### Opción 3: Hosting Tradicional

1. Sube todo el contenido de la carpeta `docs/` a tu servidor
2. Asegúrate de que `index.html` sea la página principal

---

## 💡 Consejos y Mejores Prácticas

1. **Haz una copia de seguridad** antes de hacer cambios importantes
2. **Prueba en local** antes de publicar
3. **Optimiza las imágenes** antes de subirlas (usa herramientas como TinyPNG)
4. **Mantén nombres de archivos descriptivos** (ej: `servicio-pintura.jpg` mejor que `img1.jpg`)
5. **No modifiques los archivos .html** a menos que sea necesario
6. **Usa texto descriptivo** para mejor SEO
7. **Actualiza regularmente** el blog con contenido nuevo

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo cambiar el diseño?**  
R: Sí, pero requerirá modificar los archivos HTML y CSS. Esta plantilla está diseñada para cambios de contenido, no de estructura.

**P: ¿Funciona sin internet?**  
R: Sí, excepto por Tailwind CSS que se carga desde CDN. Para uso offline, descarga Tailwind localmente.

**P: ¿Puedo agregar más páginas?**  
R: Sí, duplica una página existente y agrégala a la navegación en los archivos HTML.

**P: ¿Es responsive?**  
R: Sí, está optimizado para móvil, tablet y escritorio usando Tailwind CSS.

**P: ¿Necesito conocimientos de programación?**  
R: No para cambios básicos. Solo edita el archivo `config.json` y reemplaza imágenes.

---

## 📞 Soporte

Para más ayuda, consulta:
- `CONFIG_INSTRUCTIONS.md` - Documentación detallada de cada campo
- Código de ejemplo en `config.json`
- Comentarios en los archivos JavaScript

---

## 🎉 ¡Ya está! Tu sitio está listo

Con esta plantilla puedes crear sitios web profesionales para múltiples clientes en minutos, no días.

**Próximos pasos sugeridos:**
1. Crea una carpeta de proyecto para cada cliente
2. Haz una copia de esta plantilla para cada uno
3. Personaliza el `config.json` de cada cliente
4. ¡Publica y cobra! 💰
