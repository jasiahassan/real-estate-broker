const Booking = require("../models/bookingModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createBooking = catchAsync(async (req, res, next) => {
  const propertyId = req.params.id;
  const userId = req.user.id;
  const newBooking = await Booking.create({
    propertyId,
    userId,
  });
  res.status(201).json({
    status: "success",
    data: {
      booking: newBooking,
    },
  });
});

exports.getPendingBookings = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ status: "pending" });
  if (bookings.length < 1) {
    return next(new AppError("There are no pending bookings", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      bookings,
    },
  });
});
