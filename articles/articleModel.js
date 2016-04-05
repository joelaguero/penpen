var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: String,
  description: String,
  url: String,
  image: String,
  created_at: Date
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
