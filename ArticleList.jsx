import React from 'react';
import ArticleListEntry from './ArticleListEntry.jsx';

class ArticleList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ArticleListEntry />
    );
  }
}

export default ArticleList;
