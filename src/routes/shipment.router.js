const express = require("express");
const router = express.Router();
const shipmentController = require("../controllers/shipment.controller"); 

router.get("/", shipmentController.getAllShipments);
router.get("/:shipmentId", shipmentController.getShipmentById);
router.post("/", shipmentController.createShipment);
router.put("/:shipmentId", shipmentController.updateShipment);
router.delete("/:shipmentId", shipmentController.deleteShipment);
module.exports = router;
