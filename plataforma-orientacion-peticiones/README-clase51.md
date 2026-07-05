# Clase 51 - Login y Control Básico de Acceso

## Objetivo

Implementar un sistema básico de autenticación para la Plataforma de Orientación y Peticiones Ciudadanas mediante usuarios de práctica, control de acceso y una primera zona protegida.

---

## Historias de Usuario

- HU-08 - Implementar inicio de sesión.
- HU-09 - Controlar acceso mediante autenticación.
- HU-10 - Mostrar información del usuario autenticado.

---

## Archivos creados

- `src/data/users.json`
- `src/routes/auth.routes.js`
- `src/middleware/auth.middleware.js`
- `public/login.html`
- `public/js/login.js`
- `public/zona-protegida.html`
- `public/js/zona-protegida.js`
- `README-clase51.md`
- `BITACORA-CLASE51.md`

---

## Funcionalidades implementadas

- Creación de usuarios de práctica.
- Inicio de sesión mediante formulario.
- Validación de credenciales en Node.js.
- Almacenamiento temporal del usuario autenticado.
- Redirección a una zona protegida.
- Cierre de sesión.
- Middleware básico de autenticación.

---

## Pruebas realizadas

- Inicio de sesión con credenciales correctas.
- Rechazo de credenciales incorrectas.
- Visualización del nombre y rol del usuario.
- Cierre correcto de la sesión.

---

## Próximos pasos

- Implementar autenticación más robusta.
- Incorporar gestión de sesiones o JWT.
- Aplicar control de acceso por roles.
- Proteger rutas sensibles del sistema.