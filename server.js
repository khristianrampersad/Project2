var express = require("express");
var login = require("./routes/loginroutes");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
var router = express.Router();
// test route
router.get("/", function(req, res) {
  res.json({ message: "welcome to our upload module apis" });
});
//route to handle user registration
router.post("/register", login.register);
router.post("/login", login.login);
app.use("/api", router);
app.listen(8080);

// Create My SQL connection

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your-password",
  database: "cloudprint"
});
connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected ... nn");
  } else {
    console.log("Error connecting database ... nn");
  }
});

// Create Handler for User Registration

exports.register = function(req, res) {
  // console.log("req",req.body);
  var today = new Date();
  var users = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
    modified: today
  };
  connection.query("INSERT INTO users SET ?", users, function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      console.log("The solution is: ", results);
      res.send({
        code: 200,
        success: "user registered sucessfully"
      });
    }
  });
};

// Insertion query for Users added into the database

exports.login = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  connection.query("SELECT * FROM users WHERE email = ?", [email], function(
    error,
    results,
    fields
  ) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      // console.log('The solution is: ', results);
      if (results.length > 0) {
        if (results[0].password == password) {
          res.send({
            code: 200,
            success: "login sucessfull"
          });
        } else {
          res.send({
            code: 204,
            success: "Email and password does not match"
          });
        }
      } else {
        res.send({
          code: 204,
          success: "Email does not exits"
        });
      }
    }
  });
};
