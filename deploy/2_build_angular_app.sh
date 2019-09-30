#!/bin/bash

# Node v12
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# npm
sudo npm install npm@latest -g

# Angular
export NG_CLI_ANALYTICS=ci
sudo npm install -g @angular/cli

# Build prod dist
sudo chown -R $USER:$(id -gn $USER) /home/ubuntu/.config
cd ~/spazetime/spazetime-frontend
npm install
ng build --prod
