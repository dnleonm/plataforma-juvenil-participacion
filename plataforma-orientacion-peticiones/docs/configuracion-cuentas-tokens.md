# Configuración de Cuentas y Tokens

## Objetivo

Documentar las cuentas, credenciales y servicios externos que utilizará la plataforma durante las siguientes etapas del proyecto, siguiendo buenas prácticas de seguridad.

---

# n8n

## Función

Recibir la información enviada desde Node.js mediante un Webhook y coordinar el flujo completo de automatización.

## Variables utilizadas

N8N_WEBHOOK_PETICION

N8N_SHARED_SECRET

## Estado

La integración quedó preparada.

Actualmente permanece en **modo mock**, debido a que la instancia utilizada durante las prácticas anteriores dejó de estar disponible.

---

# DeepSeek

## Función

Mejorar la redacción del borrador del derecho de petición utilizando inteligencia artificial.

## Configuración requerida

- API Key
- Nodo HTTP Request en n8n
- URL:
  https://api.deepseek.com/chat/completions

## Estado

Pendiente de configuración.

No se creó una API Key durante la práctica para evitar exponer credenciales.

---

# Google Docs

## Función

Generar automáticamente un documento editable con el borrador del derecho de petición.

## Estado

Pendiente de integración.

---

# Google Drive

## Función

Guardar automáticamente los documentos generados.

## Carpeta sugerida

Programadores para la Paz - Peticiones Generadas

## Estado

Pendiente de integración.

---

# Google Sheets

## Función

Registrar cada solicitud para realizar seguimiento del proceso.

## Estado

Pendiente de autorización mediante OAuth.

---

# Telegram

## Función

Enviar una notificación de estado sin compartir datos personales.

## Requiere

- BotFather
- Bot Token
- chat_id

## Estado

Pendiente de configuración.

---

# Buenas prácticas de seguridad

- Nunca subir el archivo `.env`.
- Nunca publicar API Keys.
- Nunca compartir tokens.
- No incluir credenciales en GitHub.
- No mostrar tokens en capturas de pantalla.
- Utilizar variables de entorno para todas las credenciales.
- Compartir únicamente archivos `.env.example` como plantilla.

---

# Conclusión

La arquitectura del proyecto quedó preparada para integrar servicios externos de forma segura. Las credenciales serán configuradas únicamente cuando existan cuentas activas y permisos válidos.