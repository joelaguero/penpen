import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList.jsx';
import ArticleCreator from './ArticleCreator.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    $.get('/api/articles', function(data) {
      console.log(data);
    });
    this.serverRequest = $.get('/api/articles', function (data) {
      this.setState({
        articles: data
      });
    }.bind(this));
  }

  addArticle(article) {
    var articles = this.state.articles;
    articles.push(article);

    this.setState({
      articles: articles
    });

    $.ajax({
      type: "POST",
      url: '/api/articles',
      data: article
    });
  }

  render() {
    return(
      <div>
        <h1>Penpen</h1>
        <p>Enter a link to your online articles to make a portfolio of your work.</p>
        <ArticleCreator addArticle={this.addArticle.bind(this)} />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

ReactDOM.render(< App name='Jenny'/>, document.getElementById('app'));
