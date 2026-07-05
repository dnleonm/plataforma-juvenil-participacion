# Resumen de Cierre - Semana 10

## Avance principal

Durante la Semana 10 se construyó la base metodológica, jurídica y tecnológica de la Plataforma de Orientación y Peticiones Ciudadanas, integrando prácticas de desarrollo ágil, documentación técnica y automatización responsable.

---

## Logros alcanzados

- Organización del proyecto mediante metodología Scrumban.
- Gestión de historias de usuario en ClickUp.
- Diseño de la arquitectura inicial del sistema.
- Desarrollo de la plantilla de derecho de petición.
- Elaboración del prompt seguro para inteligencia artificial.
- Implementación del formulario web funcional.
- Generación de vista previa del documento.
- Función para copiar el borrador generado.
- Desarrollo del backend con Node.js y Express.
- Implementación del servicio n8n en modo mock.
- Documentación del flujo de integración con n8n.
- Diseño del modelo para Google Sheets.
- Documentación para Google Docs y Google Drive.
- Diseño del mensaje de Telegram con enfoque de protección de datos.
- Aplicación de buenas prácticas de seguridad mediante variables de entorno.

---

## Bloqueos identificados

Durante la iteración se identificaron algunos bloqueos relacionados con servicios externos:

- La instancia de n8n utilizada anteriormente dejó de estar disponible al finalizar el periodo de prueba.
- No se configuró una API Key de DeepSeek durante la práctica.
- No se realizó la autorización de Google Docs, Google Drive y Google Sheets.
- No se configuró un bot activo de Telegram ni su chat_id.

Todos estos bloqueos fueron documentados y el proyecto continuó funcionando mediante el modo **mock**, permitiendo avanzar sin comprometer la arquitectura ni la seguridad.

---

## Decisión adoptada

Se decidió mantener documentadas todas las integraciones externas y continuar utilizando respuestas simuladas mientras se dispone de cuentas activas, credenciales válidas y permisos de acceso.

Esta estrategia permitió mantener la continuidad del desarrollo sin exponer información sensible.

---

## Preparación para la Semana 11

La siguiente iteración se enfocará en:

- Implementar autenticación básica.
- Crear un panel de seguimiento.
- Gestionar el estado de las solicitudes.
- Mejorar la experiencia del usuario.
- Consolidar las integraciones externas cuando estén disponibles.