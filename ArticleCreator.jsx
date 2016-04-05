import React from 'react';

class ArticleCreator extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    var target = this.refs.targetUrl.value;
    console.log(target);
    getUrlMetaData(target, function(err, data) {
      console.log('fish');
      console.log(data);
    });
  }

  render() {
    return(
      <form onSubmit={this.handleClick.bind(this)}>
        <input type='url' ref='targetUrl' placeholder='Enter a URL'/>
        <button type='submit' >Create Article</button>
      </form>
    )
  }
}

export default ArticleCreator;
