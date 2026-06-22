# Procedimiento de despliegue y operación básica

## 1. Objetivo

Documentar los pasos necesarios para instalar, configurar, ejecutar, verificar y operar la aplicación Node.js construida durante la Semana 9.

## 2. Entorno de trabajo

* Computador local con Visual Studio Code
* Node.js
* npm
* Express
* dotenv
* PM2
* Git

## 3. Requisitos previos

* Tener acceso al repositorio.
* Estar ubicado en la carpeta del proyecto.
* Tener Node.js instalado.
* Tener un archivo .env local.
* No subir .env al repositorio.

## 4. Variables de entorno necesarias

Crear un archivo .env local con una estructura similar:

PORT=3000
APP_NAME=App Comunitaria Semana 9
APP_ENV=development
REQUIRE_TELEGRAM=true
TELEGRAM_BOT_TOKEN=VARIABLE_LOCAL

Advertencia: nunca publicar tokens reales ni subir el archivo .env.

## 5. Instalación de dependencias

npm install

Si se crea el proyecto desde cero:

npm install express dotenv
npm install pm2 --save-dev

## 6. Ejecución con Node.js

npm start

Verificación:

http://localhost:3000/estado

## 7. Ejecución con PM2

Iniciar:
npx pm2 start server.js --name app-semana9

Listar:
npx pm2 list

Reiniciar:
npx pm2 restart app-semana9

Detener:
npx pm2 stop app-semana9

Logs:
npx pm2 logs app-semana9 --lines 20

Eliminar:
npx pm2 delete app-semana9

## 8. Rutas de verificación

* /
* /estado
* /api/info
* /diagnostico

## 9. Archivos que no deben subirse

* .env
* *.env
* node_modules/
* uploads/*
* logs/*
* tmp/*

## 10. Verificación antes del commit

git status
git check-ignore -v .env

## 11. Registro en Git

git add .
git commit -m "Clase 44 documenta despliegue y protege archivos locales"
git push

## 12. Advertencias

* No publicar tokens.
* No subir .env.
* No subir logs locales.
* No compartir credenciales.
* Verificar los cambios antes de cada commit.
