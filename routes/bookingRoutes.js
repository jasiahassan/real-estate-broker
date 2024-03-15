const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");

router.post(
  "/bookpropertyvisit/:id",
  authController.protect,
  bookingController.createBooking
);
// router.get(
//   "/getbookings",
//   authController.protect,
//   bookingController.getSellerBookings
// );

module.exports = router;
