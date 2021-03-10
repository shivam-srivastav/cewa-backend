const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://beast1534:dEoXOk37HDjzhvQ6@cluster0.kellf.mongodb.net/cewangov1?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database for CEWA NGO v1.0 is connected"))
  .catch((err) => {
    console.error("Connection Error", err.message);
  });

const db = mongoose.connection;
module.exports = db;
