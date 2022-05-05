import db from "../db/db.js";
import { DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const PeliculasSeriesModel = db.define(process.env.TABLE_PELICULAS_SERIES, {
  imagen: {
    type: DataTypes.STRING,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  fechaCreacion: {
    type: DataTypes.STRING,
  },
  calificacion: {
    type: DataTypes.INTEGER,
  },
  // personajesAsociados: {
  //   type: DataTypes.INTEGER,
  // },
});

export default PeliculasSeriesModel;
