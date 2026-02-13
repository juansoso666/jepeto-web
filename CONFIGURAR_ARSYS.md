# 🌐 Configurar jepeto.es en Arsys para GitHub Pages

## 📋 Pasos para Configurar DNS en Arsys

### 1️⃣ Acceder al Panel de Arsys

1. Ve a: https://www.arsys.es
2. Inicia sesión con tu usuario y contraseña
3. Ve a **"Mis Productos"** o **"Panel de Control"**
4. Busca tu dominio **jepeto.es**
5. Haz clic en **"Gestionar"** o **"Administrar"**

### 2️⃣ Acceder a la Gestión de DNS

En el panel de tu dominio:
1. Busca la opción **"DNS"** o **"Zona DNS"**
2. Puede estar en:
   - **"Configuración DNS"**
   - **"Gestión DNS"**
   - **"Servidor DNS"**
   - **"Editar Zona DNS"**

### 3️⃣ Configurar los Registros DNS

#### ⚠️ IMPORTANTE: Eliminar Registros Conflictivos

**ANTES de añadir los nuevos registros:**
- Si existe un registro A apuntando a otra IP, **elimínalo**
- Si existe un registro CNAME en @ (raíz), **elimínalo**
- Solo deja los registros MX si tienes email configurado

#### Añadir Registros A (para jepeto.es)

Añade **CUATRO** registros tipo A con estos valores:

**Registro A #1:**
```
Tipo: A
Host/Nombre: @ (o dejar vacío o "jepeto.es")
Destino/Valor: 185.199.108.153
TTL: 3600 (o 1 hora)
```

**Registro A #2:**
```
Tipo: A
Host/Nombre: @
Destino/Valor: 185.199.109.153
TTL: 3600
```

**Registro A #3:**
```
Tipo: A
Host/Nombre: @
Destino/Valor: 185.199.110.153
TTL: 3600
```

**Registro A #4:**
```
Tipo: A
Host/Nombre: @
Destino/Valor: 185.199.111.153
TTL: 3600
```

#### Añadir Registro CNAME (para www.jepeto.es)

**Registro CNAME:**
```
Tipo: CNAME
Host/Nombre: www
Destino/Valor: juansoso666.github.io (o juansoso666.github.io.)
TTL: 3600
```

⚠️ **Nota**: Algunos paneles de Arsys requieren el punto final: `juansoso666.github.io.`

### 4️⃣ Guardar Cambios

1. Haz clic en **"Guardar"** o **"Aplicar cambios"**
2. Confirma los cambios
3. Arsys puede tardar unos minutos en aplicar los cambios

### 5️⃣ Verificar la Configuración

Después de 10-15 minutos, verifica que los DNS estén configurados:

**Opción 1: Usar DNSChecker.org**
1. Ve a: https://dnschecker.org/
2. Escribe: `jepeto.es`
3. Tipo: `A`
4. Deberías ver las 4 IPs de GitHub en varios servidores del mundo

**Opción 2: Usar comando (Windows PowerShell o Linux/Mac Terminal)**
```bash
nslookup jepeto.es
```

Deberías ver las IPs de GitHub:
```
Address: 185.199.108.153
Address: 185.199.109.153
Address: 185.199.110.153
Address: 185.199.111.153
```

### 6️⃣ Configurar GitHub Pages

Una vez que los DNS estén propagados (10 min - 48 horas):

1. Ve a: https://github.com/juansoso666/jepeto-web/settings/pages
2. Configura:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
3. En **Custom domain**: debería aparecer `jepeto.es` automáticamente
   - Si no aparece, escríbelo manualmente
4. Marca ✅ **Enforce HTTPS**
5. Haz clic en **Save**

⏰ Espera 5-10 minutos para que GitHub genere el certificado SSL.

### 7️⃣ Probar el Sitio

Después de todo configurado:

```bash
# Prueba estos URLs en tu navegador:
http://jepeto.es          → Redirige a https://jepeto.es
https://jepeto.es         → Carga tu sitio ✅
https://www.jepeto.es     → Redirige a https://jepeto.es
```

## 🎯 Configuración Final en Arsys

Tu zona DNS debería quedar así:

```
Tipo    Host    Destino/Valor           TTL
----    ----    -----------------       ----
A       @       185.199.108.153         3600
A       @       185.199.109.153         3600
A       @       185.199.110.153         3600
A       @       185.199.111.153         3600
CNAME   www     juansoso666.github.io   3600
```

## 🔍 Solución de Problemas Específicos de Arsys

### Problema: "No puedo añadir 4 registros A con el mismo host"

**Solución**: Arsys SÍ permite múltiples registros A. Si tienes problemas:
1. Asegúrate de hacer clic en "Añadir registro" después de cada uno
2. No sobrescribas el registro anterior, añade uno nuevo
3. Si solo permite uno, contacta con soporte de Arsys

### Problema: "El CNAME no acepta juansoso666.github.io"

**Solución**: Prueba con:
- `juansoso666.github.io` (sin punto final)
- `juansoso666.github.io.` (con punto final)
- Arsys a veces requiere el punto final

### Problema: "Los cambios no se aplican"

**Solución**:
1. Verifica que hayas guardado los cambios
2. Espera 15-30 minutos (caché de Arsys)
3. Limpia caché DNS de tu ordenador:
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
   - Linux: `sudo systemd-resolve --flush-caches`

### Problema: "Error al validar dominio en GitHub"

**Solución**:
1. Espera a que DNS se propague completamente (24-48h)
2. En GitHub Pages, quita el custom domain, guarda, espera 1 min, vuélvelo a poner
3. Verifica que los registros A estén correctos con `nslookup jepeto.es`

## 📞 Soporte Arsys

Si tienes problemas técnicos con la configuración DNS:
- **Teléfono**: 902 55 55 55
- **Email**: soporte@arsys.es
- **Chat**: Disponible en su web
- **Horario**: L-V 9:00-21:00, S 10:00-14:00

Diles que necesitas configurar **registros A para GitHub Pages** y que necesitas **4 registros A apuntando a las IPs de GitHub**.

## ⏰ Tiempos de Espera

| Paso | Tiempo Estimado |
|------|----------------|
| Guardar en Arsys | Inmediato |
| Propagación inicial | 10-30 minutos |
| Propagación completa | 24-48 horas |
| Certificado SSL (GitHub) | 5-10 minutos |
| Total para funcionar | 30 min - 48 horas |

## ✅ Checklist Final

- [ ] Fusionar el Pull Request en GitHub
- [ ] Configurar 4 registros A en Arsys
- [ ] Configurar 1 registro CNAME en Arsys
- [ ] Esperar propagación DNS (verificar en dnschecker.org)
- [ ] Configurar GitHub Pages con custom domain
- [ ] Activar "Enforce HTTPS"
- [ ] Esperar generación de certificado SSL
- [ ] Probar http://jepeto.es y https://jepeto.es

Una vez completados todos los pasos, ¡tu sitio estará funcionando en jepeto.es! 🎉
