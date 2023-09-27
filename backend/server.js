const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

//the following line helps us to parse json data
app.use(express.json());

//the following line allows us to parse urlencoded data
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

/** Note - this will not work if it is written before the require statement
 *
 * sequence -
 *
 * 1. middle-ware
 * 2. router (require)
 * 3. errorHandler
 *
 * **/

//to override the default express error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
