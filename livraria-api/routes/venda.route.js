import express from "express";
import { authorize } from "../controllers/auth.controller.js";
import VendaController from "../controllers/venda.controller.js";

const router = express.Router();

router.post("/", authorize("admin","cliente"), VendaController.createVenda);
router.get("/", authorize("admin"), VendaController.getVendas);
router.get("/:id", authorize("admin", "cliente"), VendaController.getVenda);

export default router;