import express from "express";
import LivroController from "../controllers/livro.controller.js";
import {authorize} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/", authorize("admin"), LivroController.createLivro);
router.put("/", authorize("admin"), LivroController.updateLivro);
router.delete("/:id", authorize("admin"), LivroController.deleteLivro);
router.get("/:id", authorize("admin","cliente"), LivroController.getLivro);
router.get("/", authorize("admin","cliente"), LivroController.getLivros);
router.post("/info", authorize("admin"), LivroController.createInfo);
router.put("/info", authorize("admin"), LivroController.updateInfo);
router.delete("/info/:id", authorize("admin"), LivroController.deleteInfo);
router.post("/:id/avaliacao", authorize("admin","cliente"), LivroController.createAvaliacao);
router.delete("/:id/avaliacao/:index", LivroController.deleteAvaliacao);

export default router;