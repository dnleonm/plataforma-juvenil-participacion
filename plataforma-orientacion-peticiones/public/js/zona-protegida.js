const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario) {
  window.location.href = "/login.html";
}

document.getElementById("nombre").textContent = usuario.nombre;
document.getElementById("rol").textContent = usuario.rol;

document.getElementById("cerrarSesion").addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.href = "/login.html";
});