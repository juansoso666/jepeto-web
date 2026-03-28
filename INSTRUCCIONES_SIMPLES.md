# 🚀 INSTRUCCIONES PASO A PASO - MUY SIMPLE

## ⚠️ IMPORTANTE: Dónde ejecutar los comandos

Abre tu **terminal** (línea de comandos) y ejecuta cada comando que empiece con `$`

---

## PASO 1: Crear la Plantilla

Copia y pega estos comandos **UNO POR UNO** en tu terminal:

```bash
# Ir a una carpeta temporal
cd /tmp

# Crear carpeta para la plantilla
mkdir plantilla-web-base

# Entrar a la carpeta
cd plantilla-web-base

# Inicializar git
git init

# Cambiar a branch main
git branch -M main
```

---

## PASO 2: Descargar los Archivos de la Plantilla

Tienes 2 opciones:

### OPCIÓN A: Desde el repositorio jepeto-web (si tienes los archivos)

```bash
# Copiar archivos desde jepeto-web
cp -r /home/runner/work/jepeto-web/jepeto-web/docs .
cp -r /home/runner/work/jepeto-web/jepeto-web/examples .
```

### OPCIÓN B: Crear desde cero

Ejecuta este comando para crear todo automáticamente:

```bash
# Descargar script de creación
curl -o crear-plantilla.sh https://raw.githubusercontent.com/juansoso666/plantilla-web-base/main/crear-plantilla.sh

# O crear manualmente (siguiente sección)
```

---

## PASO 3: Configurar Git

```bash
# Asegurarte de estar en la carpeta correcta
cd /tmp/plantilla-web-base

# Configurar git (usa tu email y nombre)
git config user.email "tu-email@ejemplo.com"
git config user.name "Tu Nombre"

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Plantilla web base"
```

---

## PASO 4: Conectar con GitHub

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/juansoso666/plantilla-web-base.git
```

---

## PASO 5: Subir a GitHub

Necesitas autenticarte. Elige UNA de estas opciones:

### OPCIÓN A: GitHub CLI (Más Fácil)

```bash
# Autenticarse
gh auth login

# Hacer push
git push -u origin main
```

### OPCIÓN B: Token Personal

1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Selecciona "repo"
4. Copia el token

```bash
# Hacer push con token (reemplaza TU-TOKEN-AQUI)
git push https://TU-TOKEN-AQUI@github.com/juansoso666/plantilla-web-base.git main
```

### OPCIÓN C: SSH (si ya lo tienes configurado)

```bash
# Cambiar remote a SSH
git remote set-url origin git@github.com:juansoso666/plantilla-web-base.git

# Hacer push
git push -u origin main
```

---

## ✅ VERIFICAR

Después del push, abre tu navegador y ve a:

https://github.com/juansoso666/plantilla-web-base

Deberías ver todos tus archivos.

---

## 🌐 ACTIVAR GITHUB PAGES

1. Ve a: https://github.com/juansoso666/plantilla-web-base/settings/pages
2. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/docs`
3. Click "Save"
4. Espera 1-2 minutos
5. Tu sitio estará en: https://juansoso666.github.io/plantilla-web-base/

---

## ❓ ¿DÓNDE EJECUTO ESTOS COMANDOS?

### En Windows:
- Abre **Git Bash** o **PowerShell**
- O usa **Terminal** de Windows 11

### En Mac:
- Abre **Terminal** (Cmd + Espacio, escribe "Terminal")

### En Linux:
- Abre **Terminal** (Ctrl + Alt + T)

### Online (si no tienes acceso local):
- Ve a: https://replit.com
- Crea un nuevo proyecto "Bash"
- Ejecuta los comandos ahí

---

## 🆘 SI TIENES PROBLEMAS

1. **"command not found"**: Instala git primero
   - Windows: https://git-scm.com/download/win
   - Mac: `brew install git`
   - Linux: `sudo apt install git`

2. **"Permission denied"**: Necesitas autenticarte (ver Paso 5)

3. **"fatal: not a git repository"**: Verifica que estás en `/tmp/plantilla-web-base`

---

## 📞 RESUMEN RÁPIDO

```bash
# Todo en uno (copia y pega):
cd /tmp && \
mkdir plantilla-web-base && \
cd plantilla-web-base && \
git init && \
git branch -M main && \
echo "Ahora necesitas agregar los archivos y hacer commit+push"
```

---

## 💡 IMPORTANTE

Los comandos se ejecutan en tu **TERMINAL/CONSOLA**, NO en GitHub web.

Si ves `$` al inicio de una línea, significa que es un comando de terminal.

Ejemplo:
```bash
$ cd /tmp/plantilla-web-base
```

Solo copias la parte después de `$`:
```
cd /tmp/plantilla-web-base
```

---

¿Necesitas ayuda con algún paso específico? ¡Dime en qué parte te atascas!
