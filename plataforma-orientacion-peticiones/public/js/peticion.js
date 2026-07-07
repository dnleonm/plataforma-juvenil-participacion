// ======================================================
// Plataforma de Orientación y Peticiones Ciudadanas
// Clase 54 - Versión 2.0
// ======================================================

// ---------- Obtención de datos ----------

function obtenerDatosFormulario() {
  return {
    ciudad: document.getElementById("ciudad").value.trim(),
    fecha: document.getElementById("fecha").value,
    entidad: document.getElementById("entidad").value.trim(),
    nombre: document.getElementById("nombre").value.trim(),
    tipoDocumento: document.getElementById("tipoDocumento").value,
    documento: document.getElementById("documento").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    tipoPeticion: document.getElementById("tipoPeticion").value,
    asunto: document.getElementById("asunto").value.trim(),
    hechos: document.getElementById("hechos").value.trim(),
    solicitud: document.getElementById("solicitud").value.trim(),
    anexos: document.getElementById("anexos").value.trim(),
    aceptaRevision: document.getElementById("aceptaRevision").checked
  };
}

// ---------- Validaciones ----------

function validarDatos(datos) {

  const campos = [
    "ciudad",
    "fecha",
    "entidad",
    "nombre",
    "tipoDocumento",
    "documento",
    "correo",
    "tipoPeticion",
    "asunto",
    "hechos",
    "solicitud"
  ];

  for (const campo of campos) {
    if (!datos[campo]) {
      return `El campo "${campo}" es obligatorio.`;
    }
  }

  if (!datos.aceptaRevision) {
    return "Debe aceptar que el documento corresponde a un borrador.";
  }

  return null;
}

// ---------- Orientación territorial ----------

function mensajeAyudaTipo(tipo) {

  const mensajes = {

    derecho_peticion:
      "El derecho de petición permite solicitar información, copias, actuaciones o respuestas a una entidad.",

    informacion_publica:
      "Solicite información pública que repose en poder de una entidad.",

    copias:
      "Permite solicitar copia de documentos o actuaciones administrativas.",

    estado_tramite:
      "Permite consultar el estado de una solicitud previamente presentada.",

    orientacion_ruta:
      "La plataforma brinda orientación inicial sobre la entidad que podría conocer el caso.",

    querella_policiva:
      "La querella policiva es diferente al derecho de petición y puede corresponder a asuntos de convivencia."

  };

  return mensajes[tipo] ||
    "Seleccione un tipo de solicitud para recibir orientación.";
}

function actualizarAyudaTipoPeticion() {

  const tipo = document.getElementById("tipoPeticion").value;

  document.getElementById("ayudaTipoPeticion").textContent =
    mensajeAyudaTipo(tipo);

}

// ---------- Documento local ----------

function generarBorradorLocal(datos) {

  return `${datos.ciudad}, ${datos.fecha}

Señores
${datos.entidad}

Asunto:
${datos.asunto}

Tipo de solicitud:
${datos.tipoPeticion}

Yo, ${datos.nombre},
identificado(a) con ${datos.tipoDocumento}
No. ${datos.documento},

presento respetuosamente la siguiente solicitud.

1. Hechos

${datos.hechos}

2. Solicitud

${datos.solicitud}

3. Medio de notificación

${datos.correo}

4. Anexos

${datos.anexos || "No se indican anexos."}

--------------------------------------------------

ADVERTENCIA

Este documento corresponde a un borrador editable.

Debe revisarse antes de presentarse
ante cualquier entidad pública.

La plataforma orienta,
pero no reemplaza asesoría jurídica.
`;

}

// ---------- Vista previa ----------

function mostrarVistaPrevia() {

  const datos = obtenerDatosFormulario();

  const error = validarDatos(datos);

  if (error) {
    alert(error);
    return;
  }

  document.getElementById("vistaPrevia").textContent =
    generarBorradorLocal(datos);

}

// ---------- Copiar ----------

async function copiarBorrador() {

  const texto =
    document.getElementById("vistaPrevia").textContent;

  if (!texto || texto.includes("Complete")) {

    alert("Primero genere la vista previa.");

    return;

  }

  await navigator.clipboard.writeText(texto);

  alert("Borrador copiado correctamente.");

}

// ---------- Backend ----------

async function enviarAlBackend(event) {

  event.preventDefault();

  const datos = obtenerDatosFormulario();

  const error = validarDatos(datos);

  if (error) {

    alert(error);

    return;

  }

  const resultado =
    document.getElementById("resultadoBackend");

  resultado.innerHTML =
    "<p>Enviando solicitud...</p>";

  try {

    const respuesta = await fetch(
      "/api/peticiones/generar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
      }
    );

    const data = await respuesta.json();

    if (!respuesta.ok) {

      resultado.innerHTML =
        `<p>${data.mensaje}</p>`;

      return;

    }

    resultado.innerHTML = `
      <p><strong>${data.mensaje}</strong></p>

      <p>
      Estado:
      ${data.estado}
      </p>

      <p>
      Modo:
      ${data.modo}
      </p>

      ${
        data.documentoEditable
          ? `<p>Documento editable preparado correctamente (modo ${data.documentoEditable.modo}).</p>`
          : ""
      }

      ${
        data.linkDocumento
          ? `<p><a href="${data.linkDocumento}" target="_blank">Abrir documento</a></p>`
          : "<p>Google Docs aún funciona en modo mock.</p>"
      }

    `;

  } catch (error) {

    console.error(error);

    resultado.innerHTML =
      "<p>No fue posible conectar con el servidor.</p>";

  }

}

// ---------- Inicialización ----------

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("fecha").value =
    new Date().toISOString().split("T")[0];

  document
    .getElementById("tipoPeticion")
    .addEventListener(
      "change",
      actualizarAyudaTipoPeticion
    );

  document
    .getElementById("btnVistaPrevia")
    .addEventListener(
      "click",
      mostrarVistaPrevia
    );

  document
    .getElementById("btnCopiar")
    .addEventListener(
      "click",
      copiarBorrador
    );

  document
    .getElementById("formPeticion")
    .addEventListener(
      "submit",
      enviarAlBackend
    );

  actualizarAyudaTipoPeticion();

});