import User from "../models/userModel";
import bcrypt from "bcryptjs";
import passport from "passport";
import jwt from "jsonwebtoken";

async function register(req, res, next) {
  const user = await User.create({
    userName: req.body.userName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  }).catch(next);

  return res.send(user);
}

async function login(req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({
      error: "invalid email",
    });
  }

  const loginValid = await bcrypt.compare(req.body.password, user.password);
  if (!loginValid) {
    return res.status(401).json({
      error: "wrong password",
    });
  }

  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  return res.json({ user, token });
}

function getUserPosts(req, res) {
  res.send("get user posts");
}

export default { register, login, getUserPosts };
