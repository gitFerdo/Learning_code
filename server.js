require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const subscriberRouter = require("./routes/subscribers");

const app = express();

// Connect to the database
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// Accept JSON requests
app.use(express.json());

app.use("/subscribers", subscriberRouter);

app.listen(3000, () => console.log("Server listening on port 3000"));
