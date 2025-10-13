DEPLOY_GUIDE.md — Jepeto Reformas | Despliegue local y a servidor

1) Preparación (PC)
   - Generar SSH (si no existe):
     ssh-keygen -t ed25519 -C "info@jepeto.es"
   - Agregar clave a GitHub: copia ~/.ssh/id_ed25519.pub y pégala en GitHub -> Settings -> SSH and GPG keys
   - Instalar Git: winget install --id Git.Git -e --source winget

2) Subir proyecto a GitHub
   cd C:\ruta\al\proyecto
   git init
   git add .
   git commit -m "Primera versión"
   git remote add origin git@github.com:TUUSUARIO/jepeto-web.git
   git push -u origin main

3) Despliegue local temporal (rápido)
   cd C:\ruta\al\proyecto
   python -m http.server 8080
   Abrir http://localhost:8080 en el navegador

4) Despliegue local (Nginx / WSL2) — producción simulada
   - Instalar WSL2 + Ubuntu
   - sudo apt update && sudo apt install nginx
   - Copiar proyecto a /var/www/jepeto
   - Crear /etc/nginx/sites-available/jepeto y habilitarlo
   - sudo nginx -t && sudo systemctl restart nginx

5) Mover al servidor (ASRock/Jetson)
   - Realizar backup (tar -czvf ...)
   - scp al servidor
   - tar -xzvf ... y mover a /var/www/jepeto
   - chown -R www-data:www-data /var/www/jepeto
   - configurar Nginx y certbot (Let's Encrypt) para SSL:
     sudo apt install certbot python3-certbot-nginx
     sudo certbot --nginx -d jepeto.es -d www.jepeto.es

6) Actualizaciones posteriores
   - En PC: git add . && git commit -m "cambio" && git push
   - En servidor: cd /var/www/jepeto && git pull origin main && sudo systemctl reload nginx

7) Rutina de backups (crontab)
   - Crear script de backup y añadir un cron job diario/semana.

8) Seguridad mínima (prioritaria)
   - Habilitar UFW: sudo ufw allow 'Nginx Full' && sudo ufw enable
   - Instalar fail2ban: sudo apt install fail2ban
   - Cambiar puerto SSH y desactivar root login
   - Actualizaciones automáticas: sudo apt update && sudo apt upgrade -y
