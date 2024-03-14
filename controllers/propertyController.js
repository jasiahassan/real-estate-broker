const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { signToken } = require("./authController");
const Property = require("../modals/propertyModal");
const apiFeatures = require("../utils/apiFeatures");

exports.getAllProperties = catchAsync(async (req, res, next) => {
  const features = new apiFeatures(Property.find(), req.query)
    .filter()
    .sort()
    .search();

  const properties = await features.query;
  if (properties.length == 0) {
    return next(new AppError("No properties found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      properties,
    },
  });
});

exports.addproperty = catchAsync(async (req, res, next) => {
  const property = await Property.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      property,
    },
  });
});