import React from 'react';

class ArticleCreator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form>
        <input type='url' placeholder='Enter a URL'/>
        <button type='submit'>Create Article</button>
      </form>
    )
  }
}

export default ArticleCreator;
