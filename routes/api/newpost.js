const router = require("express").Router();
const Product = require("../models/product.js");
​
router.post("/api/post", function(req, res) {
 // as long as req.body matches what the model expects, this should insert into the database
 NewPost.create(req.body)
 .then(() => {
  res.json(true);
 })
 .catch((err) => {
  // if not, we can at least catch the error
  res.json(err);
 });
});
​
router.get("/api/post", function(req, res) {
 // find all products where quantity is greater than zero
 NewPost.find()
 .then((docs) => {
  res.json(docs);
 });
});
​
// router.get("/api/post/:id", function(req, res) {
//  // find and return a single object based on upc
//  NewPost.findOne({
//  })
//  .then((docs) => {
//   res.json(docs);
//  });
// });
​
// router.put("/api/post/:id", function(req, res) {
//  NewPost.findOneAndUpdate({
//  }, {
//   // let mongo auto-decrement the quantity
//   $inc: {quantity: -1}
//  }, {
//   // return the udpated object, not the original
//   new: true
//  })
//  .then((docs) => {
//   res.json(docs);
//  })
//  .catch((err) => {
//   res.json(err);
//  });
// });
​
module.exports = router;