import React, { Component, PropTypes } from 'react';

export default class Code extends Component {

  static propTypes = {
    code: PropTypes.string,
  }

  render() {
    return (
      <div>
        <pre style={{marginTop: '40px', maxHeight: '600px', overflowY: 'scroll'}} className=' language-javascript'>
          <code
            className=' language-javascript'
            dangerouslySetInnerHTML={{ __html: this.props.code }}
          />
        </pre>
      </div>
    )
  }
}
