var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: String,
  description: String,
  site_name: String,
  url: String,
  image: String,
  date: Date,
  created_at: Date
});

articleSchema.pre('save', function(next) {
  var currentDate = new Date();
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
