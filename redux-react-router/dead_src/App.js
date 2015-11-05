import { Provider, connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Route, Link } from 'react-router';

/* connect */
@connect((state) => ({}))

class App extends Component {
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
    ].map(l =>
      <p>
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
