const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
      default: "default.jpg",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["sell", "rent"],
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
