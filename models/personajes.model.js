import db from "../db/db.js";
import { DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const PersonajesModel = db.define(process.env.TABLE_PERSONAJES, {
  imagen: {
    type: DataTypes.STRING,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  edad: {
    type: DataTypes.INTEGER,
  },
  peso: {
    type: DataTypes.INTEGER,
  },
  historia: {
    type: DataTypes.STRING,
  },
  // PeliculasYSeriesAsociadas: {
  //   type: DataTypes.INTEGER,
  // },
});

export default PersonajesModel;
