require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const { LOCAL_DB_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(LOCAL_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully Connected to MongoDB ❤️ ✨");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
