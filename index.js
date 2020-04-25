import React, { Component } from 'react';
import { render } from 'react-dom';
import Routers from './_routers/Routers';
import 'bootstrap/dist/css/bootstrap.css'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Routers />
    );
  }
}

render(<App />, document.getElementById('root'));
