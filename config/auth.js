var User = require('../app/users/userModel.js');

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
      res.json({
        success: true,
        message: 'Enjoy your token!'
        // Add token
      })
    }
  });
}
