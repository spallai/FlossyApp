const router = require("express").Router();
const User = require('../../models/User.js');
const UserSession = require('../../models/UserSession');


/*
 * Sign up
 */
router.post('/api/account/signup', (req, res) => {
  User.create(req.body)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      // if not, we can at least catch the error
      if (err) throw err;
    });
})

//   const { body } = req;
//   const {
//     firstName,
//     lastName,
//     password
//   } = body;
//   let {
//     email
//   } = body;

//   if (!firstName) {
//     return res.send({
//       success: false,
//       message: 'Error: First name cannot be blank.'
//     });
//   }
//   if (!lastName) {
//     return res.send({
//       success: false,
//       message: 'Error: Last name cannot be blank.'
//     });
//   }
//   if (!email) {
//     return res.send({
//       success: false,
//       message: 'Error: Email cannot be blank.'
//     });
//   }
//   if (!password) {
//     return res.send({
//       success: false,
//       message: 'Error: Password cannot be blank.'
//     });
//   }

//   email = email.toLowerCase();
//   email = email.trim();

//   // Steps:
//   // 1. Verify email doesn't exist
//   // 2. Save
//   User.find({
//     email: email
//   }, (err, previousUsers) => {
//     if (err) {
//       return res.send('Error: Server error')
//     } else if (previousUsers.length > 0) {
//       return res.send('Error: Account already exist.');
//     }


//     // Save the new user
//     const newUser = new User();

//     newUser.email = email;
//     newUser.firstName = firstName;
//     newUser.lastName = lastName;
//     newUser.password = newUser.generateHash(password);
//     newUser.save((err, user) => {
//       if (err) {
//         return res.send({
//           success: false,
//           message: 'Error: Server error'
//         });
//       }
//       return res.send({
//         success: true,
//         message: 'Signed up'
//       });
//     });
//   });

// });

router.get('/logout', (req, res) => {
  console.log('hitlogout')
  res.clearCookie("token");
  req.session.destroy();
  res.end();
})


router.get("/login", (req, res) => {
  console.log("hit /");
  if (req.session.user){
    const {firstName, lastName, email} = req.session.user,
          payload = {firstName, lastName, email};
    res.json(payload);
  } else if (req.headers.cookie && req.headers.cookie.indexOf("token=") !== -1) {
    console.log('hit 2nd')
    // use regex to grab cookie from headers string
    var cookie = req.headers.cookie.match(/(?<=token=)[^ ;]*/)[0];
    User.find({
       token: cookie
    }).then(user => {
      if (user){
        console.log('2a')
        req.session.user = user;
        console.log(req.session.user);
      } else {
        console.log('2b')
        res.clearCookie();
        return res.redirect("/login");
      }
    })
  } else {
    console.log('hit 3rd')
    res.status(500).send("no cookie or session");
  }
}) 

router.post('/api/account/signin', (req, res) => {
  var token = "t" + Math.random();
  User.findOneAndUpdate(req.body, { $set: { token} }, { new: true }, (err, user) => {
    if (err) throw err;
    res.cookie("token", token, {expires: new Date(Date.now() + 999999999)});
    req.session.user = user;
    return res.redirect("/login")
  });
});


module.exports = router;