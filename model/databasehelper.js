// const mysql = require("mysql");

// //create  MYSQL Connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "sawani"
// });

// // connect

// db.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + db.threadId);
// });

// module.exports = db;

// /*
// module.exports.createUser = function (newUser, callback) {
//     bcrypt.genSalt(10, function (err,salt) {
//         bcrypt.hash(newUser.password,salt,function (err,hash) {
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     })  ;
// }
// */

// module.exports.getUserByUsername = function(username, callback) {
//   var query = { username: username };
//   User.findOne(query, callback);
// };

// module.exports.getUserById = function(id, callback) {
//   User.findById(id, callback);
// };

// module.exports.comparePassword = function(candidatePassword, hash, callback) {
//   bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     if (err) throw err;
//     callback(null, isMatch);
//   });
// };
