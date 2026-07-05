function verificarAutenticacion(req, res, next) {
  const usuario = req.headers["x-usuario-practica"];

  if (!usuario) {
    return res.status(401).json({
      ok: false,
      mensaje: "Acceso no autorizado."
    });
  }

  next();
}

module.exports = {
  verificarAutenticacion
};