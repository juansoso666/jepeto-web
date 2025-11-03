#!/bin/bash
# ==========================================================
#  Script: update_jepeto.sh
#  Autor: Juan Sosoñuk | Jepeto Reformas
#  Descripción: Actualiza la web Jepeto Reformas desde GitHub
# ==========================================================

echo "🔄 Actualizando servidor Jepeto Reformas..."

# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Entrar al directorio del sitio
cd /var/www/jepeto || { echo "❌ No se encontró /var/www/jepeto"; exit 1; }

# Obtener últimos cambios desde GitHub
sudo -u www-data git pull origin main

# Verificar configuración Nginx
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Actualización completada."
echo "🌐 Sitio en producción actualizado con éxito."
