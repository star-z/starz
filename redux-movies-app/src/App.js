import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Route, Link } from 'react-router';
import { pushState } from 'redux-router';

@connect((state) => ({}))
export class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(pushState(null, '/parent/child/custom'));
  }

  render() {
    const links = [
      '/',
      '/parent?foo=bar',
      '/parent/child?bar=baz',
      '/parent/child/123?baz=foo'
    ].map((l, i) =>
      <p key={i}>
        <Link to={l}>{l}</Link>
      </p>
    );

    return (
      <div>
        <h1>App Container</h1>
        {links}

        <a href="#" onClick={this.handleClick}>
          /parent/child/custom
        </a>
        {this.props.children}
      </div>
    );
  }
}