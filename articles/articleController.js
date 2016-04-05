var Article = require('./articleModel.js');

module.exports = {

  allArticles: function(req, res) {
    findAllArticles({})
      .then(function(articles) {
        res.json(articles);
      })
      .catch(function(error) {
        console.log(error);
      })
  },

  newArticle: function(req, res) {

  }

};
