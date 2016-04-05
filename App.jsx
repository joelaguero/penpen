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

  addArticle(article) {
    console.log(article);
    // this.setState({
    //   articles: this.props.articles.push(article)
    // });
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
