import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import db from "../db/db.js";

import personajesRoutes from "../routes/personajes.routes.js";
import peliculaSerieRoutes from "../routes/peliculaSerie.routes.js";

const PORT = process.env.PORT;
const app = express();
dotenv.config();

db.sync({ force: false })
  .then(() => {
    console.log("Conexión a Database exitosa!");
  })
  .catch((err) => {
    console.log(`Error de Conexion: ${err}`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/characters", personajesRoutes);
app.use("/movies", peliculaSerieRoutes);

const server = app.listen(PORT, () =>
  console.log(`\n(💡💡💡SERVER💡💡💡) ◀▶ (🌐 http://localhost:${PORT} 🌐)\n`)
);
server.on("error", (err) => console.log(err));
