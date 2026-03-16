#!/bin/bash
# ===========================================================
#  Script automático de instalación y configuración de servidor
#  Proyecto: Jepeto Reformas
#  Autor: Juan Sosoñuk
#  Dominio: jepeto.es
# ===========================================================

set -e

# ---- CONFIGURACIÓN INICIAL ----
DOMINIO="jepeto.es"
GIT_REPO="git@github.com:juansoso666/jepeto-web.git"
WEB_DIR="/var/www/jepeto"
EMAIL_SSL="info@jepeto.es"
USER_NAME=$(whoami)

echo "🚀 Iniciando configuración del servidor para $DOMINIO..."
sleep 2

# ---- ACTUALIZACIÓN DEL SISTEMA ----
echo "📦 Actualizando paquetes..."
sudo apt update && sudo apt upgrade -y

# ---- INSTALACIÓN DE PAQUETES PRINCIPALES ----
echo "🧩 Instalando Nginx, Git, Certbot, UFW y Fail2Ban..."
sudo apt install -y nginx git certbot python3-certbot-nginx ufw fail2ban

# ---- FIREWALL (UFW) ----
echo "🧱 Configurando firewall..."
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# ---- CLONAR REPOSITORIO WEB ----
echo "🌐 Clonando el repositorio..."
sudo rm -rf "$WEB_DIR"
sudo git clone "$GIT_REPO" "$WEB_DIR"
sudo chown -R www-data:www-data "$WEB_DIR"

# ---- CONFIGURAR NGINX ----
echo "⚙️ Configurando Nginx para $DOMINIO..."

NGINX_CONF="/etc/nginx/sites-available/$DOMINIO"

sudo bash -c "cat > $NGINX_CONF" <<EOF
server {
    listen 80;
    server_name $DOMINIO www.$DOMINIO;

    root $WEB_DIR/docs;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }

    access_log /var/log/nginx/$DOMINIO.access.log;
    error_log /var/log/nginx/$DOMINIO.error.log;
}
EOF

sudo ln -sf $NGINX_CONF /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# ---- SSL CON LET’S ENCRYPT ----
echo "🔒 Configurando certificado SSL con Certbot..."
sudo certbot --nginx -d $DOMINIO -d www.$DOMINIO --non-interactive --agree-tos -m $EMAIL_SSL --redirect

# ---- TAREA AUTOMÁTICA DE RENOVACIÓN SSL ----
echo "🕒 Configurando renovación automática de certificados..."
echo "0 3 * * * /usr/bin/certbot renew --quiet" | sudo tee /etc/cron.d/ssl_renew > /dev/null

# ---- FAIL2BAN CONFIG ----
echo "🛡️ Configurando Fail2Ban..."
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# ---- ACTUALIZACIONES AUTOMÁTICAS ----
echo "♻️ Activando actualizaciones automáticas..."
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -f noninteractive unattended-upgrades

# ---- NODE.JS (para servidor de subida de imágenes) ----
echo "📦 Instalando Node.js..."
if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
fi
echo "✅ Node.js $(node --version) instalado"

# ---- SERVIDOR DE SUBIDA DE IMÁGENES ----
echo "🖼️ Configurando servidor de subida de imágenes..."

# Crear servicio systemd para el servidor de subida
sudo bash -c "cat > /etc/systemd/system/jepeto-upload.service" <<'SYSTEMD'
[Unit]
Description=Jepeto Reformas - Servidor de subida de imágenes
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/jepeto
ExecStart=/usr/bin/node /var/www/jepeto/upload-server.js
Restart=on-failure
RestartSec=5
StandardOutput=journal
StandardError=journal
Environment=PORT=3001

[Install]
WantedBy=multi-user.target
SYSTEMD

sudo systemctl daemon-reload
sudo systemctl enable jepeto-upload
sudo systemctl start jepeto-upload

# ---- NGINX: proxy del servidor de subida ----
# Actualizar config de Nginx para añadir el proxy /api/
sudo bash -c "cat > $NGINX_CONF" <<EOF
server {
    listen 80;
    server_name $DOMINIO www.$DOMINIO;

    root $WEB_DIR/docs;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }

    # Proxy al servidor de subida de imágenes (admin panel)
    location /api/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        client_max_body_size 20M;
    }

    access_log /var/log/nginx/$DOMINIO.access.log;
    error_log /var/log/nginx/$DOMINIO.error.log;
}
EOF

sudo nginx -t && sudo systemctl reload nginx

echo "✅ Servidor de subida de imágenes activo en http://localhost:3001"
echo "   Revisa el token con: sudo journalctl -u jepeto-upload -n 30"

# ---- FINAL ----
echo ""
echo "✅ Instalación completada correctamente"
echo "🌍 Tu sitio web está activo en: https://$DOMINIO"
echo "🖼️ Panel de administración: https://$DOMINIO/admin/"
echo "📁 Directorio de la web: $WEB_DIR/docs"
echo "📜 Logs: /var/log/nginx/$DOMINIO.access.log / error.log"
echo ""
echo "🧠 Consejo: usa 'sudo systemctl status nginx' o 'sudo tail -f /var/log/nginx/$DOMINIO.error.log' para verificar el estado."
echo "   Para ver el token del panel admin: sudo journalctl -u jepeto-upload -n 30"
echo "✨ Disfruta de tu servidor Jepeto Reformas."
