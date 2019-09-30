#!/bin/bash

# NGINX server setup
sudo apt install -y nginx
site_location="/etc/nginx/sites-available/spazetime"

# Create the Nginx server block file:
sudo tee $site_location > /dev/null <<EOF 

server {
    listen 80;
    listen [::]:80;
    
    root /home/ubuntu/spazetime/dist/spazetime;
    
    server_name _;
	
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
