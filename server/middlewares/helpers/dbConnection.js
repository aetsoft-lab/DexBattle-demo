const mongoose = require("mongoose");

module.exports = () => {
  const self = module.exports;
  if (!process.env.MONGO_URI) {
    console.warn("Warning: MONGO_URI not set in environment variables");
    return;
  }
  
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => {
      console.error(
        "Failed to connect to the database on startup - retrying in 5 sec"
      );
      setTimeout(self, 5000);
    });
};
