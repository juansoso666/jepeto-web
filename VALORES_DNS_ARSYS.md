# 🎯 COPIA Y PEGA - Configuración DNS Arsys

## Panel de 3 Campos: Entrada DNS / Tipo / Valor

---

## 📋 TABLA COMPLETA

Añade estos **5 registros** exactamente como ves aquí:

### REGISTRO 1
```
Entrada DNS: @
Tipo:        A
Valor:       185.199.108.153
```

### REGISTRO 2
```
Entrada DNS: @
Tipo:        A
Valor:       185.199.109.153
```

### REGISTRO 3
```
Entrada DNS: @
Tipo:        A
Valor:       185.199.110.153
```

### REGISTRO 4
```
Entrada DNS: @
Tipo:        A
Valor:       185.199.111.153
```

### REGISTRO 5
```
Entrada DNS: www
Tipo:        CNAME
Valor:       juansoso666.github.io
```

---

## 📊 FORMATO DE TABLA

| # | Entrada DNS | Tipo | Valor |
|---|-------------|------|-------|
| 1 | @ | A | 185.199.108.153 |
| 2 | @ | A | 185.199.109.153 |
| 3 | @ | A | 185.199.110.153 |
| 4 | @ | A | 185.199.111.153 |
| 5 | www | CNAME | juansoso666.github.io |

---

## ⚡ ACCIONES RÁPIDAS

1. **Accede a Arsys** → Mis Productos → jepeto.es → DNS
2. **NO elimines** registros MX, TXT, SPF, DMARC (son para email)
3. **Solo elimina** registros A antiguos de hosting web (si existen)
4. **Añade** los 5 registros de la tabla de arriba
5. **Guarda** todos los cambios
6. **Espera** 1-2 horas
7. **Verifica** en https://dnschecker.org/ → busca "jepeto.es"
8. **Configura** GitHub Pages (Settings → Pages → Custom domain: jepeto.es)

---

## 🔴 ERROR: "El nombre debe ser el nombre del dominio o un subdominio suyo"

**CAUSA:** Pusiste el dominio completo en "Entrada DNS"

❌ **INCORRECTO:** Entrada DNS = **www.jepeto.es**  
✅ **CORRECTO:** Entrada DNS = **www**

En el campo "Entrada DNS" solo pon:
- **www** (para el registro CNAME)
- **@** (para los registros A)

**NO** pongas el dominio completo (.jepeto.es)

---

## ⚠️ SI @ NO FUNCIONA

Si el campo "Entrada DNS" **no acepta @**, prueba:
- Dejar el campo **vacío**
- O escribir: **jepeto.es**

---

## ⚠️ SI CNAME DA ERROR AL GUARDAR

Si **juansoso666.github.io** da error al guardar, prueba:
- Con punto al final: **juansoso666.github.io.**

---

## 🚨 SI TIENES EMAIL CONFIGURADO

Si ya tienes registros para email (Zoho, Google Workspace, etc.):

**NO TOQUES:**
- ✅ MX (mx.zoho.eu, mx.serviciodecorreo.es, etc.)
- ✅ TXT (zoho-verification, verificaciones)
- ✅ SPF (v=spf1 include:...)
- ✅ DMARC (_dmarc.jepeto.es)
- ✅ CNAME de email (autoconfig, autodiscover, control)

**SOLO AÑADE:**
- Los 5 nuevos registros de la tabla arriba

Email y web pueden coexistir sin problemas.

---

## 📞 AYUDA

**Arsys:** 902 55 55 55  
Diles: *"Configurar DNS para GitHub Pages en jepeto.es"*

---

## ✅ RESULTADO ESPERADO

Después de 1-2 horas:
- ✅ http://jepeto.es → redirige a https://jepeto.es
- ✅ https://jepeto.es → muestra tu sitio web
- ✅ www.jepeto.es → redirige a https://jepeto.es

---

**🎯 GUÍA DETALLADA:** Ver archivo `ARSYS_SIMPLE.md` para explicaciones completas
