# 🎯 GUÍA SIMPLE: DNS en Arsys (Panel de 3 Campos)

## 📋 Tu Panel de Arsys

Si en tu panel de Arsys solo ves **3 campos**:
1. **Entrada DNS**
2. **Tipo**
3. **Valor**

¡Esta es tu guía! 👇

---

## ✅ TABLA COMPLETA - COPIA EXACTA

Tienes que añadir **5 registros** en total. Aquí está TODO lo que necesitas:

| # | Entrada DNS | Tipo | Valor |
|---|-------------|------|-------|
| **1** | **@** | **A** | **185.199.108.153** |
| **2** | **@** | **A** | **185.199.109.153** |
| **3** | **@** | **A** | **185.199.110.153** |
| **4** | **@** | **A** | **185.199.111.153** |
| **5** | **www** | **CNAME** | **juansoso666.github.io** |

---

## 📝 PASO A PASO

### ➕ REGISTRO 1

```
Entrada DNS:  @
Tipo:         A
Valor:        185.199.108.153
```

Haz clic en **"Guardar"** o **"Añadir"**

---

### ➕ REGISTRO 2

```
Entrada DNS:  @
Tipo:         A
Valor:        185.199.109.153
```

Haz clic en **"Guardar"** o **"Añadir"**

---

### ➕ REGISTRO 3

```
Entrada DNS:  @
Tipo:         A
Valor:        185.199.110.153
```

Haz clic en **"Guardar"** o **"Añadir"**

---

### ➕ REGISTRO 4

```
Entrada DNS:  @
Tipo:         A
Valor:        185.199.111.153
```

Haz clic en **"Guardar"** o **"Añadir"**

---

### ➕ REGISTRO 5

```
Entrada DNS:  www
Tipo:         CNAME
Valor:        juansoso666.github.io
```

Haz clic en **"Guardar"** o **"Añadir"**

---

## ⚠️ NOTAS IMPORTANTES

### ¿Qué es "@"?
- El símbolo **@** representa tu dominio raíz (jepeto.es)
- Si tu panel NO acepta @, prueba:
  - Dejar el campo **vacío**
  - O escribir: **jepeto.es**

### ¿Y si da error?
Si al poner **juansoso666.github.io** en el CNAME te da error, prueba con:
- **juansoso666.github.io.**  (con punto al final)

### Registros antiguos
**ANTES de añadir estos registros**, elimina:
- ❌ Cualquier registro **A** que ya exista en **@**
- ❌ Cualquier registro **CNAME** en **@** (no debe existir)

**NO elimines:**
- ✅ Registros **MX** (para email)
- ✅ Registros **TXT** (verificaciones)

---

## 🔍 VERIFICAR

Una vez guardado todo, deberías tener **5 registros** en tu tabla:

```
✅ 4 registros tipo A en @
✅ 1 registro tipo CNAME en www
```

---

## ⏰ TIEMPOS

- **Guardar en Arsys:** Inmediato
- **Propagación DNS:** 10 minutos - 48 horas (normalmente 1-2 horas)
- **Verificar:** https://dnschecker.org/ (busca "jepeto.es")

---

## 📞 ¿PROBLEMAS?

**Si no funciona o tienes dudas:**

📞 **Llama a Arsys:** 902 55 55 55  
📧 **Email:** soporte@arsys.es  
🕐 **Horario:** Lun-Vie 9:00-21:00, Sáb 10:00-14:00

Diles: *"Necesito configurar DNS para GitHub Pages en jepeto.es"*

---

## 📊 RESUMEN VISUAL

```
╔══════════════════════════════════════════════════════╗
║  CAMPOS A RELLENAR EN ARSYS                         ║
╠══════════════════════════════════════════════════════╣
║                                                      ║
║  REGISTRO 1:                                         ║
║  ┌─────────────┐  ┌──────┐  ┌──────────────────┐   ║
║  │ @           │  │  A   │  │ 185.199.108.153  │   ║
║  └─────────────┘  └──────┘  └──────────────────┘   ║
║    Entrada DNS      Tipo         Valor              ║
║                                                      ║
║  REGISTRO 2:                                         ║
║  ┌─────────────┐  ┌──────┐  ┌──────────────────┐   ║
║  │ @           │  │  A   │  │ 185.199.109.153  │   ║
║  └─────────────┘  └──────┘  └──────────────────┘   ║
║                                                      ║
║  REGISTRO 3:                                         ║
║  ┌─────────────┐  ┌──────┐  ┌──────────────────┐   ║
║  │ @           │  │  A   │  │ 185.199.110.153  │   ║
║  └─────────────┘  └──────┘  └──────────────────┘   ║
║                                                      ║
║  REGISTRO 4:                                         ║
║  ┌─────────────┐  ┌──────┐  ┌──────────────────┐   ║
║  │ @           │  │  A   │  │ 185.199.111.153  │   ║
║  └─────────────┘  └──────┘  └──────────────────┘   ║
║                                                      ║
║  REGISTRO 5:                                         ║
║  ┌─────────────┐  ┌──────┐  ┌──────────────────┐   ║
║  │ www         │  │ CNAME│  │juansoso666.github│   ║
║  │             │  │      │  │.io               │   ║
║  └─────────────┘  └──────┘  └──────────────────┘   ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

---

## ✅ CHECKLIST

Marca cada paso:

- [ ] 1. Eliminé registros A y CNAME antiguos
- [ ] 2. Añadí registro A #1 (185.199.108.153)
- [ ] 3. Añadí registro A #2 (185.199.109.153)
- [ ] 4. Añadí registro A #3 (185.199.110.153)
- [ ] 5. Añadí registro A #4 (185.199.111.153)
- [ ] 6. Añadí registro CNAME (www → juansoso666.github.io)
- [ ] 7. Guardé todos los cambios
- [ ] 8. Esperé 1-2 horas
- [ ] 9. Verifiqué en https://dnschecker.org/
- [ ] 10. Configuré GitHub Pages (Settings → Pages)

---

## 🎉 ¡LISTO!

Una vez completados todos los pasos, tu sitio estará en:

**https://jepeto.es** 🚀

---

*Guía específica para panel simple de Arsys con 3 campos*  
*Creada: 13 de Febrero 2026*
