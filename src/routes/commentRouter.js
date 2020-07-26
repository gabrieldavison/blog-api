import express from "express";
import * as commentController from "../controllers/commentController";

const router = express.Router();

router.post("/", commentController.createComment);
router.put("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);

export default router;
