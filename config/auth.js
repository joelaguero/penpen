var User = require('../app/users/userModel.js');
var jwt = require('jsonwebtoken');
var secret = require('./config.js').secret; //

module.exports = function(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed.' });
    } else if (user) {
      // Check password.
      // If password incorrect, res false.
      // If user found and password correct, create token and return information.
      if (user.password !== req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.'});
      } else {
        var token = jwt.sign(user, secret, {
          expiresInMinutes: 1440
        });

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        })
      }
    }
  });
}
