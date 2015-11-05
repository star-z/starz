import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h2>Redux React Router example</h2>
        <Link to={`about`}>About</Link>
      </div>
    );
  }
}