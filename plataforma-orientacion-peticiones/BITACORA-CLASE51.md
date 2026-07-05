# Bitácora Clase 51

## Datos

**Nombre:** Nicolás León Martínez

**Fecha:** 05 de julio de 2026

**Clase:** 51

**Rama GitHub:** clase-51-login-roles

---

## Comunicaciones

### ¿Qué historia(s) de usuario se trabajó(aron)?

- HU-08 - Implementar inicio de sesión.
- HU-09 - Controlar acceso mediante autenticación.
- HU-10 - Mostrar información del usuario autenticado.

### ¿Qué funcionalidades se implementaron?

- Creación de usuarios de práctica.
- Desarrollo del formulario de inicio de sesión.
- Validación de credenciales en el backend.
- Almacenamiento temporal del usuario autenticado.
- Redirección a una zona protegida.
- Implementación del cierre de sesión.

### ¿Qué pruebas se realizaron?

- Inicio de sesión con credenciales válidas.
- Intento de acceso con contraseña incorrecta.
- Visualización del nombre y rol del usuario autenticado.
- Verificación del cierre de sesión.

---

## Tecnología

### ¿Qué archivos se crearon o modificaron?

- `src/data/users.json`
- `src/routes/auth.routes.js`
- `src/middleware/auth.middleware.js`
- `public/login.html`
- `public/js/login.js`
- `public/zona-protegida.html`
- `public/js/zona-protegida.js`
- `server.js`

### ¿Qué ruta se agregó?

`POST /api/auth/login`

### ¿Qué hace el middleware?

Verifica que las solicitudes cumplan una condición de autenticación antes de permitir el acceso a determinadas funcionalidades del sistema.

### ¿Qué hace localStorage en esta práctica?

Almacena temporalmente la información del usuario autenticado para mantener la sesión activa durante la navegación.

---

## Seguridad

- Se trabajó únicamente con usuarios de práctica.
- No se utilizaron datos personales reales.
- No se almacenaron contraseñas reales.
- No se publicaron credenciales ni variables de entorno.
- El acceso a la zona protegida depende de una autenticación previa.

---

## Evidencias

**Resultado de las pruebas:**

- Inicio de sesión exitoso con credenciales válidas.
- Acceso denegado con credenciales incorrectas.
- Redirección correcta a la zona protegida.
- Cierre de sesión funcionando correctamente.

**Commit realizado:**

`Clase 51 implementa login y control básico de acceso`

**Estado final de la práctica:**

La autenticación básica quedó implementada y funcionando correctamente, dejando preparada la base para futuras mejoras como autenticación mediante JWT, manejo de sesiones y control de acceso por roles.