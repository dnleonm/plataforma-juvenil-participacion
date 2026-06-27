const express = require("express");
const path = require("path");
require("dotenv").config();

const peticionesRoutes = require("./src/routes/peticiones.routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/peticiones", peticionesRoutes);

app.get("/", (req, res) => {
  res.redirect("/peticion.html");
});

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    mensaje: "Ruta no encontrada."
  });
});

app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME}`);
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});