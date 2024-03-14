const catchAsync = require("../utils/catchAsync");
const Property = require("../models/propertyModal");
const Booking = require("../models/bookingModel");

exports.addProperty = catchAsync(async (req, res, next) => {
  const { title, description, location, price, type } = req.body;

  const images = req.files.map((file) => file.path);

  // const video = req.file ? req.file.path : null;

  const newProperty = new Property({
    title,
    description,
    location,
    price,
    type,
    images,
    // video,
  });

  await newProperty.save();
  res.status(201).json({
    status: "success",
    message: "Property added successfully",
    property: newProperty,
  });
});

exports.deleteProperty = catchAsync(async (req, res, next) => {
  const propertyId = req.params.id;
  const deletedProperty = await Property.findByIdAndDelete(propertyId);

  res.status(204).json({
    status: "sucess",
    message: "The property has been deleted",
  });
});

exports.acceptPropertyVisit = catchAsync(async (req, res, next) => {
  const bookingID = await Booking.findById(req.params.id);
  const updatedBooking = await Booking.findByIdAndUpdate(bookingID, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      booking: updatedBooking,
    },
  });
});
