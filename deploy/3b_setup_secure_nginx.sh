#!/bin/bash

# NGINX server setup
sudo apt install -y nginx
site_location="/etc/nginx/sites-available/spazetime.org"

# Create the Nginx server block file:
sudo tee $site_location > /dev/null <<EOF 


server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        include snippets/self-signed.conf;
        include snippets/ssl-params.conf;


        root /home/ubuntu/spazetime/spazetime-frontend/dist/spazetime-frontend;

        location / {
            try_files \$uri\$args \$uri\$args/ /index.html;
        }

}

server {
    listen 80;
    listen [::]:80;

    server_name _;

    return 301 https://\$host\$request_uri;
}


EOF

# Link to make it available
sudo rm /etc/nginx/sites-enabled/default
sudo ln -s $site_location /etc/nginx/sites-enabled/

# Restart nginx
sudo systemctl restart nginx

# Let's encrypt
sudo add-apt-repository ppa:certbot/certbot
sudo apt install python-certbot-nginx
