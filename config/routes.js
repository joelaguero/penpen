var articlesController = require('../app/articles/articleController.js');
var userController = require('../app/users/userController.js');
var authenticate = require('./auth.js');

module.exports = function(app, express) {
  app.get('/api/', function(req, res) {
    res.json({ message: 'This is the API!'});
  });

  app.get('/api/articles', articlesController.allArticles);
  app.post('/api/articles', articlesController.newArticle);

  app.get('/api/users', userController.allUsers);

  app.post('/api/authenticate', authenticate);

  // app.get('/setup', function(req, res) {
  //   var User = require('../app/users/userModel.js');
  //
  //   var test = new User({
  //     name: 'Harold Ryans',
  //     password: 'password',
  //     admin: true
  //   });
  //
  //   test.save(function(err) {
  //     if (err) throw err;
  //
  //     console.log('User saved successfully');
  //     res.json({ success: true });
  //   })
  // });
};
