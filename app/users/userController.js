var User = require('./userModel.js');

module.exports = {
  allUsers: function(req, res) {
    User.find({})
      .then(function(data) {
        res.status(200);
        res.send(data);
      })
      .catch(function(err) {
        console.log(err);
      })
  }
};
