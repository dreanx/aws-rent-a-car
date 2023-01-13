const express = require("express");
const carRouter = express.Router();
const carHandlers = require("./carHandlers");

carRouter.get("/", carHandlers.getAllCars);
carRouter.get("/:id", carHandlers.getCarByID);

module.exports = carRouter;
