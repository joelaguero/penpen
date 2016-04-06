import React from 'react';
import ArticleListEntry from './ArticleListEntry.jsx';

class ArticleList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    var ArticleListEntries = [];
    for (var i = 0; i < this.props.articles.length; i++) {
      ArticleListEntries.push(<ArticleListEntry key={i} article={this.props.articles[i]} />);
    }

    return (
      <div>
        { ArticleListEntries }
      </div>
    );
  }
}

export default ArticleList;
