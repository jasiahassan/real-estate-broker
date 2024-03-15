const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const propertyController = require("../controllers/propertyController");

router.get(
  "/getAllProperties",
  authController.protect,
  propertyController.getAllProperties
);

module.exports = router;
