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

  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
});

app.listen(3000);
