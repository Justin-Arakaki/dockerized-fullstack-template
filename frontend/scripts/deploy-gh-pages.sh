#!/bin/sh

npm run build
echo "justarakaki.dev" > ./dist/CNAME
gh-pages -d dist
