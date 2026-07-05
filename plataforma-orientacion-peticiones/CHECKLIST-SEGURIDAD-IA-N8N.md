# Checklist de Seguridad IA/n8n - Semana 10

## Variables y secretos

- [x] El archivo `.env` no está publicado en GitHub.
- [x] El archivo `.gitignore` incluye `.env`.
- [x] No se publicaron API Keys.
- [x] No se publicaron tokens de Telegram.
- [x] No se publicaron claves compartidas.
- [x] Las credenciales se almacenan únicamente en variables de entorno o en servicios seguros.

## Inteligencia Artificial

- [x] No se envían datos reales a DeepSeek.
- [x] No se envían datos sensibles.
- [x] El prompt prohíbe inventar hechos.
- [x] El prompt prohíbe inventar pruebas.
- [x] El resultado generado por IA se considera un borrador editable.

## Integración con n8n

- [x] El webhook quedó documentado.
- [x] La URL de prueba no contiene información sensible.
- [x] La URL de producción quedó pendiente hasta disponer de una instancia activa.
- [x] La autenticación mediante clave compartida quedó documentada.
- [x] Los bloqueos técnicos fueron registrados correctamente.

## Servicios de Google

- [x] Google Docs no se comparte públicamente con datos reales.
- [x] Google Sheets no almacena secretos ni credenciales.
- [x] Durante las pruebas únicamente se utilizaron datos simulados.

## Telegram

- [x] El mensaje definido es no sensible.
- [x] No se envía el contenido completo del derecho de petición.
- [x] No se envían documentos de identidad.
- [x] No se envían hechos delicados ni información confidencial.

## Conclusión

Durante la Semana 10 se aplicaron buenas prácticas de seguridad para proteger credenciales, datos personales e integraciones externas. Las funcionalidades que requieren servicios de terceros quedaron documentadas y preparadas para futuras implementaciones sin comprometer la seguridad del proyecto.