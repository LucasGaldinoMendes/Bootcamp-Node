import express from "express";
import PostController from "../controllers/post.controller.js";
const router = express.Router();

router.post("/", PostController.createPosts);
router.get("/", PostController.getPosts);

export default router;