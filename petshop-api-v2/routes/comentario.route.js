import express from "express";
import PostController from "../controllers/post.controller.js";
const router = express.Router();

router.post("/", PostController.createComentario);

export default router;