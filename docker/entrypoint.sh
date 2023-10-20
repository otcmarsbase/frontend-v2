#!/bin/sh -eu
./generate-js-env.sh
./generate-js-env.sh >/usr/share/nginx/project/dynamic-config.js

echo 'Started'
nginx -g "daemon off;"