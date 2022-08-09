const Mongoose = require("mongoose");
const DB = process.env.DATABASE;

Mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("no connection ");
  });
