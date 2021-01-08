const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/music-social-media", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (e) {
    console.log(e);
  }
};

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

connectToDb();
const userRoutes = require("./api/users");
app.use("/api/users", userRoutes);

const port = process.env.PORT || "5000";
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
