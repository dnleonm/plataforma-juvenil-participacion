# Modelo de Google Sheets - Seguimiento de Peticiones

## Objetivo

Definir la estructura mínima de la hoja de cálculo que registrará el seguimiento de las solicitudes generadas por la plataforma.

## Nombre sugerido

Seguimiento Peticiones Ciudadanas

## Columnas

| Columna | Descripción |
|---------|-------------|
| id | Identificador único de la solicitud. |
| fecha | Fecha de creación del registro. |
| nombre_practica | Nombre utilizado durante la práctica. No usar datos reales. |
| correo_practica | Correo de práctica utilizado para las pruebas. |
| entidad | Entidad destinataria de la petición. |
| asunto | Asunto principal del documento. |
| tipo_peticion | Tipo de derecho de petición seleccionado. |
| estado | Estado actual de la solicitud. |
| link_google_doc | Enlace al documento editable generado en Google Docs. |
| link_word_docx | Enlace al documento exportado en formato Word, si existe. |
| notificado_telegram | Indica si se envió la notificación por Telegram. |
| observaciones | Comentarios adicionales sobre el proceso. |

## Flujo esperado

1. Node.js recibe la información del formulario.
2. n8n procesa la solicitud.
3. Se genera el documento en Google Docs.
4. Se registra una nueva fila en Google Sheets.
5. Se envía una notificación por Telegram.

## Estado actual

La integración con Google Sheets queda documentada. Durante esta práctica no se realizó la conexión debido a la ausencia de credenciales y autorizaciones activas, por lo que el proyecto continúa utilizando el modo **mock**.