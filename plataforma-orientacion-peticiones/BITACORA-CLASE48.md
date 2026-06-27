# Bitácora Clase 48

## Datos

**Nombre:** Nicolás León Martínez
**Fecha:** 26/06/2026
**Clase:** 48
**Rama GitHub:** clase-48-formulario-peticion-node

## Comunicaciones

**¿Qué tarjeta se trabajó en ClickUp?**

Se trabajaron las tarjetas **HU-03 - Crear formulario de derecho de petición** y **HU-04 - Conectar Node.js con n8n**.

**¿Qué criterios de aceptación se cumplieron?**

Se implementó un formulario funcional, se generó una vista previa local del borrador, se habilitó la opción para copiar el contenido y se realizó el envío de la información al backend mediante una ruta POST, utilizando un servicio n8n en modo mock.

**¿Qué mensaje debe entender el usuario antes de generar el borrador?**

Que el documento generado es un **borrador de apoyo pedagógico**, debe revisarse antes de ser presentado oficialmente y durante las pruebas solo deben utilizarse datos simulados.

## Jurídico

**¿Qué datos mínimos pide el formulario?**

Ciudad, fecha, entidad destinataria, nombre del solicitante, tipo y número de documento, correo electrónico, tipo de petición, asunto, hechos, solicitud y anexos cuando corresponda.

**¿Qué datos no se deben usar en clase?**

No deben utilizarse datos personales reales, documentos oficiales, información sensible, credenciales, API Keys ni información confidencial.

**¿Por qué el documento sigue siendo un borrador?**

Porque requiere revisión por parte del usuario antes de su radicación, validando que la información sea correcta, completa y adecuada para el trámite correspondiente.

## Tecnología

**¿Qué archivos se crearon o modificaron?**

Se modificaron `public/peticion.html`, `public/css/styles.css`, `server.js` y `.env.example`. Además, se crearon `public/js/peticion.js`, `src/routes/peticiones.routes.js`, `src/services/n8n.service.js`, `README-clase48.md` y `BITACORA-CLASE48.md`.

**¿Qué ruta POST se creó?**

`POST /api/peticiones/generar`

**¿Qué significa modo mock?**

Es una simulación del servicio n8n que permite probar el funcionamiento del backend cuando el webhook real aún no ha sido configurado.

**¿Qué variable se usará para conectar n8n?**

`N8N_WEBHOOK_PETICION`

## Evidencia

**¿Se generó vista previa local?**

Sí.

**¿Se copió el borrador?**

Sí.

**¿El backend respondió?**

Sí, respondió correctamente utilizando el servicio en modo mock.

**Commit realizado:**

`Clase 48 agrega formulario funcional y ruta peticiones`

**Estado final de la tarjeta ClickUp:**

Completada y lista para continuar con la integración real de n8n en la siguiente clase.
