import express from "express";
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", LivroController.createLivro);
router.put("/", LivroController.updateLivro);
router.delete("/:id", LivroController.deleteLivro);
router.get("/:id", LivroController.getLivro);
router.get("/", LivroController.getLivros);
router.post("/info", LivroController.createInfo);
router.put("/info", LivroController.updateInfo);
router.delete("/info/:id", LivroController.deleteInfo);
router.post("/:id/avaliacao", LivroController.createAvaliacao);
router.delete("/:id/avaliacao/:index", LivroController.deleteAvaliacao);

export default router;