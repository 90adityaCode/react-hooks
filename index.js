import React, { Component } from 'react';
import { render } from 'react-dom';
import User from './_components/user-list/User';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <User name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
