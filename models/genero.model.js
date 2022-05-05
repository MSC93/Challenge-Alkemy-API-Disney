import db from "../db/db.js";
import { DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const GenerosModel = db.define(process.env.TABLE_GENEROS, {
  nombre: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  // PeliculasYSeriesAsociadas: {
  //   type: DataTypes.INTEGER,
  // },
});

export default GenerosModel;
