var express = require("express");
var Cors = require("cors");
var app = express();
var axios = require("axios");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

let config = {
  headers: {
    Authorization: "Bearer FLWSECK_TEST-a514d8f1abd080db1502a144f22954dc-X",
  },
};

app.post("/pay", function (req, res) {
  var payload = req.body;
  axios
    .post("https://api.flutterwave.com/v3/payments", payload, config)
    .then(function (response) {
      res.send(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.message);
      console.log(error);
    });
});

//start server
app.listen(4000, function () {
  console.log("Node server running on port 4000");
});

module.exports = app;
