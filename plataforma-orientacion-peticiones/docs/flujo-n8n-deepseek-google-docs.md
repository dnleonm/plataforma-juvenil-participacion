# Flujo n8n - DeepSeek - Google Docs

## Objetivo

Documentar el flujo de automatización propuesto para la generación de borradores de derechos de petición utilizando Node.js, n8n, DeepSeek, Google Docs, Google Sheets y Telegram.

## Flujo esperado

Formulario Web
        │
        ▼
Node.js (POST /api/peticiones/generar)
        │
        ▼
Webhook n8n
        │
        ▼
Validación básica
        │
        ▼
DeepSeek
(Mejora la redacción)
        │
        ▼
Google Docs
(Crear documento editable)
        │
        ▼
Google Sheets
(Registrar seguimiento)
        │
        ▼
Telegram
(Notificación sin datos sensibles)
        │
        ▼
Respuesta a Node.js

## Estado del flujo

Actualmente el proyecto permanece en **modo mock**, ya que la instancia de n8n Cloud utilizada durante las prácticas anteriores dejó de estar disponible al finalizar el periodo de prueba.

La arquitectura quedó preparada para conectar un webhook real cuando se disponga nuevamente de una instancia activa.

## Servicios previstos

- Node.js
- Express
- n8n
- DeepSeek API
- Google Docs
- Google Drive
- Google Sheets
- Telegram Bot

## Observaciones

La integración se encuentra documentada siguiendo la metodología del curso. Cuando existan credenciales válidas únicamente será necesario configurar el archivo `.env` y activar el workflow correspondiente en n8n.