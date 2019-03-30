const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("All good");
});

exports.app = functions.https.onRequest(app);
