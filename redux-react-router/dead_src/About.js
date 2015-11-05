import React, { Component } from 'react';
import { render } from 'react-dom';

export class About extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <p>Redux is a predictable state container for JavaScript apps.  </p>
        <p>
          It helps you write applications that behave consistently, 
          run in different environments (client, server, and native), 
          and are easy to test. On top of that, it provides a great developer experience, 
          such as <a href="https://github.com/gaearon/redux-devtools">live code editing 
          combined with a time traveling debugger</a>.
        </p>

        <p>
          You can use Redux together with <a href="https://facebook.github.io/react/">React</a>, 
          or with any other view library.<br /> It is tiny (2kB) and has no dependencies.
        </p>

      </div>
    );
  }
}
