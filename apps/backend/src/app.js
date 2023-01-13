require("dotenv").config();

const express = require("express");
const cors = require("cors");

const database = require("./database");
const carRouter = require("./cars/carRouter");

const BACKEND_PORT = process.env.BACKEND_PORT ?? 5055;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", carRouter);

app.listen(BACKEND_PORT, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on port ${BACKEND_PORT}`);
  }
});
