const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const uploadUsingMulter = require("../utils/uploadUsingMulter");
const bookingController = require("../controllers/bookingController");
const sellercontroller = require("../controllers/adminControler");

router.post(
  "/addproperty",
  authController.protect,
  authController.checkAdmin,
  uploadUsingMulter.uploadPropertyPhotos,
  uploadUsingMulter.uploadVideos,
  sellercontroller.addProperty
);

router.delete(
  "/deleteproperty/:id",
  authController.protect,
  authController.checkAdmin,
  sellercontroller.deleteProperty
);
router.get(
  "/getpendingbookings",
  authController.protect,
  authController.checkAdmin,
  bookingController.getPendingBookings
);
router.patch(
  "/confirmbooking/:id",
  authController.protect,
  authController.checkAdmin,
  sellercontroller.acceptPropertyVisit
);
module.exports = router;
