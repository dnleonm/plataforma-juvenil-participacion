# Bitácora Clase 52

## Datos

**Nombre:** Nicolás León Martínez

**Fecha:** 06 de julio de 2026

**Clase:** 52

**Rama GitHub:** clase-52-dashboard-seguimiento

---

## Comunicaciones

### ¿Qué historias de usuario se trabajaron?

- HU-11 - Visualizar solicitudes registradas.
- HU-12 - Mostrar información del usuario autenticado.
- HU-13 - Consultar solicitudes mediante una ruta protegida.

### ¿Qué funcionalidades se implementaron?

- Dashboard de seguimiento.
- Servicio mock de solicitudes.
- Ruta protegida para consultar información.
- Visualización dinámica de datos.
- Consulta mediante Fetch API.
- Cierre de sesión.

### ¿Qué pruebas se realizaron?

- Verificación del acceso autenticado.
- Validación del bloqueo sin iniciar sesión.
- Consulta correcta de solicitudes.
- Visualización del resumen y tabla.
- Funcionamiento del cierre de sesión.

---

## Tecnología

### ¿Qué archivos se crearon?

- `src/services/peticiones.service.js`
- `src/routes/dashboard.routes.js`
- `public/dashboard.html`
- `public/js/dashboard.js`
- `README-clase52.md`
- `BITACORA-CLASE52.md`

### ¿Qué archivos se modificaron?

- `server.js`
- `public/css/styles.css`

### ¿Qué ruta se agregó?

`GET /api/dashboard/peticiones`

### ¿Qué función cumple el servicio?

Simular la consulta de solicitudes mientras el proyecto no cuenta con una base de datos o integración definitiva.

### ¿Qué hace el middleware?

Protege la ruta verificando que la solicitud incluya la autenticación de práctica.

---

## Seguridad

- Se utilizaron únicamente datos simulados.
- No se expusieron credenciales.
- No se compartieron variables de entorno.
- El acceso al dashboard requiere autenticación.

---

## Evidencias

**Resultado de las pruebas:**

- Dashboard funcionando correctamente.
- Tabla generada dinámicamente.
- Protección de acceso validada.
- Consulta de solicitudes exitosa.
- Cierre de sesión funcionando.

**Commit realizado:**

`Clase 52 implementa dashboard de seguimiento`

**Estado final de la práctica:**

Se implementó un dashboard funcional que consulta solicitudes simuladas mediante una ruta protegida, consolidando la arquitectura del proyecto para futuras integraciones con bases de datos y servicios externos.