import express from "express";

import OrderController from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", OrderController.createOrder);
router.put("/:id", OrderController.updateOrder);
router.patch("/:id/status", OrderController.updateStatus);
router.delete("/:id", OrderController.deleteOrder);
router.get("/search/:id", OrderController.getOrder);
router.get("/customers", OrderController.getOrderByCustomer);
router.get("/products", OrderController.getOrderByProduct);
router.get("/products/top", OrderController.getOrderByTopProducts);

router.use((error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

export default router;
