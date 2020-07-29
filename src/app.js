import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRouter from "./routes/userRouter";
import postRouter from "./routes/postRouter";
import createContent from "../createContent";

const app = express();

const mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// createContent();
//Sets up router

app.use("/user", userRouter);
app.use("/posts", postRouter);

//Handles errors from routing
app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
