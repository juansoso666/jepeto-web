# 🚀 Guía de Inicio Rápido

## ¿Qué acabas de crear?

Has creado un **sistema de plantillas web completamente reutilizable**. Ahora puedes:

✅ Crear sitios web profesionales en **5-10 minutos**  
✅ Sin tocar código HTML, CSS o JavaScript  
✅ Solo editando un archivo: `docs/config.json`  
✅ Cambiando imágenes en `docs/src/assets/images/`

---

## 📋 Para tu PRIMER cliente (ahora mismo)

### 1. Ejecuta el script de configuración

```bash
./setup-template.sh
```

El script te preguntará:
- Nombre de la empresa
- Eslogan
- Teléfono y email
- Dirección
- URL del sitio
- Colores de la marca

### 2. Reemplaza las imágenes

```bash
# Navega a la carpeta de imágenes
cd docs/src/assets/images/

# Reemplaza estos archivos con los del cliente:
# - logo.png (logo de la empresa)
# - favicon.png (icono del navegador)
# - hero-bg.jpg (imagen principal/banner)
```

### 3. Abre y prueba

```bash
# Abre el sitio en tu navegador
open docs/index.html
# o en Linux:
# xdg-open docs/index.html
```

### 4. Personaliza los servicios

Edita `docs/config.json` y busca la sección `"services"`:

```json
"services": [
  {
    "name": "Nombre del Servicio",
    "description": "Descripción",
    "icon": "🚀",
    "image": "/src/assets/images/servicios/servicio1.jpg",
    "features": ["Característica 1", "Característica 2"]
  }
]
```

Cambia los nombres, descripciones e iconos según los servicios del cliente.

### 5. ¡Publica!

**Opción A: GitHub Pages (gratis)**
```bash
# Sube a GitHub
git init
git add .
git commit -m "Sitio web de [Cliente]"
git remote add origin https://github.com/tu-usuario/nombre-repo.git
git push -u origin main

# Activa GitHub Pages en Settings → Pages → Source: docs/
```

**Opción B: Netlify (gratis)**
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `docs/` a Netlify Drop
3. ¡Listo!

---

## 🎯 Para tu SEGUNDO cliente (más rápido)

### 1. Crea una copia del proyecto

```bash
# Crea una carpeta nueva para el cliente
cp -r jepeto-web cliente-abc-web
cd cliente-abc-web
```

### 2. Elige un ejemplo base

```bash
# ¿Es un restaurante?
cp examples/config-restaurante.json docs/config.json

# ¿Es una agencia digital?
cp examples/config-agencia-digital.json docs/config.json

# ¿Otro tipo de negocio?
# Usa el config.json actual y personalízalo
```

### 3. Ejecuta el script

```bash
./setup-template.sh
```

### 4. Reemplaza imágenes y publica

Mismo proceso que antes. **¡Listo en 5-10 minutos!**

---

## 📚 Archivos Importantes

- `docs/config.json` - **TU ARCHIVO MÁS IMPORTANTE**
- `TEMPLATE_GUIDE.md` - Guía completa y detallada
- `CONFIG_INSTRUCTIONS.md` - Referencia de cada campo
- `examples/` - Ejemplos de configuración
- `docs/test-config.html` - Página de prueba del sistema

---

## 💡 Tips Pro

### Crea una plantilla para cada industria

```bash
# Guarda configuraciones base
cp docs/config.json templates/config-restaurante-base.json
cp docs/config.json templates/config-agencia-base.json
cp docs/config.json templates/config-inmobiliaria-base.json
```

### Automatiza con scripts

Crea un script `nuevo-cliente.sh`:

```bash
#!/bin/bash
CLIENTE=$1
mkdir "$CLIENTE-web"
cp -r template-base/* "$CLIENTE-web/"
cd "$CLIENTE-web"
./setup-template.sh
```

Uso:
```bash
./nuevo-cliente.sh "TechCorp"
```

### Mantén un checklist

```markdown
## Checklist por Cliente

- [ ] Ejecutar setup-template.sh
- [ ] Reemplazar logo y favicon
- [ ] Actualizar hero image
- [ ] Personalizar servicios
- [ ] Agregar proyectos (si aplica)
- [ ] Verificar todos los enlaces
- [ ] Probar formulario de contacto
- [ ] Probar en móvil
- [ ] Publicar
- [ ] Entregar al cliente
- [ ] Cobrar 💰
```

---

## 🎨 Personalización Rápida

### Cambiar colores de marca

```json
"theme": {
  "primaryColor": "#TU-COLOR-AQUI",
  "secondaryColor": "#TU-COLOR-AQUI"
}
```

Herramientas útiles:
- [Coolors.co](https://coolors.co/) - Generador de paletas
- [Adobe Color](https://color.adobe.com/) - Rueda de colores

### Agregar servicios rápido

Duplica un servicio existente y cambia:
- `id`: único para cada servicio
- `name`: nombre del servicio
- `description`: descripción
- `icon`: emoji representativo
- `image`: ruta a la imagen
- `features`: lista de características

---

## ⚠️ Errores Comunes

### "No se carga la configuración"

**Causa**: Archivo `config.json` con errores de sintaxis  
**Solución**: Valida en [jsonlint.com](https://jsonlint.com/)

### "Las imágenes no se ven"

**Causa**: Rutas incorrectas en config.json  
**Solución**: Asegúrate de que las rutas empiecen con `/src/assets/images/`

### "El formulario no funciona"

**Causa**: Email no configurado  
**Solución**: Actualiza `pages.contacto.formSubmitUrl` con el email del cliente

---

## 📊 Modelo de Negocio Sugerido

### Paquetes

**🥉 Básico - €299**
- Sitio con config.json personalizado
- 5 páginas estándar
- Imágenes del cliente
- Publicación en GitHub Pages

**🥈 Estándar - €499**
- Todo lo del Básico
- Personalización de servicios
- Galería de proyectos
- Blog configurado
- Dominio personalizado

**🥇 Premium - €799**
- Todo lo del Estándar
- SEO optimizado
- Google Analytics
- Formulario personalizado
- 3 meses de soporte

### Servicios Adicionales

- Actualización de contenido: €50/hora
- Nuevas imágenes: €100
- Nueva sección: €150
- Mantenimiento mensual: €99/mes

---

## 🎯 Siguientes Pasos

1. **Practica**: Crea 2-3 sitios de prueba para diferentes industrias
2. **Optimiza**: Guarda tus configuraciones favoritas en `templates/`
3. **Promociona**: Muestra ejemplos en tu portfolio
4. **Cobra**: Ofrece paquetes a empresas locales
5. **Escala**: Automatiza todo lo posible

---

## 💬 ¿Preguntas?

- Consulta `TEMPLATE_GUIDE.md` para guía detallada
- Revisa `CONFIG_INSTRUCTIONS.md` para referencia completa
- Mira `examples/` para inspiración

---

## 🎉 ¡Felicidades!

Ya tienes un sistema profesional para crear sitios web rapidísimo.

**Tiempo estimado por sitio**: 5-30 minutos  
**Precio sugerido**: €299-€799  
**Potencial de ingresos**: ¡Ilimitado! 🚀

---

**Pro tip final**: Crea tu propio sitio con este template para mostrar tu servicio. Meta, ¿no? 😎
