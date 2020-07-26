export function createPost(req, res) {
  res.send(req.user);
}

export function getAllPost(req, res) {
  res.send("get all posts");
}

export function getOnePost(req, res) {
  res.send("get post by ID");
}

export function getPostComments(req, res) {
  res.send("get post comments");
}

export function updatePost(req, res) {
  res.send("update post");
}

export function deletePost(req, res) {
  res.send("delete post");
}
