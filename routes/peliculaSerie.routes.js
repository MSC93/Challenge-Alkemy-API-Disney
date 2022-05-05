import express from "express";
import {
  createPelisSeries,
  updatePelisSeries,
  getAllPelisSeries,
  getPelisSeries,
  deletePelisSeries,
} from "../controllers/peliculasSeries.controller.js";
const router = express.Router();

router.get("/", getAllPelisSeries);
router.get("/:id", getPelisSeries);
router.post("/", createPelisSeries);
router.put("/:id", updatePelisSeries);
router.delete("/:id", deletePelisSeries);

export default router;
