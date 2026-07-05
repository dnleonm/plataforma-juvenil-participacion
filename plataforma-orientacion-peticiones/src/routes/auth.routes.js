const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const usersPath = path.join(__dirname, "../data/users.json");

function obtenerUsuarios() {
  const contenido = fs.readFileSync(usersPath, "utf8");
  return JSON.parse(contenido);
}

router.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({
      ok: false,
      mensaje: "Usuario y contraseña son obligatorios."
    });
  }

  const usuarios = obtenerUsuarios();

  const usuarioEncontrado = usuarios.find(
    (u) =>
      u.usuario === usuario &&
      u.password === password
  );

  if (!usuarioEncontrado) {
    return res.status(401).json({
      ok: false,
      mensaje: "Credenciales inválidas."
    });
  }

  return res.json({
    ok: true,
    mensaje: "Inicio de sesión exitoso.",
    usuario: {
      id: usuarioEncontrado.id,
      nombre: usuarioEncontrado.nombre,
      rol: usuarioEncontrado.rol
    }
  });
});

module.exports = router;
