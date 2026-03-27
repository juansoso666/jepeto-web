# 🎯 Guía Paso a Paso: Configurar DNS en Arsys para jepeto.es

## 📌 ¿Qué vamos a hacer?

Vamos a configurar tu dominio **jepeto.es** (que compraste en Arsys) para que apunte a tu sitio web en GitHub Pages. Es como darle a GitHub la dirección de tu casa para que pueda entregar tu sitio web.

**Tiempo necesario:** 10-15 minutos  
**Dificultad:** Fácil (solo copiar y pegar valores)

---

## 🚀 PASO 1: Acceder al Panel de Arsys

### 1.1 Abrir la web de Arsys
- Abre tu navegador (Chrome, Firefox, Safari, etc.)
- Ve a: **https://www.arsys.es**

### 1.2 Iniciar Sesión
- Haz clic en **"Acceso Clientes"** (arriba a la derecha)
- Introduce tu **email** o **usuario**
- Introduce tu **contraseña**
- Haz clic en **"Iniciar Sesión"** o **"Entrar"**

### 1.3 Ir a Mis Productos
Una vez dentro:
- Busca en el menú: **"Mis Productos"** o **"Panel de Control"**
- Haz clic ahí

### 1.4 Buscar tu dominio jepeto.es
- En la lista de productos, busca **"jepeto.es"**
- Puede estar en una sección llamada "Dominios" o "Hosting"
- Haz clic en **"Gestionar"** o **"Administrar"** junto a jepeto.es

✅ **Ya estás en el panel de tu dominio jepeto.es**

---

## 🔧 PASO 2: Acceder a la Configuración DNS

### 2.1 Buscar la opción de DNS
En el panel de tu dominio, busca una de estas opciones:
- **"DNS"**
- **"Zona DNS"**
- **"Configuración DNS"**
- **"Gestión DNS"**
- **"Editar Zona DNS"**
- **"Servidor DNS"**

### 2.2 Hacer clic en DNS
- Haz clic en la opción de DNS que encuentres
- Se abrirá una pantalla con una tabla de registros DNS

### 2.3 Identificar la tabla de registros
Verás una tabla con columnas como:
- **Tipo** (A, CNAME, MX, TXT, etc.)
- **Host/Nombre** (@, www, mail, etc.)
- **Destino/Valor** (dirección IP o dominio)
- **TTL** (tiempo en segundos)

✅ **Ya estás en la pantalla de configuración DNS**

---

## 🗑️ PASO 3: Limpiar Registros Antiguos (IMPORTANTE)

### 3.1 ¿Por qué hacer esto?
Si ya tienes registros A o CNAME apuntando a otro sitio, pueden causar conflicto. Hay que eliminarlos.

### 3.2 ¿Qué eliminar?
Busca en la tabla y **ELIMINA** estos registros si existen:

| Tipo | Host | Qué hacer |
|------|------|-----------|
| **A** | **@** o **(vacío)** | ❌ Eliminar si apunta a otra IP |
| **CNAME** | **@** | ❌ Eliminar (no puede existir CNAME en @) |
| **A** | **www** | ❌ Eliminar (usaremos CNAME para www) |

### 3.3 ¿Qué NO eliminar?
**NO elimines** estos registros:
- ✅ Registros **MX** (son para email)
- ✅ Registros **TXT** (verificaciones)
- ✅ Registros **NS** (servidores de nombres)

### 3.4 Cómo eliminar
- Busca el registro que quieres eliminar
- Haz clic en **icono de papelera** 🗑️ o **"Eliminar"** o **"Borrar"**
- Confirma la eliminación

✅ **Registros antiguos eliminados, tabla limpia**

---

## ➕ PASO 4: Añadir los 4 Registros A

Ahora vas a añadir **4 registros tipo A**. Son 4 porque GitHub Pages tiene 4 servidores para mayor velocidad y redundancia.

### 4.1 Buscar el botón para añadir
Busca un botón que diga:
- **"Añadir Registro"**
- **"Nuevo Registro"**
- **"Agregar"**
- **"+"** (símbolo más)

Haz clic en ese botón.

---

### 🔵 REGISTRO A #1

**Formulario que te aparecerá:**

| Campo | Valor a escribir | Explicación |
|-------|------------------|-------------|
| **Tipo** | Selecciona **A** | En el desplegable, elige "A" |
| **Host / Nombre** | Escribe **@** | El símbolo @ significa la raíz (jepeto.es) |
| **Destino / Valor / IP** | **185.199.108.153** | Esta es la IP del servidor de GitHub |
| **TTL** | **3600** | (puede ser 1 hora, déjalo por defecto si sale) |

**Copia y pega esta IP:** `185.199.108.153`

Haz clic en **"Guardar"** o **"Añadir"**

---

### 🔵 REGISTRO A #2

Vuelve a hacer clic en **"Añadir Registro"** o **"+"**

| Campo | Valor a escribir |
|-------|------------------|
| **Tipo** | **A** |
| **Host / Nombre** | **@** |
| **Destino / Valor / IP** | **185.199.109.153** |
| **TTL** | **3600** |

**Copia y pega esta IP:** `185.199.109.153`

Haz clic en **"Guardar"** o **"Añadir"**

---

### 🔵 REGISTRO A #3

Vuelve a hacer clic en **"Añadir Registro"** o **"+"**

| Campo | Valor a escribir |
|-------|------------------|
| **Tipo** | **A** |
| **Host / Nombre** | **@** |
| **Destino / Valor / IP** | **185.199.110.153** |
| **TTL** | **3600** |

**Copia y pega esta IP:** `185.199.110.153`

Haz clic en **"Guardar"** o **"Añadir"**

---

### 🔵 REGISTRO A #4

Vuelve a hacer clic en **"Añadir Registro"** o **"+"**

| Campo | Valor a escribir |
|-------|------------------|
| **Tipo** | **A** |
| **Host / Nombre** | **@** |
| **Destino / Valor / IP** | **185.199.111.153** |
| **TTL** | **3600** |

**Copia y pega esta IP:** `185.199.111.153`

Haz clic en **"Guardar"** o **"Añadir"**

✅ **Ya tienes los 4 registros A configurados**

---

## 🔗 PASO 5: Añadir el Registro CNAME para www

Este registro hace que **www.jepeto.es** también funcione y redirija a **jepeto.es**

### 5.1 Añadir nuevo registro
Haz clic nuevamente en **"Añadir Registro"** o **"+"**

### 🟢 REGISTRO CNAME

| Campo | Valor a escribir | Explicación |
|-------|------------------|-------------|
| **Tipo** | Selecciona **CNAME** | En el desplegable, elige "CNAME" |
| **Host / Nombre** | Escribe **www** | Solo "www", sin el dominio |
| **Destino / Valor / Apunta a** | **juansoso666.github.io** | Tu URL de GitHub Pages |
| **TTL** | **3600** | (déjalo por defecto) |

**Copia y pega:** `juansoso666.github.io`

⚠️ **Nota importante sobre el punto final:**
- Algunos paneles de Arsys requieren un punto al final: `juansoso666.github.io.`
- Si te da error, prueba añadiendo el punto: `juansoso666.github.io.`

Haz clic en **"Guardar"** o **"Añadir"**

✅ **Registro CNAME añadido**

---

## 💾 PASO 6: Guardar Todos los Cambios

### 6.1 Verificar que todo esté correcto
Ahora deberías ver en la tabla de DNS algo como esto:

| Tipo | Host | Destino/Valor | TTL |
|------|------|---------------|-----|
| **A** | **@** | 185.199.108.153 | 3600 |
| **A** | **@** | 185.199.109.153 | 3600 |
| **A** | **@** | 185.199.110.153 | 3600 |
| **A** | **@** | 185.199.111.153 | 3600 |
| **CNAME** | **www** | juansoso666.github.io | 3600 |

### 6.2 Guardar cambios finales
- Busca un botón que diga **"Guardar Cambios"** o **"Aplicar"**
- Haz clic ahí
- Confirma si te pide confirmación

### 6.3 Mensaje de confirmación
Arsys puede mostrar un mensaje como:
- "Cambios guardados correctamente"
- "La configuración se aplicará en unos minutos"

✅ **¡Cambios guardados en Arsys!**

---

## ⏱️ PASO 7: Esperar Propagación DNS

### 7.1 ¿Cuánto tarda?
La propagación DNS puede tardar:
- **Mínimo:** 10-15 minutos
- **Normal:** 1-2 horas
- **Máximo:** 24-48 horas (raro)

### 7.2 ¿Qué hacer mientras tanto?
Mientras esperás, podés:
1. **Configurar GitHub Pages** (siguiente paso)
2. Tomar un café ☕
3. Revisar tu sitio web en el editor

### 7.3 ¿Por qué tarda?
Los DNS son como una guía telefónica de Internet. Cuando haces cambios, todos los servidores del mundo tienen que actualizarse. Eso lleva tiempo.

---

## 🔍 PASO 8: Verificar que Funciona

### 8.1 Después de 15-30 minutos, prueba esto:

#### Opción A: Usar DNSChecker.org (RECOMENDADO)
1. Abre: **https://dnschecker.org/**
2. En el campo de búsqueda escribe: **jepeto.es**
3. En "Type" selecciona: **A**
4. Haz clic en **"Search"**

**¿Qué deberías ver?**
- Muchos checkmarks verdes ✅
- Las 4 IPs de GitHub (185.199.108.153, etc.)
- Si ves checkmarks rojos ❌ espera más tiempo

#### Opción B: Verificar CNAME
1. En DNSChecker, escribe: **www.jepeto.es**
2. En "Type" selecciona: **CNAME**
3. Haz clic en **"Search"**

**¿Qué deberías ver?**
- Checkmarks verdes ✅
- El valor: **juansoso666.github.io**

#### Opción C: Usar el Terminal (si sabes)
```bash
# En Windows PowerShell, Mac Terminal o Linux:
nslookup jepeto.es

# Deberías ver las 4 IPs de GitHub
```

✅ **Si ves las IPs correctas, ¡DNS configurado exitosamente!**

---

## 🎯 PASO 9: Configurar GitHub Pages

Ahora que el DNS está configurado, configura GitHub Pages:

1. **Ve a:** https://github.com/juansoso666/jepeto-web/settings/pages

2. **Configura:**
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** /docs
   - **Custom domain:** jepeto.es
   - **Enforce HTTPS:** ✅ (márcar)

3. **Haz clic en "Save"**

4. **Espera 5-10 minutos** para que se genere el certificado SSL

---

## ✅ VERIFICACIÓN FINAL

### Después de 1-2 horas, prueba:

1. **http://jepeto.es** → debe redirigir a https://jepeto.es ✅
2. **https://jepeto.es** → debe cargar tu sitio web ✅
3. **www.jepeto.es** → debe redirigir a https://jepeto.es ✅

### Si todo funciona:
🎉 **¡FELICITACIONES! Tu sitio está en vivo en jepeto.es** 🎉

---

## 🆘 Problemas Comunes y Soluciones

### ❌ "No encuentro la opción DNS en Arsys"
**Solución:** 
- Busca en el menú lateral o tabs
- Puede estar en "Avanzado" o "Configuración"
- Llama a Arsys: 902 55 55 55

### ❌ "Me dice que @ no es válido"
**Solución:**
- Algunos paneles requieren dejar el campo vacío en vez de @
- O escribir el dominio completo: jepeto.es

### ❌ "No puedo añadir CNAME con @ "
**Correcto:** El CNAME debe ser en **www**, no en @

### ❌ "El sitio no carga después de 24 horas"
**Verificar:**
1. ¿GitHub Pages está activado? (Settings → Pages)
2. ¿El archivo CNAME existe en docs/CNAME?
3. ¿Los DNS están correctos en DNSChecker?
4. Limpia caché del navegador: Ctrl+Shift+R

### ❌ "Dice que el dominio ya está en uso"
**Solución:**
- Otro repositorio está usando jepeto.es
- Ve a Settings → Pages en otros repos y quítalo

---

## 📞 Contacto de Soporte

### Arsys (Problemas con DNS)
- **Teléfono:** 902 55 55 55
- **Email:** soporte@arsys.es
- **Horario:** Lun-Vie 9:00-21:00, Sáb 10:00-14:00
- **Chat:** Disponible en arsys.es (esquina inferior derecha)

### GitHub Pages (Problemas técnicos)
- **Documentación:** https://docs.github.com/pages
- **Status:** https://www.githubstatus.com/
- **Foros:** https://github.community/

---

## 📋 Resumen de los Valores DNS

Para copiar y pegar rápidamente:

```
REGISTRO A #1:
Tipo: A
Host: @
Valor: 185.199.108.153
TTL: 3600

REGISTRO A #2:
Tipo: A
Host: @
Valor: 185.199.109.153
TTL: 3600

REGISTRO A #3:
Tipo: A
Host: @
Valor: 185.199.110.153
TTL: 3600

REGISTRO A #4:
Tipo: A
Host: @
Valor: 185.199.111.153
TTL: 3600

REGISTRO CNAME:
Tipo: CNAME
Host: www
Valor: juansoso666.github.io
TTL: 3600
```

---

## ✅ Checklist Final

Marca cada paso que completes:

- [ ] 1. Accedí al panel de Arsys
- [ ] 2. Encontré la sección DNS
- [ ] 3. Eliminé registros conflictivos (A o CNAME antiguos)
- [ ] 4. Añadí el registro A #1 (185.199.108.153)
- [ ] 5. Añadí el registro A #2 (185.199.109.153)
- [ ] 6. Añadí el registro A #3 (185.199.110.153)
- [ ] 7. Añadí el registro A #4 (185.199.111.153)
- [ ] 8. Añadí el registro CNAME (www → juansoso666.github.io)
- [ ] 9. Guardé todos los cambios en Arsys
- [ ] 10. Verifiqué en DNSChecker.org (después de 15 min)
- [ ] 11. Configuré GitHub Pages
- [ ] 12. Probé que jepeto.es carga correctamente (después de 1-2h)

---

**🎉 ¡Todo listo! Tu sitio web estará en vivo en jepeto.es muy pronto 🚀**

*Última actualización: 13 de Febrero 2026*  
*Guía creada específicamente para jepeto.es con Arsys*
