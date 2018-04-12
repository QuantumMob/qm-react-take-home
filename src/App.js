import React, { Component } from 'react';
import './App.css';

class Comment extends React.Component {
  render() {
    return (
      <div>
        <p>By: {this.props.by}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class Article extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.heading}</h3>
        <p>{this.props.text}</p>
        <hr />
        <Comment by="Erich" text="Hey there!"/>
        <Comment by="Eric" text="Have fun!"/>
        <Comment by="Alex" text="Good luck!"/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article heading="Welcome to QM" text="This is a test task that is meant to demonstrate how you approach problems and how you structure your React code. Please implement adding comments and 'like this comment' functionality. It is not only about the functionality. We are looking forward to see how your code is organized, what libraries you use, where you add the tests and anything else that you would like to show off. There is no need to implement the API. Things can be stored in memory. Navigate to App.js to begin."/>
      </div>
    );
  }
}

export default App;
