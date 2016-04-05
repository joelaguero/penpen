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
        var metaTags = $(el).find()
      });
    };

    return(
      <form onSubmit={handleClick.bind(this)}>
        <input type='url' ref='targetUrl' placeholder='Enter a URL'/>
        <button type='submit' >Create Article</button>
      </form>
    );
  }
}


export default ArticleCreator;
