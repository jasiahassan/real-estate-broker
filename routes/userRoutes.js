const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const uploadUsingMulter = require("../utils/uploadUsingMulter");

router.post("/signup", userController.signup);
router.post("/verifyOtp/:otp", userController.verifyOtp);

router.get("/getuser", authController.protect, userController.getUser);
router.patch(
  "/updateUser",
  authController.protect,
  uploadUsingMulter.uploadUserPhotos,
  userController.updateUser
);
router.delete("/deleteUser", authController.protect, userController.deleteUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logout);
router.post("/forgetPassword", userController.forgetPassword);
router.patch("/resetPassword/:token", userController.resetPassword);
router.patch(
  "/updatePassword",
  authController.protect,
  userController.updatePassword
);
router.post("/review/:id", authController.protect, userController.review);
router.post(
  "/updatereview/:propertyid/reviewid",
  authController.protect,
  userController.review
);
router.put(
  "/updatereview/:propertyId/:reviewId",
  authController.protect,
  userController.updateRatingAndReview
);
router.delete(
  "/deletereview/:propertyId/:reviewId",
  authController.protect,
  userController.deleteReview
);
module.exports = router;
