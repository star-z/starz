import React, { Component } from 'react';
import { render } from 'react-dom';

export class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <h4>
        <span>Redux React Router example </span>         
        <a href='https://github.com/rackt/redux'>&copy; redux</a>
      </h4>
    );
  }
}
