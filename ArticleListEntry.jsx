import React from 'react';

class ArticleListEntry extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{border: '1px solid', padding: '10px'}}>
        <img src="//placekitten.com/100/100"/>
        <h2>Article Title</h2>
        <p>{'http://articleurl.com/url/12345'}</p>
        <p>{'This is a short description of the article. It describes something about it. It is hopefully useful and not too long, or we might have to automatically truncate.'}</p>
      </div>
    );
  }
}

export default ArticleListEntry;
