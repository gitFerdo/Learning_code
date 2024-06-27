const express = require("express");

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

app.listen(3000);
