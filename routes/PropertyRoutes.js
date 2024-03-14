const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const propertyController = require("../controllers/propertyController");

router.post("/AddProperty", propertyController.addproperty);
router.get("/getAllProperties", propertyController.getAllProperties);

module.exports = router;
