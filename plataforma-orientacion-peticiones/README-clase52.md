# Clase 52 - Dashboard de Seguimiento de Peticiones

## Objetivo

Implementar un dashboard de seguimiento que permita visualizar las solicitudes de práctica registradas, utilizando autenticación básica, rutas protegidas y un servicio de datos en modo mock.

---

## Historias de Usuario

- HU-11 - Visualizar solicitudes registradas.
- HU-12 - Mostrar información del usuario autenticado.
- HU-13 - Consultar solicitudes mediante una ruta protegida.

---

## Archivos creados

- `src/services/peticiones.service.js`
- `src/routes/dashboard.routes.js`
- `public/dashboard.html`
- `public/js/dashboard.js`
- `README-clase52.md`
- `BITACORA-CLASE52.md`

---

## Archivos modificados

- `server.js`
- `public/css/styles.css`

---

## Funcionalidades implementadas

- Dashboard de seguimiento.
- Consulta de solicitudes en modo mock.
- Protección de rutas mediante middleware.
- Visualización del usuario autenticado.
- Construcción dinámica de la tabla.
- Cierre de sesión.

---

## Pruebas realizadas

- Acceso al dashboard con sesión iniciada.
- Bloqueo del dashboard sin autenticación.
- Consulta de solicitudes.
- Visualización del total de registros.
- Funcionamiento del botón cerrar sesión.

---

## Próximos pasos

- Integrar Google Sheets como fuente de datos.
- Incorporar base de datos.
- Implementar filtros.
- Agregar búsqueda.
- Implementar control de acceso por roles.