const Trips = require("../db/models/Trips");
let trips = require("../trips");

exports.getTrips = async (req, res, next) => {
  try {
    const tripsArray = await Trips.find();
    res.json(tripsArray);
  } catch (error) {
    next(error);
  }
};
exports.fetchTrips = async (req, res, next) => {
  const { tripTitle } = req.params;
  try {
    const tripOne = await Trips.findOne({ title: tripTitle });
    next({ status: 404, message: "Something Went Wrong" });
  } catch (error) {
    next(error);
  }
};
exports.createTrips = async (req, res, next) => {
  try {
    const newTrips = await Trips.create(req.body);
    trips.push(newTrips);
    res.status(201).json(newTrips);
  } catch (error) {
    next(error);
  }
};

exports.deleteTrips = async (req, res, next) => {
  const { tripsId } = req.params;
  try {
    const tripOne = await Trips.findByIdAndDelete({ _id: tripsId });
    if (tripOne) res.status(204).end();
    else next({ status: 404, message: "Something Went Wrong" });
  } catch (error) {
    next(error);
  }
};

exports.updateTrips = async (req, res, next) => {
  const { tripId } = req.params;
  try {
    const trip = await Trips.findByIdAndUpdate({ _id: tripId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (trip) res.json(trip);
    else next({ status: 404, message: "Something Went Wrong" });
  } catch (error) {
    next(error);
  }
};
