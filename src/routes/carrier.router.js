const express = require("express");
const router = express.Router();
const carrierController = require("../controllers/carrier.controller");

router.get("/", carrierController.getAllCarriers);
router.get("/:carrierId", carrierController.getCarrierById);
router.post("/", carrierController.createCarrier);
router.put("/:carrierId", carrierController.updateCarrier);
router.delete("/:carrierId", carrierController.deleteCarrier);
module.exports = router;
