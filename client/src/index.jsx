import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};

  }

  render() {

    return (
      <h1>Hello World!</h1>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);