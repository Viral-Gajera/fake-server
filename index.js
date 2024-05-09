require("dotenv").config();

let express = require("express");
let router = require("./app/router/router.js");
let cors = require("cors");

let app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));
app.use("/", router);

app.listen(process.env.PORT, function () {
    console.log("App listening on port 8080...");
});
