const express = require("express");

const router = express.Router();

// Getting all
router.get("/", (req, res) => {
  res.send("Welcome");
});

// Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Creating a new one
router.post("/", (req, res) => {});

// Updating a one
router.patch("/:id", (req, res) => {});

// Delete a one
router.delete("/:id", (req, res) => {});

module.exports = router;
