const Shipment = require("../models/shipment.model");

exports.getAllShipments = async (req, res, next) => {
  try {
    const shipments = await Shipment.find()
    res.status(200).json(shipments);
  } catch (err) {
    next(err);
  }
};

exports.getShipmentById = async (req, res, next) => {
  try {
    const shipment = await Shipment.findById(req.params.shipmentId);
    res.status(200).json(shipment);
  } catch (err) {
    next(err);
  }
};

exports.createShipment = async (req, res, next) => {
  try {
    const newShipment = new Shipment(req.body);
    const savedShipment = await newShipment.save();
    res.status(201).json(savedShipment);
  } catch (err) {
    next(err);
  }
};

exports.updateShipment = async (req, res, next) => {
  try {
    const updatedShipment = await Shipment.findByIdAndUpdate(
      req.params.shipmentId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatedShipment);
  } catch (err) {
    next(err);
  }
};

exports.deleteShipment = async (req, res, next) => {
  try {
    const deletedShipment = await Shipment.findByIdAndDelete(
      req.params.shipmentId
    );
    res.status(200).json(deletedShipment);
  } catch (err) {
    next(err);
  }
};
