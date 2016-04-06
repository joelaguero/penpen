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
    var data = req.body;

    var article = new Article();
    article.title = data.title;
    article.description = data.description;
    article.url = data.url;
    article.site_name = data.site_name;
    article.image = data.image;
    article.save();

    console.log('This was just added...', article);
    res.sendStatus(200);
  }

};
