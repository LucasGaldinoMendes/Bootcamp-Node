import express from "express";
import { authorize } from "../controllers/auth.controller.js";
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/", authorize("admin"), ClienteController.createCliente);
router.put("/", authorize("admin","cliente"), ClienteController.updateCliente);
router.get("/", authorize("admin"), ClienteController.getClientes);
router.get("/:id", authorize("admin"), ClienteController.getCliente);
router.delete("/:id", authorize("admin"), ClienteController.deleteCliente);

export default router;