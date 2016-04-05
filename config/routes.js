var articlesController = require('../articles/articleController.js');
var usersController = require('../users/userController.js');

module.exports = function(app, express) {
  app.get('/api/articles', articlesController.allArticles);
  app.post('/api/articles', articlesController.newArticle);
};
