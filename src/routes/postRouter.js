import express from "express";
import * as postController from "../controllers/postController";
import auth from "../middleware/auth";

const router = express.Router();

//Creates a new post
router.post("/", auth.verifyToken, auth.checkToken, postController.createPost);

//Gets all posts
router.get("/", postController.getAllPost);

//Gets a specific post
router.get("/:id", postController.getOnePost);

//Gets the comments for a specific post
router.get("/:id/comments", postController.getPostComments);

//Edits a post
router.put("/:id", postController.updatePost);

//Deletes a post
router.delete("/:id", postController.deletePost);

export default router;
