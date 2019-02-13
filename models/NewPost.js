
// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the NewPostSchema with our schema class
var NewPostSchema = new Schema({
  // NewPostSchema, a string, must be entered
  comment: {
    type: String,
  },
  // url, a string, must be entered
  url: {
    type: String,
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the NewPostSchema model using the NewPostSchema
var NewPost = mongoose.model("NewPost", NewPostSchema);

// Export the NewPostSchema model
module.exports = NewPost;