var articleController = require('../articles/articleController.js');
var userController = require('../users/userController.js');

module.exports = function(app, express) {
  app.get('/api/links', linksController.allLinks);
  app.post('/api/links', linksController.newLink);
};
