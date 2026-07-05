# Bitácora Clase 49

## Datos

**Nombre:** Nicolás León Martínez

**Fecha:** 05/07/2026

**Clase:** 49

**Rama GitHub:** clase-49-n8n-deepseek-google-telegram

---

## Historias de Usuario

### ¿Qué tarjetas se trabajaron?

- HU-04 - Conectar Node.js con n8n.
- HU-05 - Generar documento editable en Google Docs.
- HU-06 - Registrar petición en Google Sheets.
- HU-07 - Enviar alerta no sensible por Telegram.

### Estado de las tarjetas

| Tarjeta | Estado |
|----------|--------|
| HU-04 | Bloqueado parcialmente |
| HU-05 | Bloqueado parcialmente |
| HU-06 | Bloqueado parcialmente |
| HU-07 | Bloqueado parcialmente |

---

## Motivo del bloqueo

La instancia de n8n Cloud utilizada durante las prácticas anteriores dejó de estar disponible al finalizar el periodo de prueba.

Como consecuencia, no fue posible realizar la integración real con DeepSeek, Google Docs, Google Sheets y Telegram.

El proyecto continúa funcionando correctamente utilizando el modo **mock**, dejando preparada toda la arquitectura para futuras integraciones.

---

## Actividades realizadas

- Se documentó el flujo completo de automatización.
- Se preparó la configuración para n8n.
- Se documentó la integración con DeepSeek.
- Se diseñó el modelo de seguimiento para Google Sheets.
- Se documentó la generación de documentos en Google Docs.
- Se documentó la integración con Telegram.
- Se actualizaron los archivos de configuración del proyecto.
- Se verificó que no se publicaran credenciales ni información sensible.

---

## Buenas prácticas aplicadas

- Uso de variables de entorno.
- Protección de API Keys.
- No publicación del archivo `.env`.
- Minimización de datos personales.
- Separación entre configuración y código.
- Documentación de bloqueos técnicos.

---

## Evidencias

**¿El proyecto continúa funcionando?**

Sí.

**¿El backend permanece operativo?**

Sí.

**¿El modo mock sigue disponible?**

Sí.

**¿Se documentó la arquitectura completa?**

Sí.

**¿Se protegieron las credenciales?**

Sí.

---

## Commit realizado

`Clase 49 documenta flujo n8n deepseek google y telegram`

---

## Observaciones finales

La arquitectura del proyecto quedó preparada para integrar servicios externos cuando existan credenciales, cuentas activas y permisos válidos.

El modo mock permitió continuar con el desarrollo del proyecto sin interrumpir el flujo de trabajo ni comprometer la seguridad de la información.