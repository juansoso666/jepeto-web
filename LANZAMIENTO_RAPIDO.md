# 🚀 Lanzamiento Rápido - Jepeto Reformas

## ⚡ Despliegue en 5 Minutos (GitHub Pages - GRATIS)

### Paso 1: Fusionar Mejoras
1. Ve a: https://github.com/juansoso666/jepeto-web/pulls
2. Haz clic en el Pull Request de mejoras
3. Clic en "Merge pull request" → "Confirm merge"

### Paso 2: Activar GitHub Pages
1. Ve a: https://github.com/juansoso666/jepeto-web/settings/pages
2. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/docs`
3. Clic en "Save"

### Paso 3: ¡Listo!
Espera 2-3 minutos y tu sitio estará en:
**https://juansoso666.github.io/jepeto-web/**

---

## 🌐 Configurar Dominio Personalizado (Opcional)

### Si quieres usar jepeto.es:

1. **Comprar dominio** (€8-15/año):
   - Dondominio.com (español)
   - Namecheap.com
   - GoDaddy.com

2. **En tu proveedor de dominio**, añade estos registros DNS:
   ```
   Tipo A, nombre @, valor: 185.199.108.153
   Tipo A, nombre @, valor: 185.199.109.153
   Tipo A, nombre @, valor: 185.199.110.153
   Tipo A, nombre @, valor: 185.199.111.153
   Tipo CNAME, nombre www, valor: juansoso666.github.io
   ```

3. **En GitHub Pages settings**, añade:
   - Custom domain: `jepeto.es`
   - ✅ Enforce HTTPS

4. **Espera 24-48 horas** para que DNS propague

---

## 📋 Verificación Post-Despliegue

✅ Prueba estos enlaces:
- https://tu-sitio.github.io/jepeto-web/
- /servicios.html
- /galeria.html (lightbox funciona?)
- /contacto.html (formulario envía?)
- Botón WhatsApp funciona?
- Vista móvil responsive?

---

## 🔄 Actualizaciones Futuras

Para actualizar tu sitio:
```bash
cd /ruta/a/jepeto-web
# Edita tus archivos
git add .
git commit -m "Descripción del cambio"
git push origin main
```

GitHub Pages actualiza automáticamente en 1-2 minutos.

---

## 💰 Costo Total

- **GitHub Pages**: €0/mes
- **Dominio jepeto.es**: ~€10/año (opcional)
- **Total**: €0-10/año

---

## 🆘 Problemas?

### El sitio no carga
- Espera 5 minutos
- Limpia caché: Ctrl+Shift+R
- Verifica URL correcta

### Formulario no funciona
- Verifica email: info@jepeto.es
- Revisa configuración FormSubmit.co
- CAPTCHA debe estar habilitado

### Dominio no funciona
- DNS tarda 24-48h
- Verifica en: https://dnschecker.org
- Revisa que CNAME esté correcto

---

## 📚 Guía Completa

Para más detalles, ver: **GUIA_DESPLIEGUE.md**

---

**🎉 ¡Tu sitio está listo para el mundo!**
