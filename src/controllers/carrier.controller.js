const Carrier = require("../models/carrier.model");

exports.getAllCarriers = async (req, res, next) => {
  try {
    const carriers = await Carrier.find().populate("shipments");
    res.status(200).json(carriers);
  } catch (err) {
    next(err);
  }
};

exports.getCarrierById = async (req, res, next) => {
  try {
    const carrier = await Carrier.findById(req.params.carrierId);
    res.status(200).json(carrier);
  } catch (err) {
    next(err);
  }
};

exports.createCarrier = async (req, res, next) => {
  try {
    const carrier = new Carrier(req.body);
    await carrier.save();
    res.status(201).json(carrier);
  } catch (err) {
    next(err);
  }
};

exports.updateCarrier = async (req, res, next) => {
  try {
    const carrier = await Carrier.findByIdAndUpdate(
      req.params.carrierId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(carrier);
  } catch (err) {
    next(err);
  }
};

exports.deleteCarrier = async (req, res, next) => {
  try {
    await Carrier.findByIdAndDelete(req.params.carrierId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
