var User = require('../app/users/userModel.js');
var jwt = require('jsonwebtoken');
var secret = require('./config.js').secret; //

module.exports = {

  requestToken: function(req, res) {
    User.findOne({
      name: req.body.name
    }, function(err, user) {
      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
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
  },

  verifyToken: function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {

      // verify secret and check expiration
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to verify token.' });
        } else {

          // if the token is verified, save to request for future use
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  }
}
