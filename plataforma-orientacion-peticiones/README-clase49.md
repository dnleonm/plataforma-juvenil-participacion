# Clase 49 - Integración Documentada con n8n, DeepSeek, Google y Telegram

## Objetivo

Preparar la arquitectura de integración entre el formulario de derecho de petición desarrollado en Node.js y los servicios externos que automatizarán el procesamiento del documento.

La integración contempla el uso de n8n como orquestador del flujo, DeepSeek para mejorar la redacción del borrador, Google Docs para generar un documento editable, Google Sheets para registrar el seguimiento de las solicitudes y Telegram para enviar notificaciones sin exponer información sensible.

## Historias de Usuario (ClickUp)

- HU-04 - Conectar Node.js con n8n.
- HU-05 - Generar documento editable en Google Docs.
- HU-06 - Registrar petición en Google Sheets.
- HU-07 - Enviar alerta no sensible por Telegram.

## Arquitectura propuesta

Formulario Web

↓

Node.js

↓

Webhook n8n

↓

DeepSeek

↓

Google Docs

↓

Google Sheets

↓

Telegram

↓

Respuesta al usuario

## Archivos creados y actualizados

### Documentación

- docs/flujo-n8n-deepseek-google-docs.md
- docs/modelo-google-sheets-peticiones.md
- docs/mensaje-telegram-no-sensible.md
- docs/configuracion-cuentas-tokens.md

### Proyecto

- .env.example
- src/services/n8n.service.js
- src/routes/peticiones.routes.js

### Evidencias

- README-clase49.md
- BITACORA-CLASE49.md

## Estado del proyecto

Actualmente el proyecto continúa funcionando en **modo mock**, debido a que la instancia de n8n utilizada durante las prácticas anteriores ya no se encuentra disponible.

Toda la arquitectura quedó preparada para conectar nuevamente los servicios cuando existan credenciales, permisos y cuentas activas.

## Buenas prácticas aplicadas

- Uso de variables de entorno.
- Protección de credenciales.
- No publicación de archivos `.env`.
- No inclusión de API Keys en GitHub.
- Separación entre configuración y código.
- Minimización de datos enviados por Telegram.
- Documentación de bloqueos cuando un servicio externo no está disponible.

## Próxima clase

Configurar la integración real entre Node.js y n8n, conectar los servicios externos disponibles y reemplazar progresivamente el modo mock por un flujo completamente automatizado.