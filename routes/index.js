var express = require("express");
var router = express.Router();
var dbhelper = require("../model/databasehelper");

/* GET home page. */

router.get("/", function(req, res) {
  console.log("get register page");
  res.render("index", { layout: false });
});

// Form Submission

router.post("/", function(req, res) {
  console.log("In router part");

  var fullname = req.body.fullname;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var service = req.body.service;

  req.checkBody("fullname", " Name is required").notEmpty();
  req.checkBody("email", "Email is required").notEmpty();
  req.checkBody("email", "Email is not valid").isEmail();

  var error = req.validationErrors();

  if (error) {
    console.log(error);
  } else {
    console.log("in else part ");

    // var sql = 'INSERT INTO bookings (fullname, email, mobile, service) VALUES (?, ?, ?, ?)';
    // dbhelper.query(sql, [fullname, email, mobile, service], function (error, results, fields) {
    //     console.log("data exported to database\n");
    //     if (error) throw error;

    // });

    res.redirect("/confirmation");
  }
});

router.get("/confirmation", function(req, res) {
  console.log("confirmation page");
  res.render("confirmation", { title: "confirm", layout: false });
});

module.exports = router;
