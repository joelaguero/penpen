var articlesController = require('../app/articles/articleController.js');
var userController = require('../app/users/userController.js');
var authenticate = require('./auth.js');

module.exports = function(app, express) {
  var apiRoutes = express.Router();

  apiRoutes.get('/', function(req, res) {
    res.json({ message: 'This is the API!'});
  });

  apiRoutes.get('/articles', articlesController.allArticles);
  apiRoutes.post('/articles', articlesController.newArticle);

  apiRoutes.get('/users', userController.allUsers);

  apiRoutes.post('/authenticate', authenticate);

  app.use('/api', apiRoutes);

  // ========
  // Testing
  // ========
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
