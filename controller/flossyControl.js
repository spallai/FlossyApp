// // Requiring our models
// var db = require("../models");
// path = require('path');
// var bcrypt = require("bcryptjs");

// module.exports = function(app) {

//     app.get("/",function(req,res) {
//         if (req.session.user) {
//             res.sendFile(path.join(__dirname,"/client/public/index.html"));
//         } else if (req.headers.cookie && req.headers.cookie.indexOf("token=") !== -1) {
//             // use regex to grab cookie from headers string
//             var cookie = req.headers.cookie.match(/(?<=token=)[^ ;]*/);
//             // compare cookie against db records
//             db.User.findOne({
//                 where : {
//                     token : cookie
//                 }
//             }).then(function(data) {
//                 if (data) {
//                     // save user object on session 
//                     req.session.user = data;
//                     res.redirect("/");
//                 } else {
//                     // no match, so clear cookie
//                     res.clearCookie("token");
//                     res.redirect("/");
//                 }
//             });    
//             // if no session or cookie, send to log in/create account
//         } else {
//             res.sendFile(path.join(__dirname,"/client/public/index.html"))
//         }
//     });
    
//     app.get("/user",function(req,res) {
//         res.sendFile(path.join(__dirname,"/client/public/index.html"))
//     });

//      // POST route for saving a new user
//     app.post("/user", function (req, res) {
//         db.User.findOne({
//              where : {
//                  email : req.body.email
//              }
//         })
//         .then(function(result) {
//             if (result) {
//                 res.status(404).send("This email is already exist..");
//             } else {
//                 bcrypt.hash(req.body.password, 10 , function(err,hash) {
//                     if (err) throw err;
//                     db.User.create({
//                         firstName: req.body.firstName,
//                         lastName: req.body.lastName,
//                         email: req.body.email,
//                         password: hash
//                     })
//                     .then(function (dbUser) {
//                         res.json(dbUser);
//                         console.log(dbUser);
//                     })
//                     .catch(function (err) {
//                         if (err.errors[0].message === "Validation isEmail on email failed") {
//                             res.status(500).send("Please enter a valid email format..");
//                         } else {
//                             res.status(500).send("Please input all of the following questions..");
//                         }
//                     });
//                 });     
//             }
//         });
//     });

//     // User login
//     app.post("/login",function(req,res) {
//         var logEmail = req.body.email;
//         var logPassword = req.body.password;

//         db.User.findOne({
//             where : {
//                 email : logEmail,
//             }
//         }).then(function(result) {
//             bcrypt.compare(logPassword, result.password, function(err, response) {
//                 if (response) {
//                     // create random token and "save" in database
//                     var newToken = "t" + Math.random();
//                         // stored token in detabase
//                         db.User.update({
//                             token : newToken
//                         },{
//                             where : {
//                                 email : logEmail
//                             }
//                         }).then(function(data) {
//                             console.log("token saved");
//                              // set token as a cookie that browser can read
//                             res.cookie("token", newToken, {expires: new Date(Date.now() + 999999999999)});
//                             var userLogin = {
//                                 id : (result.dataValues.id),
//                                 firstName : (result.dataValues.firstName),
//                                 lastName : (result.dataValues.lastName),
//                             }
//                             // save user object on session for back-end to continue to use
//                             req.session.user = result;
//                             console.log(userLogin)
//                             res.send(userLogin);
//                         });
//                 } else {
//                     res.status(404).send("Incorrect password");
//                 }
//             });
//         }).catch(function(err) {
//             res.status(404).send("Incorrect email");
//         })
//     });

//     // display user profile in browser
//     app.get("/user/create/:id",function(req,res) {
//         db.User.findAll({
//             where : {
//                 userId : req.params.id
//             }
//         },{
//             include: [db.User]
//         }).then(function(result) {
//             res.json(result);
//         });
//     });

//     // create a new user
//     app.post("/currentUser",function(req,res) {
//         db.Student.create({
//             firstName : req.body.firstName,
//             lastName : req.body.lastName,
//             age : req.body.age,
//             avatar : req.body.avatar,
//             userId : req.body.userId
//         })
//         .then(function(result) {
//             res.json(result);
//         })
//         .catch(function(err){
//             res.status(500).json(err);
//         });
//     });

//     // Update User Info
//     app.post("/user/update/:id", function(req, res) {
//         db.User.update(
//             req.body,
//         {
//             where: {
//                 id: req.params.id
//             }
//         }).then(function(result) {
//             res.send("Profile Updated");
//         })
//         .catch(function(err){
//             res.status(500).json(err);
//         });
//     })

//     // Delete a User
//     app.post("/user/delete/:id", function(req, res) {
//         db.User.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function(result) {
//             res.send("Account Deleted");
//         });
//     });

//     // Log Out
//     app.get("/logout", function(req, res) {
//         // clear cookie and session
//         console.log("log out");
//         res.clearCookie("token");
//         req.session.destroy();
//         res.redirect("/");
//       });

// }