#!/bin/bash

# Script para crear y subir la plantilla automáticamente
# Ejecuta: bash CREAR_PLANTILLA_AUTO.sh

clear
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║    🚀 CREADOR AUTOMÁTICO DE PLANTILLA WEB BASE           ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Función para pausar
pausar() {
    echo ""
    read -p "Presiona ENTER para continuar..."
    echo ""
}

# PASO 1: Crear carpeta
echo "📁 PASO 1: Creando carpeta de plantilla..."
cd /tmp
rm -rf plantilla-web-base
mkdir plantilla-web-base
cd plantilla-web-base

if [ $? -eq 0 ]; then
    echo "✅ Carpeta creada: /tmp/plantilla-web-base"
else
    echo "❌ Error al crear carpeta"
    exit 1
fi

pausar

# PASO 2: Inicializar git
echo "🔧 PASO 2: Inicializando Git..."
git init
git branch -M main
git config user.email "plantilla@example.com"
git config user.name "Plantilla Web Base"

if [ $? -eq 0 ]; then
    echo "✅ Git inicializado"
else
    echo "❌ Error al inicializar Git"
    exit 1
fi

pausar

# PASO 3: Crear estructura de carpetas
echo "📂 PASO 3: Creando estructura de carpetas..."
mkdir -p docs/src/{js,styles,assets/images/{servicios,proyectos,galeria,blog}}
mkdir -p examples

if [ $? -eq 0 ]; then
    echo "✅ Estructura creada"
else
    echo "❌ Error al crear estructura"
    exit 1
fi

pausar

# PASO 4: Crear archivos
echo "📝 PASO 4: Creando archivos..."

# README.md
cat > README.md << 'EOF'
# 🌐 Plantilla Web Base

Template reutilizable para crear sitios web profesionales en minutos.

## 🚀 Uso Rápido

1. Clona este repositorio
2. Edita `docs/config.json`
3. Reemplaza imágenes en `docs/src/assets/images/`
4. ¡Publica!

## 📚 Documentación

Ver archivos de documentación para más detalles.
EOF

# .gitignore
cat > .gitignore << 'EOF'
node_modules/
.DS_Store
*.log
.env
EOF

# LICENSE
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED.
EOF

# config.json
cat > docs/config.json << 'EOF'
{
  "empresa": {
    "nombre": "Mi Empresa",
    "eslogan": "Tu mensaje aquí",
    "descripcion": "Descripción de tu empresa"
  },
  "contacto": {
    "telefono": "+34912345678",
    "email": "info@miempresa.com"
  },
  "tema": {
    "colorPrimario": "#10b981",
    "colorSecundario": "#059669"
  },
  "servicios": [
    {
      "id": "servicio-1",
      "nombre": "Servicio Principal",
      "descripcion": "Descripción del servicio",
      "icono": "🚀",
      "caracteristicas": ["Característica 1", "Característica 2"]
    }
  ]
}
EOF

# index.html
cat > docs/index.html << 'EOF'
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Empresa</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
  <header class="bg-white shadow-md py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-bold">Mi Empresa</h1>
    </div>
  </header>
  
  <main class="container mx-auto px-4 py-8">
    <section class="text-center py-20 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg">
      <h2 class="text-5xl font-bold mb-4">Bienvenido</h2>
      <p class="text-xl mb-8">Tu mensaje inspirador aquí</p>
      <a href="#contacto" class="bg-white text-green-600 px-8 py-3 rounded-lg font-bold">Contáctanos</a>
    </section>
  </main>
  
  <footer class="bg-gray-900 text-white py-8 mt-12">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
    </div>
  </footer>
</body>
</html>
EOF

# config-loader.js (básico)
cat > docs/src/js/config-loader.js << 'EOF'
// Sistema de carga de configuración
console.log('Config loader cargado');
EOF

echo "✅ Archivos creados"

pausar

# PASO 5: Hacer commit
echo "💾 PASO 5: Haciendo commit..."
git add .
git commit -m "Initial commit: Plantilla web base reutilizable"

if [ $? -eq 0 ]; then
    echo "✅ Commit realizado"
else
    echo "❌ Error al hacer commit"
    exit 1
fi

pausar

# PASO 6: Configurar remote
echo "🔗 PASO 6: Configurando repositorio remoto..."
git remote add origin https://github.com/juansoso666/plantilla-web-base.git

if [ $? -eq 0 ]; then
    echo "✅ Remote configurado"
else
    echo "⚠️  Remote ya configurado o error"
fi

pausar

# PASO 7: Push
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║    📤 PASO 7: SUBIR A GITHUB                              ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo "Ahora necesitas hacer PUSH. Elige un método:"
echo ""
echo "1️⃣  GitHub CLI:"
echo "    gh auth login"
echo "    git push -u origin main"
echo ""
echo "2️⃣  Token (crea en https://github.com/settings/tokens):"
echo "    git push https://TOKEN@github.com/juansoso666/plantilla-web-base.git main"
echo ""
echo "3️⃣  Intentar push ahora (puede pedir autenticación):"
echo ""

read -p "¿Intentar push ahora? (s/n): " respuesta

if [ "$respuesta" = "s" ] || [ "$respuesta" = "S" ]; then
    echo ""
    echo "🚀 Intentando push..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "╔═══════════════════════════════════════════════════════════╗"
        echo "║                                                           ║"
        echo "║    ✅ ¡ÉXITO! PLANTILLA SUBIDA A GITHUB                   ║"
        echo "║                                                           ║"
        echo "╚═══════════════════════════════════════════════════════════╝"
        echo ""
        echo "🌐 Ver en: https://github.com/juansoso666/plantilla-web-base"
        echo ""
        echo "📄 Activar GitHub Pages:"
        echo "   https://github.com/juansoso666/plantilla-web-base/settings/pages"
        echo ""
    else
        echo ""
        echo "⚠️  Push falló. Necesitas autenticación."
        echo "    Usa uno de los métodos de arriba."
    fi
else
    echo ""
    echo "⏭️  Push omitido. Ejecuta manualmente:"
    echo "    cd /tmp/plantilla-web-base"
    echo "    gh auth login"
    echo "    git push -u origin main"
fi

echo ""
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "📍 Tu plantilla está en: /tmp/plantilla-web-base"
echo ""
echo "Para ver los archivos:"
echo "    cd /tmp/plantilla-web-base"
echo "    ls -la"
echo ""
echo "═══════════════════════════════════════════════════════════"
