const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const userRouter = require("./routes/userRoutes");
const sellerRouter = require("./routes/sellerRoutes");
const AppError = require("./utils/appError");
const bookingRouter = require("./routes/bookingRoutes");
const globalErrorHandler = require("./controllers/errorController");
require("./controllers/seeding");

dotenv.config({ path: "./config.env" });

// Connect to the database
connectDB();
const app = express();

// Middlewares
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/user", bookingRouter);
app.use("/api/v1/seller", sellerRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
