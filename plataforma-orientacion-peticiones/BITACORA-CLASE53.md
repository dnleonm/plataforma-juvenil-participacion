# Bitácora Clase 53

## Datos

**Nombre:** Nicolás León Martínez

**Fecha:** 07 de julio de 2026

**Clase:** 53

**Rama GitHub:** clase-53-revision-cambio-estado

---

## Comunicaciones

### ¿Qué historias de usuario se trabajaron?

- HU-14 - Revisar solicitudes registradas.
- HU-15 - Actualizar el estado de una petición.
- HU-16 - Registrar observaciones del revisor.

### ¿Qué funcionalidades se implementaron?

- Dashboard editable.
- Cambio de estado.
- Registro de observaciones.
- Validación de estados.
- Actualización mediante PATCH.

### ¿Qué pruebas se realizaron?

- Cambio de estado exitoso.
- Actualización de observaciones.
- Visualización correcta del dashboard.
- Verificación del funcionamiento del backend.

---

## Tecnología

### ¿Qué archivos se modificaron?

- `src/services/peticiones.service.js`
- `src/routes/dashboard.routes.js`
- `public/dashboard.html`
- `public/js/dashboard.js`

### ¿Qué archivos se crearon?

- `docs/checklist-revision-revisor.md`
- `README-clase53.md`
- `BITACORA-CLASE53.md`

### ¿Qué ruta se agregó?

`PATCH /api/dashboard/peticiones/:id/estado`

### ¿Qué hace el servicio?

Permite actualizar el estado y las observaciones de una petición utilizando datos simulados en modo mock.

### ¿Qué valida el backend?

- Estados permitidos.
- Existencia de la petición.
- Información mínima para la actualización.

---

## Seguridad

- Se trabajó únicamente con datos de práctica.
- No se utilizaron datos personales reales.
- No se expusieron credenciales.
- La actualización requiere autenticación previa.

---

## Evidencias

**Resultado de las pruebas:**

- Dashboard funcionando correctamente.
- Cambio de estado exitoso.
- Observaciones actualizadas correctamente.
- Respuesta del backend validada.

**Commit realizado:**

`Clase 53 implementa revisión y cambio de estado`

**Estado final de la práctica:**

Se implementó un flujo básico de revisión que permite actualizar estados y registrar observaciones, preparando la plataforma para futuras integraciones con persistencia de datos y auditoría.