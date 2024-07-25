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
router.get("/:id", getSubscriber, (req, res) => {
  res.json(res.subscriber);
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
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }

  if (req.body.subscriberToChannel != null) {
    res.subscriber.subscriberToChannel = req.body.subscriberToChannel;
  }

  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a one
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.deleteOne();
    res.json({ message: "Delete success" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

async function getSubscriber(req, res, next) {
  let subscriber;

  try {
    subscriber = await Subscriber.findById(req.params.id);

    if (subscriber == null) {
      return res.status(404).json({ message: "No subscriber found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.subscriber = subscriber;
  next();
}

module.exports = router;
