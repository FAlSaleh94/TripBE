const express = require("express");
const router = express.Router();

const {
  getTrips,
  fetchTrips,
  createTrips,
  deleteTrips,
  updateTrips,
} = require("./conroller");

// get all trips
router.get("/", getTrips);
// get detail trips
router.get("/:tripTitle", fetchTrips);
// creat trips
router.post("/", createTrips);
// to delete
router.delete("/:tripsId", deleteTrips);
// to update
router.put("/:tripId", updateTrips);

module.exports = router;
