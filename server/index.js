const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();
var router = express.Router({ strict: true });

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// use cors
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

require("./dbConn");
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/", router);
// app.use("public", express.static("public"));
require("./routes/routes")(app);

// listen for requests
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
