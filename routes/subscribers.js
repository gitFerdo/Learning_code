const express = require("express");
const Subscriber = require("../models/subscribers");

const router = express.Router();

// Getting all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
