#!/bin/bash

# Let's encrypt
# Check inbound rules on aws
sudo add-apt-repository ppa:certbot/certbot
sudo apt install python-certbot-nginx
sudo certbot --nginx -d spazetime.org -d www.spazetime.org
