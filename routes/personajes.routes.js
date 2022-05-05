import express from "express";
import {
  createChar,
  updateChar,
  getAllChars,
  getChar,
  deleteChar,
} from "../controllers/personajes.controller.js";
const router = express.Router();

router.get("/", getAllChars);
router.get("/:id", getChar);
router.post("/", createChar);
router.put("/:id", updateChar);
router.delete("/:id", deleteChar);

export default router;
