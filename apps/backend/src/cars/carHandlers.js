const database = require("../database");

const getAllCars = (req, res) => {
  database
    .query("SELECT * FROM cars")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

const getCarByID = (req, res) => {
  const carID = req.params.id;
  database
    .query("SELECT * FROM cars WHERE CarID = ?", [carID])
    .then((result) => {
      if (result[0].length === 0) {
        res.status(404).send("This car is not in the list.");
      } else {
        res.status(200).json(result[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  getAllCars,
  getCarByID
};
