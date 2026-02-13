# 🚀 Guía Completa de Despliegue - Jepeto Reformas

## 📋 Índice
1. [Fusionar las Mejoras](#1-fusionar-las-mejoras)
2. [Opciones de Hosting](#2-opciones-de-hosting)
3. [Configuración de Dominio](#3-configuración-de-dominio)
4. [Despliegue Paso a Paso](#4-despliegue-paso-a-paso)
5. [Post-Despliegue](#5-post-despliegue)

---

## 1. Fusionar las Mejoras

### Paso 1.1: Revisar el Pull Request en GitHub

1. Ve a tu repositorio: https://github.com/juansoso666/jepeto-web
2. Busca la pestaña "Pull requests"
3. Encontrarás un PR titulado: **"Mejoras de SEO, Accesibilidad, Seguridad y UX"**
4. Revisa los cambios:
   - 11 archivos modificados
   - +240 líneas agregadas, -58 líneas eliminadas
   - 0 vulnerabilidades de seguridad

### Paso 1.2: Fusionar los Cambios

```bash
# Opción A: Desde GitHub (Recomendado)
# 1. Haz clic en "Merge pull request" en GitHub
# 2. Selecciona "Squash and merge" o "Merge commit"
# 3. Confirma el merge

# Opción B: Desde línea de comandos
cd /ruta/a/tu/proyecto
git checkout main
git pull origin main
git merge copilot/improve-website-design
git push origin main
```

---

## 2. Opciones de Hosting

### 🟢 Opción 1: **GitHub Pages** (GRATIS - Recomendado para empezar)

**Ventajas:**
- ✅ 100% Gratis
- ✅ SSL/HTTPS automático
- ✅ Deploy automático con cada commit
- ✅ Fácil configuración

**Limitaciones:**
- ⚠️ Solo sitios estáticos (perfecto para tu caso)
- ⚠️ Sin servidor backend (pero usas FormSubmit.co)

**Configuración:**

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Selecciona "Deploy from a branch"
4. Branch: Selecciona `main` y carpeta `/jepeto-reformas`
5. Clic en "Save"
6. Tu sitio estará disponible en: `https://juansoso666.github.io/jepeto-web/`

**Configurar dominio personalizado:**
```
1. Compra dominio jepeto.es
2. En tu proveedor de dominio (GoDaddy, Namecheap, etc.):
   - Añade registro CNAME: www → juansoso666.github.io
   - Añade registros A para apex domain:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
3. En GitHub Pages, añade "jepeto.es" como custom domain
4. Espera 24-48h para propagación DNS
```

---

### 🟡 Opción 2: **Netlify** (GRATIS con funciones extras)

**Ventajas:**
- ✅ Gratis hasta 100GB/mes
- ✅ Deploy automático desde Git
- ✅ Formularios nativos (alternativa a FormSubmit.co)
- ✅ SSL automático
- ✅ CDN global rápido

**Configuración:**

1. Ve a https://netlify.com
2. Sign up con tu cuenta de GitHub
3. "New site from Git" → Selecciona tu repositorio
4. Configure:
   - Build command: (dejar vacío)
   - Publish directory: `jepeto-reformas`
5. Deploy!

Tu sitio estará en: `https://tu-sitio.netlify.app`

**Dominio personalizado:**
- Settings → Domain management → Add custom domain
- Sigue las instrucciones de DNS

---

### 🟡 Opción 3: **Vercel** (GRATIS - Optimizado para performance)

**Ventajas:**
- ✅ Gratis para proyectos personales
- ✅ Deploy ultra rápido
- ✅ SSL automático
- ✅ Excelente performance

**Configuración:**

1. Ve a https://vercel.com
2. Sign up con GitHub
3. Import tu repositorio
4. Configure:
   - Framework: Other
   - Root Directory: `jepeto-reformas`
5. Deploy!

---

### 🔵 Opción 4: **Hosting Tradicional** (Desde €3/mes)

Proveedores españoles recomendados:
- **Webempresa**: ~8€/mes, excelente soporte en español
- **Raiola Networks**: ~5€/mes, servidores en España
- **SiteGround**: ~4€/mes, buena performance
- **Hostinger**: ~3€/mes, económico

**Pasos generales:**

1. Contrata el hosting
2. Accede a cPanel o panel de control
3. Sube los archivos vía FTP o File Manager:
   ```
   /public_html/
   ├── index.html
   ├── servicios.html
   ├── galeria.html
   └── src/
       ├── js/
       ├── styles/
       └── assets/
   ```
4. Configura SSL (Let's Encrypt gratuito)
5. Apunta tu dominio a los nameservers del hosting

---

## 3. Configuración de Dominio

### Comprar Dominio jepeto.es

**Proveedores recomendados:**
- **Namecheap**: ~12€/año (.es)
- **GoDaddy**: ~15€/año
- **Dondominio** (España): ~10€/año
- **Arsys** (España): ~8€/año

### Configuración DNS (ejemplo para jepeto.es)

```
Tipo    Nombre    Valor                           TTL
----    ------    -----                           ---
A       @         185.199.108.153                 3600
A       @         185.199.109.153                 3600
A       @         185.199.110.153                 3600
A       @         185.199.111.153                 3600
CNAME   www       juansoso666.github.io           3600
```

---

## 4. Despliegue Paso a Paso (GitHub Pages)

### 📦 Preparación

```bash
# 1. Clonar tu repositorio
git clone https://github.com/juansoso666/jepeto-web.git
cd jepeto-web

# 2. Asegúrate de estar en main
git checkout main

# 3. Fusionar las mejoras (si no lo hiciste desde GitHub)
git merge copilot/improve-website-design

# 4. Push
git push origin main
```

### 🚀 Configurar GitHub Pages

1. **Ir a Settings**
   - https://github.com/juansoso666/jepeto-web/settings/pages

2. **Configurar Source**
   ```
   Source: Deploy from a branch
   Branch: main
   Folder: /jepeto-reformas
   ```

3. **Click "Save"**

4. **Esperar 2-3 minutos**
   - GitHub construirá tu sitio
   - Verás un mensaje: "Your site is live at..."

5. **Verificar**
   - Visita: https://juansoso666.github.io/jepeto-web/

### 🎯 Configurar Dominio Personalizado (Opcional)

1. **En GitHub Pages Settings:**
   - Custom domain: `jepeto.es`
   - ✅ Enforce HTTPS (marcar esta opción)

2. **Crear archivo CNAME en jepeto-reformas:**
   ```bash
   cd jepeto-reformas
   echo "jepeto.es" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. **En tu proveedor de dominio:**
   - Configurar los registros DNS (ver sección 3)

---

## 5. Post-Despliegue

### ✅ Verificaciones Esenciales

```bash
# Verificar que todos los enlaces funcionen
✅ https://jepeto.es → Página principal
✅ https://jepeto.es/servicios.html → Servicios
✅ https://jepeto.es/galeria.html → Galería
✅ https://jepeto.es/blog.html → Blog
✅ https://jepeto.es/contacto.html → Contacto
✅ https://jepeto.es/sobre-nosotros.html → Nosotros

# Verificar formulario de contacto
✅ Llenar formulario y enviar
✅ Verificar que llegue email a info@jepeto.es

# Verificar WhatsApp
✅ Click en botón WhatsApp
✅ Debe abrir chat con +34 652 565 961

# Verificar responsivo
✅ Probar en móvil
✅ Menú hamburguesa funciona
✅ Lightbox de galería funciona
```

### 📊 Configurar Analytics (Opcional)

**Google Analytics 4:**

1. Ve a https://analytics.google.com
2. Crear propiedad nueva
3. Obtén el ID de medición (G-XXXXXXXXXX)
4. Añade antes de `</head>` en todas las páginas:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 🔍 Configurar Google Search Console

1. Ve a https://search.google.com/search-console
2. Añadir propiedad: jepeto.es
3. Verificar propiedad (vía DNS o archivo HTML)
4. Enviar sitemap: https://jepeto.es/sitemap.xml (crear después)

### 📝 Crear Sitemap (Opcional)

Crea `jepeto-reformas/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jepeto.es/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://jepeto.es/servicios.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jepeto.es/proyectos.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jepeto.es/galeria.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jepeto.es/blog.html</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jepeto.es/sobre-nosotros.html</loc>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://jepeto.es/contacto.html</loc>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## 🎯 Resumen de Comandos Rápidos

### Deploy Completo en GitHub Pages (5 minutos)

```bash
# 1. Fusionar mejoras
git checkout main
git merge copilot/improve-website-design
git push origin main

# 2. Ir a GitHub Settings → Pages
# 3. Seleccionar: main branch, /jepeto-reformas folder
# 4. Save
# 5. Esperar 2-3 minutos
# 6. Visitar: https://juansoso666.github.io/jepeto-web/
```

### Deploy en Netlify (3 minutos)

```bash
# 1. Conectar GitHub a Netlify
# 2. Import repositorio
# 3. Publish directory: jepeto-reformas
# 4. Deploy!
```

---

## 💰 Costos Estimados

| Opción | Costo Mensual | Costo Anual | Incluye |
|--------|---------------|-------------|---------|
| **GitHub Pages** | €0 | €0 | Hosting + SSL |
| **GitHub Pages + Dominio** | ~€1 | ~€10 | Hosting + SSL + jepeto.es |
| **Netlify (Free)** | €0 | €0 | Hosting + SSL + Formularios |
| **Netlify + Dominio** | ~€1 | ~€10 | Todo incluido |
| **Hosting Tradicional** | €3-8 | €36-96 | cPanel + SSL + Email |

---

## 🆘 Soporte y Problemas Comunes

### ❓ "Mi sitio no carga"
- Espera 5-10 minutos después del deploy
- Limpia caché del navegador (Ctrl+Shift+R)
- Verifica que la URL sea correcta

### ❓ "Las imágenes no se ven"
- Verifica que las rutas sean relativas: `/src/assets/images/`
- En GitHub Pages, asegúrate de que los archivos existan

### ❓ "El formulario no envía"
- Verifica que FormSubmit.co esté configurado
- Comprueba que el email sea correcto: info@jepeto.es
- Verifica conexión a internet

### ❓ "El dominio no funciona"
- DNS tarda 24-48h en propagarse
- Verifica registros con: https://dnschecker.org/
- Asegúrate de que CNAME apunte correctamente

---

## 📞 Contacto para Soporte

Si necesitas ayuda:
1. Revisa esta guía completa
2. Busca el error específico en Google
3. Consulta documentación oficial:
   - GitHub Pages: https://docs.github.com/pages
   - Netlify: https://docs.netlify.com
   - Vercel: https://vercel.com/docs

---

## ✅ Checklist Final

- [ ] Fusionado el PR en GitHub
- [ ] Elegida plataforma de hosting
- [ ] Configurado deploy
- [ ] Sitio accesible en URL pública
- [ ] Probados todos los enlaces
- [ ] Formulario de contacto funciona
- [ ] WhatsApp funciona
- [ ] Probado en móvil
- [ ] (Opcional) Dominio personalizado configurado
- [ ] (Opcional) Google Analytics añadido
- [ ] (Opcional) Google Search Console configurado

---

🎉 **¡Felicidades! Tu sitio web está en línea.**

**URL del sitio:** https://juansoso666.github.io/jepeto-web/

Para cualquier actualización futura, simplemente haz commit y push a la rama main, y GitHub Pages actualizará automáticamente tu sitio.
