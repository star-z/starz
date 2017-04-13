import React, { Component } from 'react'

import ExampleCode from '!!../prism-loader?language=javascript!../components/Gallery'
import Code from '../Code'
import Gallery from '../components/Gallery'

export default class extends Component {
  render() {
    return (
      <div>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Gallery component</span>
          <br />
          <Code code={`yarn add star-gallery\nimport Gallery from 'star-gallery'`} />
        </div>
        <Gallery />
        <Code code={ExampleCode} />
      </div>
    )
  }
}
