import express from "express";
import * as postController from "../controllers/postController";
import auth from "../middleware/auth";

const router = express.Router();

//Creates a new post
router.post("/", auth.verifyToken, auth.checkToken, postController.createPost);

//Gets all posts
router.get("/", postController.getAllPost);

//Gets most recent 10 posts
router.get("/recent", postController.getMostRecent);

//Gets a specific post
router.get("/:postId", postController.getOnePost);

//Edits a post
router.put(
  "/:postId",
  auth.verifyToken,
  auth.checkToken,
  postController.updatePost
);

//Deletes a post
router.delete(
  "/:postId",
  auth.verifyToken,
  auth.checkToken,
  postController.deletePost
);

//Gets the comments for a specific post
router.get("/:postId/comments", postController.getPostComments);

//Creates a new comment for a post
router.post(
  "/:postId/comments",
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
