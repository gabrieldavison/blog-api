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

//Edits a post
router.put(
  "/:id",
  auth.verifyToken,
  auth.checkToken,
  postController.updatePost
);

//Deletes a post
router.delete(
  "/:id",
  auth.verifyToken,
  auth.checkToken,
  postController.deletePost
);

//Gets the comments for a specific post
router.get("/:id/comments", postController.getPostComments);

//Creates a new comment for a post
router.post(
  "/:id/comments",
  auth.verifyToken,
  auth.checkToken,
  postController.createComment
);

//Updates a comment
router.put(
  "/:id/comments/:commentId",
  auth.verifyToken,
  auth.checkToken,
  postController.updateComment
);

//Deletes a comment
router.delete(
  "/:id/comments/:commentId",
  auth.verifyToken,
  auth.checkToken,
  postController.deleteComment
);

export default router;
