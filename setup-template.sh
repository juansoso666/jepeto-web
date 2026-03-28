#!/bin/bash

# setup-template.sh
# Script de configuración rápida para el template web

echo "================================================"
echo "🚀 Configuración Rápida de Template Web"
echo "================================================"
echo ""

# Función para leer input del usuario
read_input() {
    local prompt="$1"
    local default="$2"
    local result
    
    if [ -n "$default" ]; then
        read -p "$prompt [$default]: " result
        result="${result:-$default}"
    else
        read -p "$prompt: " result
    fi
    
    echo "$result"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "docs/config.json" ]; then
    echo "❌ Error: No se encuentra docs/config.json"
    echo "   Asegúrate de ejecutar este script desde la raíz del proyecto."
    exit 1
fi

echo "Este script te ayudará a configurar el template rápidamente."
echo "Presiona Enter para mantener el valor actual."
echo ""

# Backup del config.json actual
echo "📦 Creando backup de la configuración actual..."
cp docs/config.json "docs/config.json.backup.$(date +%Y%m%d_%H%M%S)"
echo "✅ Backup creado"
echo ""

# Recopilar información
echo "📝 INFORMACIÓN DE LA EMPRESA"
echo "----------------------------"
COMPANY_NAME=$(read_input "Nombre de la empresa" "Mi Empresa")
COMPANY_SLOGAN=$(read_input "Eslogan" "Tu eslogan aquí")
COMPANY_DESCRIPTION=$(read_input "Descripción breve" "Descripción de la empresa")

echo ""
echo "📞 INFORMACIÓN DE CONTACTO"
echo "--------------------------"
CONTACT_PHONE=$(read_input "Teléfono (formato: +34XXXXXXXXX)" "+34912345678")
CONTACT_EMAIL=$(read_input "Email de contacto" "info@miempresa.com")
CONTACT_WHATSAPP=$(read_input "WhatsApp" "$CONTACT_PHONE")

echo ""
echo "📍 DIRECCIÓN"
echo "------------"
ADDRESS_STREET=$(read_input "Dirección completa" "Calle Principal 123")
ADDRESS_CITY=$(read_input "Ciudad" "Madrid")
ADDRESS_POSTAL=$(read_input "Código Postal" "28001")

echo ""
echo "🌐 SITIO WEB"
echo "------------"
SITE_URL=$(read_input "URL del sitio web" "https://www.miempresa.com")

echo ""
echo "🎨 COLORES (formato hexadecimal, ej: #10b981)"
echo "---------------------------------------------"
PRIMARY_COLOR=$(read_input "Color primario" "#10b981")
SECONDARY_COLOR=$(read_input "Color secundario" "#059669")

echo ""
echo "🔧 Generando configuración..."

# Usar Python para actualizar el JSON (más seguro que sed)
python3 << PYTHON_SCRIPT
import json

with open('docs/config.json', 'r', encoding='utf-8') as f:
    config = json.load(f)

# Actualizar company
config['company']['name'] = "${COMPANY_NAME}"
config['company']['slogan'] = "${COMPANY_SLOGAN}"
config['company']['description'] = "${COMPANY_DESCRIPTION}"

# Actualizar contact
config['contact']['phone'] = "${CONTACT_PHONE}"
config['contact']['email'] = "${CONTACT_EMAIL}"
config['contact']['whatsapp'] = "${CONTACT_WHATSAPP}"
config['contact']['address']['street'] = "${ADDRESS_STREET}"
config['contact']['address']['city'] = "${ADDRESS_CITY}"
config['contact']['address']['postalCode'] = "${ADDRESS_POSTAL}"

# Actualizar SEO
config['seo']['siteUrl'] = "${SITE_URL}"
config['seo']['author'] = "${COMPANY_NAME}"

# Actualizar theme
config['theme']['primaryColor'] = "${PRIMARY_COLOR}"
config['theme']['secondaryColor'] = "${SECONDARY_COLOR}"

# Actualizar todas las páginas con el nuevo nombre de empresa
for page_key in config['pages']:
    if 'title' in config['pages'][page_key]:
        title = config['pages'][page_key]['title']
        # Reemplazar "Jepeto Reformas" con el nuevo nombre
        title = title.replace("Jepeto Reformas", "${COMPANY_NAME}")
        config['pages'][page_key]['title'] = title

# Actualizar formulario de contacto
config['pages']['contacto']['formSubmitUrl'] = f"https://formsubmit.co/${CONTACT_EMAIL}"

with open('docs/config.json', 'w', encoding='utf-8') as f:
    json.dump(config, f, ensure_ascii=False, indent=2)

print("✅ Configuración actualizada correctamente")
PYTHON_SCRIPT

if [ $? -eq 0 ]; then
    echo ""
    echo "================================================"
    echo "✅ ¡Configuración completada!"
    echo "================================================"
    echo ""
    echo "📝 PRÓXIMOS PASOS:"
    echo ""
    echo "1. Reemplaza las imágenes en docs/src/assets/images/"
    echo "   - logo.png (tu logo)"
    echo "   - favicon.png (tu favicon)"
    echo "   - hero-bg.jpg (imagen principal)"
    echo ""
    echo "2. Actualiza los servicios en docs/config.json"
    echo ""
    echo "3. Revisa y personaliza los textos restantes"
    echo ""
    echo "4. Prueba tu sitio abriendo docs/index.html"
    echo ""
    echo "📚 Documentación:"
    echo "   - TEMPLATE_GUIDE.md - Guía de uso"
    echo "   - CONFIG_INSTRUCTIONS.md - Referencia completa"
    echo ""
    echo "💾 Backup guardado en: docs/config.json.backup.*"
    echo ""
else
    echo ""
    echo "❌ Error al actualizar la configuración"
    echo "   Puedes restaurar el backup desde docs/config.json.backup.*"
    exit 1
fi
