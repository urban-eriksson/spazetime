#!/bin/bash

# NGINX server setup
sudo apt install -y nginx
# site_location="/etc/nginx/sites-available/spazetime.org"
site_location="/etc/nginx/sites-available/localsolartime.org"

# Create the Nginx server block file:
sudo tee $site_location > /dev/null <<EOF

server {
    listen 80;
    listen [::]:80;

    # server_name spazetime.org www.spazetime.org;
    server_name localsolartime.org www.localsolartime.org;
    
    root /home/ubuntu/spazetime/spazetime-frontend/dist/spazetime-frontend;

    location / {
        try_files \$uri\$args \$uri\$args/ /index.html;
    }
}

EOF

# Link to make it available
sudo rm /etc/nginx/sites-enabled/default
sudo ln -s $site_location /etc/nginx/sites-enabled/

# Restart nginx
sudo systemctl restart nginx
