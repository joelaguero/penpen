window.storage = [];
import React from 'react';

class ArticleCreator extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var handleClick = function(e) {
      e.preventDefault();
      var target = this.refs.targetUrl.value;
      getUrlMetaData(target, function(err, data) {
        var el = $( '<div></div>' );
        el.html(data);

        var article = new Object;
        el.find("meta[property*='og']").each(function(key, val) {
          var property = this.getAttribute('property').substr(3);
          var content = val.content;
          article[property] = content;
          console.log(article);
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
