# 📁 Ejemplos de Configuración

Esta carpeta contiene ejemplos de configuración para diferentes tipos de negocios. Puedes usar estos archivos como punto de partida para tu proyecto.

## 🎯 ¿Cómo usar estos ejemplos?

### Opción 1: Copiar y reemplazar
```bash
# Desde la raíz del proyecto
cp examples/config-restaurante.json docs/config.json
```

### Opción 2: Usar como referencia
Abre el ejemplo que más se parezca a tu negocio y copia las secciones que necesites a tu `docs/config.json`.

---

## 📋 Ejemplos Disponibles

### 1. config-restaurante.json
**Para:** Restaurantes, cafeterías, bares, catering

**Características:**
- Menú del día
- Carta y especialidades
- Eventos privados
- Catering
- Reservas online
- Horarios personalizados

**Ideal para:**
- Restaurantes tradicionales
- Comida rápida gourmet
- Cafeterías
- Bares de tapas
- Servicios de catering

---

### 2. config-agencia-digital.json
**Para:** Agencias digitales, estudios de diseño, consultoras tecnológicas

**Características:**
- Marketing digital
- Desarrollo web
- SEO/SEM
- Diseño UX/UI
- Social Media
- Branding
- Portfolio de proyectos

**Ideal para:**
- Agencias de marketing
- Estudios de diseño
- Consultoras IT
- Freelancers digitales
- Empresas de desarrollo

---

## 🛠️ Personalización

Después de copiar un ejemplo, personaliza:

1. **Información básica**
   - Nombre de la empresa
   - Descripción
   - Logo y favicon

2. **Contacto**
   - Teléfono
   - Email
   - Dirección

3. **Servicios**
   - Ajusta los servicios a tu negocio
   - Cambia iconos y descripciones
   - Actualiza imágenes

4. **Colores**
   - Adapta los colores a tu marca
   - Usa herramientas como [Coolors.co](https://coolors.co/)

5. **Imágenes**
   - Reemplaza todas las imágenes
   - Mantén los mismos nombres o actualiza las rutas

---

## 💡 Crear tu propio ejemplo

Si tu negocio es diferente a los ejemplos, puedes:

1. Empezar con `docs/config.json` actual
2. Modificar las secciones relevantes
3. Eliminar las que no necesites
4. Agregar nuevas si es necesario

### Estructura básica mínima:
```json
{
  "company": { /* Datos de tu empresa */ },
  "contact": { /* Información de contacto */ },
  "seo": { /* SEO y metadatos */ },
  "theme": { /* Colores de tu marca */ },
  "pages": { /* Configuración de páginas */ },
  "services": [ /* Tus servicios/productos */ ]
}
```

---

## 📚 Más ayuda

- `TEMPLATE_GUIDE.md` - Guía completa de uso
- `CONFIG_INSTRUCTIONS.md` - Documentación detallada de cada campo
- `setup-template.sh` - Script de configuración asistida

---

## 🎨 Ideas para otros tipos de negocio

Si necesitas adaptar el template para otro tipo de negocio, aquí hay algunas ideas:

### Gimnasio / Centro Deportivo
- Servicios: Clases grupales, entrenamiento personal, spa
- Proyectos: Transformaciones de clientes (antes/después)
- Blog: Rutinas, nutrición, consejos fitness

### Clínica / Consultorio Médico
- Servicios: Especialidades médicas
- Proyectos: Casos de éxito (anónimos)
- Blog: Consejos de salud, prevención

### Tienda / E-commerce
- Servicios: Productos destacados
- Proyectos: Colecciones especiales
- Blog: Tendencias, guías de compra

### Inmobiliaria
- Servicios: Compra, venta, alquiler
- Proyectos: Propiedades destacadas
- Blog: Mercado inmobiliario, consejos

### Centro Educativo
- Servicios: Cursos y programas
- Proyectos: Estudiantes destacados
- Blog: Educación, metodología

### Taller Mecánico / Automovilística
- Servicios: Mantenimiento, reparaciones, ITV
- Proyectos: Restauraciones, trabajos especiales
- Blog: Consejos de mantenimiento

---

## 🤝 Compartir tu ejemplo

Si creas una configuración para un tipo de negocio no incluido aquí, considera compartirla:

1. Anonimiza los datos (usa datos de ejemplo)
2. Guárdala como `config-[tipo-negocio].json`
3. Compártela con la comunidad

---

## ⚠️ Nota Importante

Los ejemplos incluyen datos ficticios. Asegúrate de:
- ✅ Cambiar TODOS los datos personales
- ✅ Usar tu propio email en el formulario
- ✅ Actualizar todas las imágenes
- ✅ Revisar enlaces y URLs
- ✅ Probar el sitio antes de publicar

---

¿Preguntas? Consulta la documentación principal o abre un issue en GitHub.
