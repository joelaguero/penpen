var articlesController = require('../app/articles/articleController.js');
var usersController = require('../app/users/userController.js');

module.exports = function(app, express) {
  app.get('/api/', function(req, res) {
    res.json({ message: 'This is the API!'});
  });
  app.get('/api/articles', articlesController.allArticles);
  app.post('/api/articles', articlesController.newArticle);
};
