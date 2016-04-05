window.storage = [];
import React from 'react';

class ArticleCreator extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var handleClick = function(e) {
      e.preventDefault();

      getUrlMetaData(this.refs.targetUrl.value, function(err, data) {
        var el = $( '<div></div>' ).html(data);
        var article = new Object;

        el.find("meta[property*='og']")
          .each(function(key, val) {
            var property = this.getAttribute('property').substr(3);
            article[property] = val.content;

            window.storage.push(article);
          });
      });
    }

    return(
      <form onSubmit={handleClick.bind(this)}>
        <input type='url' ref='targetUrl' placeholder='Enter a URL'/>
        <button type='submit' >Create Article</button>
      </form>
    );
  }
}


export default ArticleCreator;
