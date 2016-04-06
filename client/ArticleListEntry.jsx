import React from 'react';

class ArticleListEntry extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    window.open(
      this.props.article.url,
      '_blank'
    );
  }

  render() {
    var article = this.props.article;
    return (
      <div onClick={this.handleClick} style={{margin: '10px 0px', 'max-width': '40%', border: '1px solid'}}>
        <img style={{'max-width': '100%'}}src={article.image}/>
        <div style={{'margin': '10px'}}>
          <h2 style={{'margin': '5px 0px'}}>{article.title}</h2>
          <p style={{'white-space': 'nowrap', 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'text-transform':'uppercase', 'color': 'gray', 'font-family':'sans-serif','font-size': '11px', 'margin': '0', 'padding': '0'}}>{article.site_name} · {article.url}</p>
          <p style={{'margin-bottom': '0'}}>{article.description}</p>
        </div>
      </div>
    );
  }
}

export default ArticleListEntry;
