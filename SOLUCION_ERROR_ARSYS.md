# 🚨 SOLUCIÓN AL ERROR DE ARSYS

## Error que estás recibiendo:
```
Error: El nombre debe ser el nombre del dominio o un subdominio suyo y contener caracteres validos.
```

---

## ❌ LO QUE ESTÁS HACIENDO MAL

Estás poniendo esto:
```
Entrada DNS: www.jepeto.es  ← ❌ INCORRECTO (dominio completo)
Tipo: CNAME
Valor: juansoso666.github.io
```

---

## ✅ LO QUE DEBES HACER

Pon esto:
```
Entrada DNS: www  ← ✅ CORRECTO (solo el subdominio)
Tipo: CNAME
Valor: juansoso666.github.io
```

---

## 📝 EXPLICACIÓN

En Arsys, el campo **"Entrada DNS"** solo quiere:
- **El subdominio** (www, mail, ftp, etc.)
- **O el símbolo @** (para el dominio raíz)

**NO** quiere el dominio completo (.jepeto.es)

Arsys ya sabe que tu dominio es jepeto.es, por eso solo debes poner la parte antes del punto.

---

## 🎯 TU SITUACIÓN ESPECÍFICA

Veo que ya tienes estos registros configurados:
- ✅ MX para email (Zoho)
- ✅ SPF para email
- ✅ DMARC para seguridad email
- ✅ TXT para verificación
- ✅ CNAMEs para autoconfig, autodiscover, control

**¡Perfecto!** NO debes tocar esos registros.

---

## ➕ LO QUE NECESITAS AÑADIR

Solo añade estos **5 nuevos registros**:

### REGISTRO 1
```
Entrada DNS: @
Tipo: A
Valor: 185.199.108.153
```
Clic en **"Añadir"**

### REGISTRO 2
```
Entrada DNS: @
Tipo: A
Valor: 185.199.109.153
```
Clic en **"Añadir"**

### REGISTRO 3
```
Entrada DNS: @
Tipo: A
Valor: 185.199.110.153
```
Clic en **"Añadir"**

### REGISTRO 4
```
Entrada DNS: @
Tipo: A
Valor: 185.199.111.153
```
Clic en **"Añadir"**

### REGISTRO 5 (el que te da error)
```
Entrada DNS: www          ← ⚠️ SOLO "www", NO "www.jepeto.es"
Tipo: CNAME
Valor: juansoso666.github.io
```
Clic en **"Añadir"**

---

## 🔍 PASO A PASO PARA EL CNAME

1. **Haz clic en** "Añadir" o "Nuevo registro"

2. **En el campo "Entrada DNS"** escribe solo:
   ```
   www
   ```
   (Solo esas 3 letras, nada más)

3. **En el campo "Tipo"** selecciona del desplegable:
   ```
   CNAME
   ```

4. **En el campo "Valor"** escribe:
   ```
   juansoso666.github.io
   ```
   
5. **Haz clic en** "Guardar" o "Añadir"

---

## ⏱️ DESPUÉS DE AÑADIR TODO

1. **Espera 15-30 minutos** (a veces hasta 2 horas)

2. **Verifica en:** https://dnschecker.org/
   - Busca: **jepeto.es**
   - Tipo: **A**
   - Deberías ver las 4 IPs de GitHub

3. **Verifica el CNAME:**
   - Busca: **www.jepeto.es**
   - Tipo: **CNAME**
   - Debería mostrar: **juansoso666.github.io**

4. **Configura GitHub Pages:**
   - Ve a: https://github.com/juansoso666/jepeto-web/settings/pages
   - Custom domain: **jepeto.es**
   - Enforce HTTPS: ✅

---

## ✅ RESULTADO FINAL

Tu tabla de DNS en Arsys debería verse así:

```
Entrada DNS          Tipo      Valor
─────────────────────────────────────────────────────────
@                    A         185.199.108.153
@                    A         185.199.109.153
@                    A         185.199.110.153
@                    A         185.199.111.153
www                  CNAME     juansoso666.github.io
jepeto.es            MX 10     mx.serviciodecorreo.es
jepeto.es            MX 10     mx.zoho.eu
jepeto.es            MX 20     mx2.zoho.eu
jepeto.es            MX 50     mx3.zoho.eu
jepeto.es            SPF       v=spf1 include:_spf.serviciodecorreo.es...
jepeto.es            TXT       zoho-verification=zb93187650...
_dmarc.jepeto.es     TXT       v=DMARC1; p=none; rua=mailto...
autoconfig...        CNAME     autoconfig.serviciodecorreo.es
autodiscover...      CNAME     autodiscover.serviciodecorreo.es
control.jepeto.es    CNAME     pdc.servidoresdns.net
```

---

## 🚨 IMPORTANTE

- Los registros de **email** (MX, SPF, DMARC, TXT) **permanecen**
- Los registros **A** y **CNAME** que añades son **adicionales**
- Email y web funcionan **juntos** sin problemas
- El dominio jepeto.es puede tener **múltiples registros** al mismo tiempo

---

## 📞 SI SIGUES CON PROBLEMAS

**Llama a Arsys:** 902 55 55 55

Diles exactamente esto:
> "Necesito añadir registros A y CNAME para GitHub Pages en mi dominio jepeto.es. 
> Tengo email configurado con Zoho y quiero mantenerlo. 
> Necesito añadir 4 registros A en @ con las IPs de GitHub 
> y 1 CNAME en www apuntando a juansoso666.github.io"

Te ayudarán directamente.

---

## 🚨 ¿ARSYS NO ACEPTA EL CNAME?

Si Arsys **no te deja** añadir el registro CNAME (ni con "www" ni con "www.jepeto.es"):

### ✅ SOLUCIÓN RÁPIDA

**¡No te preocupes!** Puedes usar el sitio sin el CNAME:

1. **Añade SOLO los 4 registros A** (en @)
2. **NO añadas** el CNAME de www (lo omites)
3. **Configura GitHub Pages** con dominio: **jepeto.es** (sin www)
4. **GitHub** redirigirá automáticamente www.jepeto.es → jepeto.es

**Ver guía completa:** [ARSYS_NO_ACEPTA_CNAME.md](./ARSYS_NO_ACEPTA_CNAME.md)

### 📞 O Llama a Arsys

**Teléfono:** 902 55 55 55

Diles:
> "Necesito añadir un CNAME para www apuntando a juansoso666.github.io 
> pero el panel no me lo permite. ¿Pueden añadirlo ustedes?"

---

**Creado: 13 de Febrero 2026**  
**Actualizado con solución para problemas de CNAME**  
**Específico para tu caso con email Zoho ya configurado**
