import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList.jsx';
import ArticleCreator from './ArticleCreator.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: [ {
        description: "A CNN report called the Brazilian soccer team’s followers the “craziest fans” in all of sports.",
        image: "http://www.newyorker.com/wp-content/uploads/2014/01/McGrath_01-1200-630.jpg",
        locale: "en_US",
        site_name: "The New Yorker",
        title: "People’s Republic of Corinthians - The New Yorker",
        type: "article",
        updated_time: "2014-07-16T15:48:21-04:00",
        url: "http://www.newyorker.com/culture/photo-booth/peoples-republic-of-corinthians"
      }]
    };
  }

  addArticle(article) {
    var articles = this.state.articles;
    articles.push(article);

    this.setState({
      articles: articles
    });
  }

  render() {
    return(
      <div>
        <h1>Welcome to Penpen, {this.props.name}!</h1>
        <ArticleCreator addArticle={this.addArticle.bind(this)} />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

ReactDOM.render(< App name='Jenny'/>, document.getElementById('app'));
