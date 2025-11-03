#!/bin/bash
# ============================================================
# 🚀 JEPETO AUTO SERVER SETUP (versión final automatizada)
# Configuración completa y mantenimiento continuo del servidor
# Autor: Juan Sosoñuk
# Dominio: jepeto.es
# ============================================================

set -e

# --- CONFIGURACIÓN ---
DOMINIO="jepeto.es"
EMAIL_SSL="info@jepeto.es"
GIT_REPO="git@github.com:juansoso666/jepeto-web.git"
WEB_DIR="/var/www/jepeto"
CARPETA_WEB="jepeto-reformas"
NGINX_CONF="/etc/nginx/sites-available/$DOMINIO"
LOGFILE="/var/log/jepeto-install.log"

echo "============================================================" | tee -a $LOGFILE
echo "🧠 Iniciando instalación/actualización automática de Jepeto Reformas" | tee -a $LOGFILE
date | tee -a $LOGFILE

# --- ACTUALIZAR SISTEMA ---
echo "📦 Actualizando sistema..." | tee -a $LOGFILE
sudo apt update -y && sudo apt upgrade -y

# --- INSTALAR DEPENDENCIAS ---
echo "🧩 Instalando dependencias necesarias..." | tee -a $LOGFILE
sudo apt install -y nginx git certbot python3-certbot-nginx ufw fail2ban unattended-upgrades

# --- FIREWALL ---
if ! sudo ufw status | grep -q "active"; then
  echo "🧱 Configurando firewall..." | tee -a $LOGFILE
  sudo ufw allow OpenSSH
  sudo ufw allow 'Nginx Full'
  sudo ufw --force enable
fi

# --- DIRECTORIO WEB ---
sudo mkdir -p $WEB_DIR
sudo chown -R $USER:$USER $WEB_DIR

# --- CLONAR O ACTUALIZAR WEB ---
if [ ! -d "$WEB_DIR/$CARPETA_WEB" ]; then
  echo "🌐 Clonando repositorio de GitHub..." | tee -a $LOGFILE
  git clone $GIT_REPO $WEB_DIR
else
  echo "🔁 Actualizando proyecto existente..." | tee -a $LOGFILE
  cd "$WEB_DIR/$CARPETA_WEB"
  git pull origin main || echo "⚠️ No se pudo hacer git pull, revisa la clave SSH"
fi

# --- CONFIGURAR NGINX ---
echo "⚙️ Configurando Nginx..." | tee -a $LOGFILE
sudo bash -c "cat > $NGINX_CONF" <<EOL
server {
    listen 80;
    server_name $DOMINIO www.$DOMINIO;

    root $WEB_DIR/$CARPETA_WEB;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }

    access_log /var/log/nginx/jepeto.access.log;
    error_log /var/log/nginx/jepeto.error.log;
}
EOL

sudo ln -sf $NGINX_CONF /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# --- SSL ---
echo "🔒 Configurando SSL con Certbot..." | tee -a $LOGFILE
sudo certbot --nginx -d $DOMINIO -d www.$DOMINIO --non-interactive --agree-tos -m $EMAIL_SSL --redirect || echo "⚠️ SSL no generado, revisa conexión y dominio."

# --- FAIL2BAN Y SEGURIDAD ---
echo "🛡️ Configurando Fail2Ban y seguridad..." | tee -a $LOGFILE
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# --- ACTUALIZACIONES AUTOMÁTICAS ---
echo "♻️ Activando actualizaciones automáticas..." | tee -a $LOGFILE
sudo dpkg-reconfigure -f noninteractive unattended-upgrades

# --- CRON DIARIO DE ACTUALIZACIÓN DE LA WEB ---
CRON_JOB="/etc/cron.d/jepeto_auto_update"
if [ ! -f "$CRON_JOB" ]; then
  echo "🕒 Programando actualización diaria..." | tee -a $LOGFILE
  echo "0 4 * * * root cd $WEB_DIR/$CARPETA_WEB && git pull origin main && systemctl reload nginx" | sudo tee $CRON_JOB > /dev/null
fi

# --- AUTORUN AL ARRANCAR (solo se agrega si no existe) ---
CRON_EXISTS=$(sudo crontab -l 2>/dev/null | grep -F "@reboot bash /home/$USER/jepeto-auto-server.sh" || true)
if [ -z "$CRON_EXISTS" ]; then
  echo "🧠 Configurando ejecución automática al reiniciar..." | tee -a $LOGFILE
  (sudo crontab -l 2>/dev/null; echo "@reboot bash /home/$USER/jepeto-auto-server.sh >> /var/log/jepeto-boot.log 2>&1") | sudo crontab -
fi

# --- FINAL ---
echo "✅ Instalación y automatización completa." | tee -a $LOGFILE
echo "🌍 Tu sitio está activo en: https://$DOMINIO" | tee -a $LOGFILE
echo "📁 Directorio web: $WEB_DIR/$CARPETA_WEB" | tee -a $LOGFILE
echo "📜 Log: $LOGFILE" | tee -a $LOGFILE
echo "============================================================" | tee -a $LOGFILE
