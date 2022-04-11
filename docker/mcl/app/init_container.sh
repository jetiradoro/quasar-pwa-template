#!/bin/bash

#windows compatibility
cat /scripts/.bashrc >> /root/.bashrc
dos2unix /root/.bashrc


cd /app

if [ ! -d "/app/node_modules" ]; then
        echo "installing node libraries...";
        npm install;
fi

# npm run build

if [ "$DOCKER_ENV" == "dev" ]; then
        quasar dev pwa
else
        quasar build -m pwa
        quasar serve -p 443 dist/pwa --history
fi
