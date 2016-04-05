var Article = require('./articleModel.js');

module.exports = {
  allArticles: function(req, res) {
    res.status(200);
    res.send('Hello World');
    // findAllArticles({})
    //   .then(function(articles) {
    //     res.send('fish')
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   })
  },

  newArticle: function(req, res) {
    console.log('REQUEST BODY');
    console.log(req.body);
  }

};
