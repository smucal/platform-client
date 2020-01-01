# platform-client

### Npm Scripts
* npm run dev (dev server on 0.0.0.0:8080)
* npm run build && npm run serve (production builld localhost:3000)
* npm run test || npm run jest (manual lint and jest tests)
```
"scripts": {
  "test": "jest",
  "dev": "webpack-dev-server --open --mode development --config ./webpack.development.js",
  "serve": "serve -l 3000 ./dist/",
  "build": "webpack --config ./webpack.production.js",
  "lint": "eslint --ext .jsx,.js ./client"
},
```
