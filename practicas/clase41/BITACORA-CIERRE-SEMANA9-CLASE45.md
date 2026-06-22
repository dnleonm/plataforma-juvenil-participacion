# Bitácora de cierre - Semana 9 - Clase 45

## Datos generales

Nombre: Nicolás León Martínez

Fecha: 22/06/2026

Entorno: Computador local (PowerShell y Visual Studio Code)

Rama de trabajo: clase-45-cierre-git-integrador

## 1. Verificación de aplicación

Comando usado para levantar la aplicación:

npx pm2 start server.js --name app-semana9

Respuesta de /estado:

La aplicación respondió correctamente indicando que el servicio estaba activo.

Respuesta de /diagnostico:

La ruta respondió correctamente mostrando información básica de diagnóstico sin exponer credenciales.

Respuesta de /api/info:

La ruta respondió correctamente mostrando información general de la aplicación.

## 2. Variables de entorno

¿Qué variables se usaron?

PORT, APP_NAME, APP_ENV y variables relacionadas con Telegram.

¿Por qué .env no debe subirse?

Porque contiene configuraciones sensibles y posibles credenciales del proyecto.

## 3. Seguridad operativa

¿Qué medidas de seguridad se aplicaron durante la semana?

Uso de .env, configuración de .gitignore, uso de .gitkeep, protección de credenciales y revisión de archivos antes de realizar commits.

## 4. Diagnóstico

¿Qué error simulado se trabajó durante la semana?

Problemas relacionados con configuración y ejecución del servidor.

¿Cómo se corrigió?

Verificando variables, rutas, configuración de PM2 y archivos del proyecto.

## 5. Documentación

¿Qué documento explica el procedimiento de despliegue?

PROCEDIMIENTO-DESPLIEGUE-CLASE44.md

## 6. Git

¿Qué aprendí sobre ramas?

Permiten trabajar cambios sin afectar directamente otras versiones.

¿Qué aprendí sobre stash?

Permite guardar cambios temporalmente sin hacer commit.

¿Qué aprendí sobre merge fast-forward?

Integra cambios cuando no existen modificaciones paralelas.

¿Qué aprendí sobre merge no-fast-forward?

Genera un commit de integración para conservar el historial de la rama.

¿Qué aprendí sobre conflictos?

Ocurren cuando dos cambios modifican la misma sección de un archivo y requieren resolución manual.

## 7. Reflexión final

¿Qué fue lo más importante de la Semana 9?

Comprender que una aplicación funcional necesita documentación, seguridad, monitoreo y control de versiones para mantenerse confiable y sostenible.
