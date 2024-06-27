require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const posts = [
  {
    username: "user 1",
    title: "Post 1",
  },

  {
    username: "user 2",
    title: "Post 2",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.use(express.json());

app.post("/login", (req, res) => {
  // Authenticate User
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(3000);
