const formulario = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  try {
    const respuesta = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usuario,
        password
      })
    });

    const datos = await respuesta.json();

    if (!datos.ok) {
      mensaje.textContent = datos.mensaje;
      return;
    }

    localStorage.setItem("usuario", JSON.stringify(datos.usuario));

    mensaje.textContent = "Inicio de sesión exitoso.";

    setTimeout(() => {
      window.location.href = "/zona-protegida.html";
    }, 1000);

  } catch (error) {
    mensaje.textContent = "No fue posible conectar con el servidor.";
    console.error(error);
  }
});
