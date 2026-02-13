# 🆘 ARSYS NO ACEPTA CNAME EN WWW - SOLUCIONES ALTERNATIVAS

## 🔴 TU PROBLEMA

Arsys **NO acepta** añadir un registro CNAME con:
- ❌ "www" en Entrada DNS
- ❌ "www.jepeto.es" en Entrada DNS

---

## ✅ SOLUCIÓN RÁPIDA (RECOMENDADA)

**¡Buenas noticias!** No necesitas el CNAME de www para que funcione tu sitio.

### PASO 1: Añade SOLO los 4 Registros A

```
┌─────────────────────────────────────────┐
│ REGISTRO 1                              │
├─────────────────────────────────────────┤
│ Entrada DNS: @                          │
│ Tipo:        A                          │
│ Valor:       185.199.108.153            │
└─────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────┐
│ REGISTRO 2                              │
├─────────────────────────────────────────┤
│ Entrada DNS: @                          │
│ Tipo:        A                          │
│ Valor:       185.199.109.153            │
└─────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────┐
│ REGISTRO 3                              │
├─────────────────────────────────────────┤
│ Entrada DNS: @                          │
│ Tipo:        A                          │
│ Valor:       185.199.110.153            │
└─────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────┐
│ REGISTRO 4                              │
├─────────────────────────────────────────┤
│ Entrada DNS: @                          │
│ Tipo:        A                          │
│ Valor:       185.199.111.153            │
└─────────────────────────────────────────┘
```

### PASO 2: Configura GitHub Pages

1. Ve a: https://github.com/juansoso666/jepeto-web/settings/pages
2. En "Custom domain" pon: **jepeto.es** (SIN www)
3. Marca: **Enforce HTTPS** ✅
4. Haz clic en **Save**

### PASO 3: GitHub Hará el Resto

GitHub Pages automáticamente:
- ✅ Hará que **https://jepeto.es** funcione
- ✅ Redirigirá **www.jepeto.es** → **jepeto.es** automáticamente

**¡No necesitas configurar el CNAME de www!**

---

## 🔍 ¿POR QUÉ ARSYS NO LO ACEPTA?

Posibles razones:

### 1. Ya existe un registro en www
Verifica en tu lista de DNS de Arsys si ya tienes:
- Un registro **A** en **www**
- Un registro **CNAME** en **www**

Si existe, **elimínalo primero** y luego intenta añadir el nuevo.

### 2. Arsys tiene reglas específicas
Algunos paneles de Arsys no permiten ciertos CNAMEs por políticas internas.

### 3. Limitaciones del plan
Tu plan de Arsys puede tener límites en el número de registros.

---

## 🛠️ SOLUCIÓN ALTERNATIVA SI QUIERES WWW

Si realmente necesitas que **www.jepeto.es** funcione sin redirección automática:

### Opción A: Contactar Soporte Arsys

Llama a: **902 55 55 55**

Diles exactamente esto:
> "Necesito añadir un registro CNAME para www apuntando a juansoso666.github.io 
> para GitHub Pages, pero el panel web no me deja. ¿Pueden añadirlo ustedes 
> directamente o activar la opción en mi panel?"

### Opción B: Usar Registros A en vez de CNAME

En lugar de CNAME, añade **4 registros A adicionales** en **www**:

```
Entrada DNS: www
Tipo:        A
Valor:       185.199.108.153
```

```
Entrada DNS: www
Tipo:        A
Valor:       185.199.109.153
```

```
Entrada DNS: www
Tipo:        A
Valor:       185.199.110.153
```

```
Entrada DNS: www
Tipo:        A
Valor:       185.199.111.153
```

**Importante:** Esto es menos ideal que un CNAME, pero funciona.

---

## ✅ VERIFICACIÓN

### Con Solo Registros A (Solución Recomendada)

Después de 1-2 horas:

1. **Verifica en DNSChecker:**
   - https://dnschecker.org/
   - Busca: **jepeto.es**
   - Tipo: **A**
   - Deberías ver las 4 IPs

2. **Prueba tu sitio:**
   - ✅ https://jepeto.es → Funciona
   - ✅ www.jepeto.es → Redirige a jepeto.es (automático por GitHub)

### Si Lograste Añadir el CNAME

1. **Verifica CNAME:**
   - https://dnschecker.org/
   - Busca: **www.jepeto.es**
   - Tipo: **CNAME**
   - Debería mostrar: **juansoso666.github.io**

2. **Prueba:**
   - ✅ https://jepeto.es → Funciona
   - ✅ https://www.jepeto.es → Funciona directamente

---

## 📊 TABLA RESUMEN: QUÉ AÑADIR

### Configuración Mínima (RECOMENDADA)
| Entrada DNS | Tipo | Valor | ¿Funciona www? |
|-------------|------|-------|----------------|
| @ | A | 185.199.108.153 | ✅ Sí (redirect automático) |
| @ | A | 185.199.109.153 | |
| @ | A | 185.199.110.153 | |
| @ | A | 185.199.111.153 | |

### Configuración Completa (SI ARSYS LO PERMITE)
| Entrada DNS | Tipo | Valor | ¿Funciona www? |
|-------------|------|-------|----------------|
| @ | A | 185.199.108.153 | ✅ Sí (directo) |
| @ | A | 185.199.109.153 | |
| @ | A | 185.199.110.153 | |
| @ | A | 185.199.111.153 | |
| www | CNAME | juansoso666.github.io | |

### Configuración Alternativa (SI CNAME NO FUNCIONA)
| Entrada DNS | Tipo | Valor | ¿Funciona www? |
|-------------|------|-------|----------------|
| @ | A | 185.199.108.153 | ✅ Sí (directo) |
| @ | A | 185.199.109.153 | |
| @ | A | 185.199.110.153 | |
| @ | A | 185.199.111.153 | |
| www | A | 185.199.108.153 | |
| www | A | 185.199.109.153 | |
| www | A | 185.199.110.153 | |
| www | A | 185.199.111.153 | |

---

## 🎯 MI RECOMENDACIÓN PARA TI

**HAZ ESTO:**

1. ✅ Añade los **4 registros A** en **@** (esos sí te deja, ¿verdad?)
2. ✅ NO te preocupes por el CNAME de www por ahora
3. ✅ Configura GitHub Pages con dominio: **jepeto.es**
4. ✅ Espera 1-2 horas
5. ✅ Prueba https://jepeto.es y https://www.jepeto.es

**Si www.jepeto.es redirige automáticamente a jepeto.es:**
🎉 ¡Perfecto! Ya funciona todo. No necesitas hacer nada más.

**Si www.jepeto.es NO funciona:**
📞 Llama a Arsys (902 55 55 55) y pide que añadan el CNAME manualmente.

---

## 📞 CONTACTO ARSYS

**Teléfono:** 902 55 55 55  
**Email:** soporte@arsys.es  
**Horario:** Lun-Vie 9:00-21:00, Sáb 10:00-14:00

**Qué decirles:**
> "Hola, tengo el dominio jepeto.es y necesito añadir un registro CNAME 
> para www apuntando a juansoso666.github.io para GitHub Pages. 
> El panel web no me permite añadirlo. ¿Pueden ustedes añadirlo 
> directamente en el DNS?"

---

## ❓ PREGUNTAS FRECUENTES

### ¿Puedo usar el sitio sin el CNAME de www?
**Sí.** GitHub Pages redirigirá www automáticamente si configuras el dominio principal.

### ¿Es malo no tener el CNAME?
**No.** Muchos sitios funcionan perfectamente con solo registros A y redirects automáticos.

### ¿Por qué Arsys no me deja?
Cada proveedor de DNS tiene sus propias validaciones y restricciones. Arsys puede tener reglas específicas.

### ¿Hay otra forma?
Sí, puedes usar registros A en www en lugar de CNAME (ver Opción B arriba).

---

## ✅ CHECKLIST DE ACCIÓN

- [ ] 1. Añadí registro A #1 (@, 185.199.108.153)
- [ ] 2. Añadí registro A #2 (@, 185.199.109.153)
- [ ] 3. Añadí registro A #3 (@, 185.199.110.153)
- [ ] 4. Añadí registro A #4 (@, 185.199.111.153)
- [ ] 5. Configuré GitHub Pages con dominio jepeto.es
- [ ] 6. Marqué "Enforce HTTPS"
- [ ] 7. Esperé 1-2 horas
- [ ] 8. Verifiqué que jepeto.es funciona
- [ ] 9. Verifiqué que www.jepeto.es funciona (o redirige)
- [ ] 10. Si www no funciona, llamé a Arsys

---

**Creado: 13 de Febrero 2026**  
**Específico para problema con CNAME en panel de Arsys**
