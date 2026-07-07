function construirContenidoDocumento(datos) {

  return {
    titulo: `Derecho de petición - ${datos.asunto}`,

    contenido: `${datos.ciudad}, ${datos.fecha}

Señores
${datos.entidad}

Asunto: ${datos.asunto}

Tipo de solicitud o ruta:
${datos.tipoPeticion}

Yo, ${datos.nombre}, identificado(a) con ${datos.tipoDocumento} No. ${datos.documento}, respetuosamente presento el siguiente borrador de solicitud.

1. Hechos o contexto

${datos.hechos}

2. Solicitud u orientación requerida

${datos.solicitud}

3. Medio de notificación

Solicito que la respuesta sea enviada al siguiente correo electrónico:

${datos.correo}

4. Anexos

${datos.anexos || "No se indican anexos."}

Atentamente,

${datos.nombre}
${datos.tipoDocumento} ${datos.documento}
${datos.correo}

--------------------------------------------------

Advertencia

Este documento corresponde a un borrador editable generado con fines pedagógicos.

Debe ser revisado antes de presentarse ante cualquier entidad pública.

La plataforma orienta al ciudadano, pero no reemplaza asesoría jurídica ni determina la competencia de una autoridad.
`
  };

}

async function prepararDocumentoEditable(datos) {

  const documento = construirContenidoDocumento(datos);

  return {

    modo: "mock",

    mensaje:
      "Documento editable preparado correctamente en modo mock.",

    titulo: documento.titulo,

    contenido: documento.contenido,

    linkGoogleDoc: null,

    linkWordDocx: null

  };

}

module.exports = {

  construirContenidoDocumento,

  prepararDocumentoEditable

};