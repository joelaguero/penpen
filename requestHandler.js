var _makeGetRequest = function(url, callback) {
  $.ajax({
    url: url,
    type: 'GET',
    success: function(res) {
      callback(null, res.responseText);
    },
    error: function(err) {
      callback(err);
    }
  });
};

var getUrlMetaData = function(url, callback, tag) {
  _makeGetRequest(url, function(err, data) {
    if (err) throw err;
    callback(null, data);
  });
};
