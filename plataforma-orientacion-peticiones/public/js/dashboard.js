const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario) {
  window.location.href = "/login.html";
}

document.getElementById("usuarioActual").innerHTML = `
<strong>${usuario.nombre}</strong><br>
Rol: ${usuario.rol}
`;

async function cargarPeticiones() {
  try {
    const respuesta = await fetch("/api/dashboard/peticiones", {
      headers: {
        "x-usuario-practica": usuario.nombre
      }
    });

    const datos = await respuesta.json();

    if (!datos.ok) {
      throw new Error(datos.mensaje);
    }

    document.getElementById("resumenDashboard").textContent =
      `Total de solicitudes: ${datos.total}`;

    const tbody = document.querySelector("#tablaPeticiones tbody");

    tbody.innerHTML = "";

    datos.peticiones.forEach((peticion) => {

      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${peticion.id}</td>
        <td>${peticion.fecha}</td>
        <td>${peticion.entidad}</td>
        <td>${peticion.asunto}</td>
        <td>${peticion.tipoPeticion}</td>

        <td>
          <select id="estado-${peticion.id}">
            <option value="borrador_generado" ${peticion.estado === "borrador_generado" ? "selected" : ""}>Borrador generado</option>
            <option value="pendiente_revision" ${peticion.estado === "pendiente_revision" ? "selected" : ""}>Pendiente revisión</option>
            <option value="requiere_ajuste" ${peticion.estado === "requiere_ajuste" ? "selected" : ""}>Requiere ajuste</option>
            <option value="revisado" ${peticion.estado === "revisado" ? "selected" : ""}>Revisado</option>
            <option value="listo_para_envio" ${peticion.estado === "listo_para_envio" ? "selected" : ""}>Listo para envío</option>
            <option value="enviado" ${peticion.estado === "enviado" ? "selected" : ""}>Enviado</option>
            <option value="cerrado" ${peticion.estado === "cerrado" ? "selected" : ""}>Cerrado</option>
          </select>
        </td>

        <td>
          ${
            peticion.linkDocumento
              ? `<a href="${peticion.linkDocumento}" target="_blank">Abrir</a>`
              : `<span class="sin-documento">Pendiente</span>`
          }
        </td>

        <td>
          <textarea
            id="obs-${peticion.id}"
            rows="3"
            style="width:100%;"
          >${peticion.observaciones}</textarea>
        </td>

        <td>
          <button onclick="actualizarEstado(${peticion.id})">
            Guardar
          </button>
        </td>
      `;

      tbody.appendChild(fila);
    });

  } catch (error) {

    console.error(error);

    document.getElementById("resumenDashboard").textContent =
      "No fue posible cargar las solicitudes.";

  }
}

async function actualizarEstado(id) {

  const estado = document.getElementById(`estado-${id}`).value;
  const observaciones = document.getElementById(`obs-${id}`).value;

  try {

    const respuesta = await fetch(`/api/dashboard/peticiones/${id}/estado`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-usuario-practica": usuario.nombre
      },
      body: JSON.stringify({
        estado,
        observaciones
      })
    });

    const datos = await respuesta.json();

    alert(datos.mensaje);

    if (datos.ok) {
      cargarPeticiones();
    }

  } catch (error) {

    console.error(error);

    alert("No fue posible actualizar la petición.");

  }

}

document.getElementById("btnCerrarSesion").addEventListener("click", () => {

  localStorage.removeItem("usuario");

  window.location.href = "/login.html";

});

cargarPeticiones();