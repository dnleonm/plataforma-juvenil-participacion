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
        <td class="estado">${peticion.estado}</td>
        <td>${
          peticion.linkDocumento
            ? `<a href="${peticion.linkDocumento}" target="_blank">Abrir</a>`
            : '<span class="sin-documento">Pendiente</span>'
        }</td>
        <td>${peticion.observaciones}</td>
      `;

      tbody.appendChild(fila);

    });

  } catch (error) {

    console.error(error);

    document.getElementById("resumenDashboard").textContent =
      "No fue posible cargar las solicitudes.";

  }
}

document.getElementById("btnCerrarSesion").addEventListener("click", () => {

  localStorage.removeItem("usuario");

  window.location.href = "/login.html";

});

cargarPeticiones();