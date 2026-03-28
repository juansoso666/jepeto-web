# 📖 Ejemplo Completo: De Cero a Sitio Publicado

Este documento muestra paso a paso cómo usar el template para crear un sitio web real.

---

## 🎯 Caso Ejemplo: "FitZone Gym"

**Cliente**: Gimnasio local que necesita presencia web  
**Presupuesto**: €499  
**Tiempo estimado**: 20 minutos  

---

## Paso 1: Preparar el Proyecto (2 min)

```bash
# Clonar o copiar el template
cp -r jepeto-web fitzone-web
cd fitzone-web

# Verificar que todo está en su lugar
ls -la docs/config.json  # ✓ Debe existir
ls -la setup-template.sh  # ✓ Debe existir
```

---

## Paso 2: Configuración Básica (3 min)

### Opción A: Usar el script interactivo

```bash
./setup-template.sh
```

Respuestas para FitZone:
- **Nombre empresa**: FitZone Gym
- **Eslogan**: Transforma tu cuerpo, transforma tu vida
- **Descripción**: Centro deportivo con equipamiento de última generación
- **Teléfono**: +34987654321
- **Email**: info@fitzone.com
- **WhatsApp**: +34987654321
- **Dirección**: Avenida del Deporte 45
- **Ciudad**: Valencia
- **Código Postal**: 46001
- **URL**: https://www.fitzone.com
- **Color primario**: #e11d48 (rojo deportivo)
- **Color secundario**: #be123c

### Opción B: Editar manualmente

Abre `docs/config.json` y modifica:

```json
{
  "company": {
    "name": "FitZone Gym",
    "slogan": "Transforma tu cuerpo, transforma tu vida",
    "description": "Centro deportivo con equipamiento de última generación y entrenadores certificados",
    "founded": "2018",
    "logo": "/src/assets/images/logo.png",
    "favicon": "/src/assets/images/favicon.png"
  },
  "contact": {
    "phone": "+34987654321",
    "email": "info@fitzone.com",
    "whatsapp": "+34987654321",
    "address": {
      "street": "Avenida del Deporte 45",
      "city": "Valencia",
      "postalCode": "46001",
      "country": "España",
      "countryCode": "ES"
    }
  }
}
```

---

## Paso 3: Personalizar Servicios (5 min)

Reemplaza los servicios en `config.json`:

```json
"services": [
  {
    "id": "musculacion",
    "name": "Musculación",
    "description": "Zona de pesas con equipamiento profesional y entrenadores personales",
    "icon": "💪",
    "image": "/src/assets/images/servicios/musculacion.jpg",
    "features": [
      "Mancuernas hasta 50kg",
      "Máquinas Technogym",
      "Entrenador incluido",
      "Rutinas personalizadas"
    ]
  },
  {
    "id": "cardio",
    "name": "Cardio",
    "description": "Amplia zona cardiovascular con equipos de última generación",
    "icon": "🏃",
    "image": "/src/assets/images/servicios/cardio.jpg",
    "features": [
      "Cintas de correr",
      "Bicicletas estáticas",
      "Elípticas",
      "Monitores cardíacos"
    ]
  },
  {
    "id": "clases-grupales",
    "name": "Clases Grupales",
    "description": "Variedad de clases para todos los niveles y objetivos",
    "icon": "🧘",
    "image": "/src/assets/images/servicios/clases.jpg",
    "features": [
      "Yoga y Pilates",
      "Spinning",
      "Zumba",
      "CrossFit"
    ]
  },
  {
    "id": "entrenamiento-personal",
    "name": "Entrenamiento Personal",
    "description": "Sesiones individuales con entrenadores certificados",
    "icon": "🎯",
    "image": "/src/assets/images/servicios/personal.jpg",
    "features": [
      "Plan personalizado",
      "Seguimiento nutricional",
      "Mediciones periódicas",
      "Horarios flexibles"
    ]
  },
  {
    "id": "spa",
    "name": "Spa & Wellness",
    "description": "Zona de relajación con sauna, jacuzzi y masajes",
    "icon": "🛁",
    "image": "/src/assets/images/servicios/spa.jpg",
    "features": [
      "Sauna finlandesa",
      "Jacuzzi",
      "Masajes deportivos",
      "Crioterapia"
    ]
  },
  {
    "id": "nutricion",
    "name": "Nutrición Deportiva",
    "description": "Asesoramiento nutricional personalizado",
    "icon": "🥗",
    "image": "/src/assets/images/servicios/nutricion.jpg",
    "features": [
      "Planes nutricionales",
      "Dietas personalizadas",
      "Suplementación",
      "Seguimiento semanal"
    ]
  }
]
```

---

## Paso 4: Preparar Imágenes (5 min)

### Buscar/Crear Imágenes

Fuentes recomendadas (con licencia):
- [Unsplash](https://unsplash.com/) - Fotos gratis
- [Pexels](https://pexels.com/) - Videos y fotos gratis
- Cliente proporciona sus propias fotos

### Organizar Imágenes

```bash
cd docs/src/assets/images

# Estructura necesaria:
# logo.png - Logo del gimnasio
# favicon.png - Icono 32x32
# hero-bg.jpg - Banner principal (gym en acción)
# servicios/musculacion.jpg
# servicios/cardio.jpg
# servicios/clases.jpg
# servicios/personal.jpg
# servicios/spa.jpg
# servicios/nutricion.jpg
```

### Optimizar Imágenes (opcional pero recomendado)

Usa herramientas online:
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app/) - Comprimir y convertir

---

## Paso 5: Personalizar Páginas (3 min)

Actualiza los textos específicos de cada página en `config.json`:

```json
"pages": {
  "index": {
    "heroTitle": "Alcanza tu mejor versión",
    "heroSubtitle": "Entrena en FitZone, el gimnasio más completo de Valencia"
  },
  "sobreNosotros": {
    "headerTitle": "Nuestra Historia",
    "headerSubtitle": "Más de 5 años transformando vidas"
  }
}
```

---

## Paso 6: Probar Localmente (2 min)

```bash
# Opción 1: Abrir directamente
open docs/index.html

# Opción 2: Con servidor local (recomendado)
cd docs
python3 -m http.server 8080

# Abre en navegador: http://localhost:8080
```

### Checklist de Pruebas

- [ ] Logo se ve correctamente
- [ ] Colores están aplicados
- [ ] 6 servicios se muestran
- [ ] Información de contacto es correcta
- [ ] Todas las páginas funcionan
- [ ] Formulario de contacto tiene email correcto
- [ ] Se ve bien en móvil (inspeccionar → responsive)

---

## Paso 7: Publicar (5 min)

### Opción A: GitHub Pages

```bash
# Inicializar repositorio
git init
git add .
git commit -m "FitZone Gym website"

# Crear repo en GitHub (fitzone-web)
git remote add origin https://github.com/tu-usuario/fitzone-web.git
git branch -M main
git push -u origin main

# En GitHub:
# Settings → Pages → Source: main branch /docs folder
# ✓ Tu sitio estará en: https://tu-usuario.github.io/fitzone-web/
```

### Opción B: Netlify

```bash
# Instalar Netlify CLI (una vez)
npm install -g netlify-cli

# Iniciar sesión
netlify login

# Deploy
cd docs
netlify deploy --prod
# Sigue las instrucciones
```

### Opción C: Hosting Tradicional

```bash
# Conectar por FTP/SFTP y subir contenido de docs/
# Asegurarse de que index.html sea la página principal
```

---

## Paso 8: Configurar Dominio Personalizado (Opcional)

### Si el cliente tiene dominio propio:

**GitHub Pages:**
1. Crea archivo `docs/CNAME` con: `www.fitzone.com`
2. En el DNS del dominio, crea registro CNAME apuntando a `tu-usuario.github.io`

**Netlify:**
1. En dashboard de Netlify → Domain settings
2. Add custom domain
3. Seguir instrucciones DNS

---

## Paso 9: Entregar al Cliente

### Documentación para el Cliente

Crea un documento `GUIA_CLIENTE.md`:

```markdown
# Guía para Actualizar tu Sitio Web - FitZone

## Cambiar Textos

1. Abre el archivo `docs/config.json`
2. Busca el texto que quieres cambiar
3. Modifica y guarda
4. Vuelve a subir a GitHub o Netlify

## Cambiar Imágenes

1. Prepara tus imágenes (JPG o PNG)
2. Súbelas a `docs/src/assets/images/`
3. Mantén los mismos nombres o actualiza config.json

## Formulario de Contacto

Los mensajes llegarán a: info@fitzone.com
Para cambiar el email, edita en config.json:
`pages.contacto.formSubmitUrl`

## Soporte

Para cambios mayores, contacta a: tu-email@ejemplo.com
Tarifa: €50/hora
```

---

## 💰 Facturación

### Paquete Contratado: Estándar (€499)

**Incluye:**
- ✅ Sitio web de 7 páginas
- ✅ Diseño responsive
- ✅ 6 servicios configurados
- ✅ Formulario de contacto
- ✅ Integración WhatsApp
- ✅ SEO básico
- ✅ Publicación en hosting gratuito
- ✅ Guía de actualización

**Tiempo invertido:** ~20 minutos  
**Ganancia por hora:** ~€1,497/h 🚀

---

## 📊 Resultados

**Antes:**
- Cliente sin presencia web
- Sin formulario de contacto online
- No encontrable en Google

**Después:**
- Sitio web profesional
- Sistema de contacto funcional
- Base para posicionamiento SEO
- Cliente satisfecho ✨

---

## 🎯 Próximos Proyectos

Con el mismo template puedes crear:
- Restaurante (usa `examples/config-restaurante.json`)
- Agencia digital (usa `examples/config-agencia-digital.json`)
- Clínica dental
- Peluquería / Spa
- Taller mecánico
- Inmobiliaria
- Centro educativo
- ¡Y mucho más!

---

## 💡 Tips para Maximizar Ganancias

1. **Crea paquetes**: Básico (€299), Estándar (€499), Premium (€799)
2. **Ofrece mantenimiento**: €99/mes para actualizaciones
3. **Vende servicios adicionales**: SEO (€199), Google Ads (€299/mes)
4. **Automatiza**: Crea scripts para tareas repetitivas
5. **Delega**: Externaliza el diseño gráfico si es necesario
6. **Escala**: 5 sitios/semana = €2,495/semana = €9,980/mes 💰

---

## ✅ Checklist Final

- [x] Configuración completada
- [x] Servicios personalizados
- [x] Imágenes reemplazadas
- [x] Probado localmente
- [x] Publicado online
- [x] Dominio configurado (si aplica)
- [x] Cliente entrenado
- [x] Documentación entregada
- [x] Factura enviada
- [x] Pago recibido 💰

---

**¡Felicidades! Has completado tu primer proyecto con el template.**

Tiempo total: 20-30 minutos  
Ingresos: €499  
Satisfacción del cliente: ⭐⭐⭐⭐⭐

**¿Siguiente cliente? ¡A por él!** 🚀
