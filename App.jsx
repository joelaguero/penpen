import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Welcome to Penpen, {this.props.name}!</h1>
        <ArticleList/>
      </div>
    );
  }
}

ReactDOM.render(< App name='Jenny'/>, document.getElementById('app'));
