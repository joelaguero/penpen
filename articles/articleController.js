var Article = require('./articleModel.js');

module.exports = {
  allArticles: function(req, res) {
    Article.find({})
      .then(function(articles) {
        res.status(200);
        res.send(articles)
      })
      .catch(function(error) {
        console.log(error);
      })
  },

  newArticle: function(req, res) {
    console.log('Inside new article!');
    console.log(req.body);
    // var article = new Article();
  }

};
