# Clase 54 - Rutas territoriales y documento editable

## Objetivo

Fortalecer la plataforma agregando orientación territorial, mensajes de ayuda y preparación de un documento editable para apoyar al ciudadano durante la elaboración de solicitudes.

---

## Historia de Usuario

- HU-11 - Mejorar interfaz y orientación territorial.

---

## Archivos creados

- `src/services/documento.service.js`
- `docs/documento-editable-google-docs-word.md`
- `docs/orientacion-rutas-territoriales.md`
- `README-clase54.md`
- `BITACORA-CLASE54.md`

---

## Archivos modificados

- `public/peticion.html`
- `public/js/peticion.js`
- `public/dashboard.html`
- `public/js/dashboard.js`
- `src/routes/peticiones.routes.js`
- `src/services/peticiones.service.js`
- `.env.example`

---

## Funcionalidades implementadas

- Nuevos tipos de solicitud.
- Orientación territorial según la ruta elegida.
- Mensajes de ayuda dinámicos.
- Preparación de documento editable.
- Integración en modo mock para Google Docs.
- Preparación para exportación futura a Word.

---

## Tipos de solicitud disponibles

- Derecho de petición.
- Solicitud de información pública.
- Solicitud de copias.
- Solicitud de estado de trámite.
- Orientación sobre ruta institucional.
- Orientación para posible querella policiva.

---

## Documento editable

El sistema prepara un documento editable listo para integrarse posteriormente con Google Docs o Word. Mientras tanto funciona en modo mock.

---

## Advertencia

La plataforma orienta al ciudadano, pero no reemplaza asesoría jurídica, no decide la competencia de una autoridad y no radica documentos oficiales.