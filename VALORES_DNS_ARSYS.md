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
2. **Elimina** registros A y CNAME antiguos en @
3. **Añade** los 5 registros de la tabla de arriba
4. **Guarda** todos los cambios
5. **Espera** 1-2 horas
6. **Verifica** en https://dnschecker.org/ → busca "jepeto.es"
7. **Configura** GitHub Pages (Settings → Pages → Custom domain: jepeto.es)

---

## ⚠️ SI @ NO FUNCIONA

Si el campo "Entrada DNS" **no acepta @**, prueba:
- Dejar el campo **vacío**
- O escribir: **jepeto.es**

---

## ⚠️ SI CNAME DA ERROR

Si **juansoso666.github.io** da error, prueba:
- Con punto al final: **juansoso666.github.io.**

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
