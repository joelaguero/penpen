window.storage = [];
import React from 'react';

class ArticleCreator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    getUrlMetaData(this.refs.targetUrl.value, function(err, article) {
      this.props.addArticle(article);
    }.bind(this) );
  }

  render() {
    return(
      <form onSubmit={this.handleClick}>
        <input type='url' ref='targetUrl' placeholder='Enter a URL'/>
        <button type='submit' >Create Article</button>
      </form>
    );
  }
}


export default ArticleCreator;
