import Post from "../models/postModel";
import Comment from "../models/commentModel";

export async function createPost(req, res) {
  try {
    const post = await Post.create({
      title: req.body.title,
      markdown: req.body.markdown,
      author: req.user._id,
    });
    res.send(post);
  } catch (error) {
    res.status(401).json(error);
  }
}

export async function getAllPost(req, res) {
  const allPosts = await Post.find();
  res.json({ allPosts });
}

export async function getOnePost(req, res) {
  const post = await Post.findById(req.params.postId);
  res.json({ post });
}
export async function getMostRecent(req, res) {
  try {
    const recentPosts = await Post.find()
      .sort({ timestamp: "desc" })
      .limit(10)
      .exec();
    res.json(recentPosts);
  } catch (error) {
    res.status(401).json(error);
  }
}

export async function updatePost(req, res) {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.author == req.user._id) {
      post.title = req.body.title;
      post.markdown = req.body.markdown;
      await post.save();
      res.send(post);
    } else {
      res.status(403).json({ error: "you cant update that" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function deletePost(req, res) {
  try {
    const post = await Post.findById(req.params.postId, req.body);

    if (post.author == req.user._id) {
      await Post.deleteOne({ _id: post._id });
      res.send(post);
    } else {
      res.status(403).json({ error: "you cant delete that" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function getPostComments(req, res) {
  const postComments = await Comment.find({ post: req.params.postId });
  if (!postComments) {
    res.status(400).json({ error: "Post has no comments" });
  }
  res.json({ postComments });
}

export async function createComment(req, res) {
  try {
    const comment = await Comment.create({
      text: req.body.text,
      author: req.user._id,
      post: req.params.postId,
    });
    res.send(comment);
  } catch (error) {
    res.status(401).json(error);
  }
}

export async function updateComment(req, res) {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (comment.author == req.user._id) {
      comment.text = req.body.text;
      await comment.save();
      res.send(comment);
    } else {
      res.status(403).json({ error: "you cant update that comment" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function deleteComment(req, res) {
  try {
    const comment = await Comment.findById(req.params.commentId);

    if (comment.author == req.user._id) {
      await Comment.deleteOne({ _id: comment._id });
      res.send(comment);
    } else {
      res.status(403).json({ error: "you cant delete that" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}
