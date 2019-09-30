#!/bin/bash

# Let's encrypt
sudo add-apt-repository ppa:certbot/certbot
sudo apt install python-certbot-nginx
sudo certbot --nginx -d spazetime.org -d www.spazetime.org
