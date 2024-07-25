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
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating a one
router.patch("/:id", (req, res) => {});

// Delete a one
router.delete("/:id", (req, res) => {});

module.exports = router;
