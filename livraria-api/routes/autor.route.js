import express from "express";
import AutorRoute from "../controllers/autor.controller.js";

const router = express.Router();

router.post("/", AutorRoute.createAutor);
router.put("/", AutorRoute.updateAutor);
router.get("/", AutorRoute.getAutores);
router.get("/:id", AutorRoute.getAutor);
router.delete("/:id", AutorRoute.deleteAutor);

export default router;
