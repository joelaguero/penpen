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

    // Parse the html and pass the article object, mapping og keys to values, to the callback fn. 
    var el = $( '<div></div>' ).html(data);
    var article = {};
    el.find("meta[property*='og']")
    .each(function(key, val) {
      var property = this.getAttribute('property').substr(3);
      article[property] = val.content;
    });

    callback(null, article);
  });
};
