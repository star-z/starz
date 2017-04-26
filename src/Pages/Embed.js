import React, { Component } from 'react'

import ExampleCode from '!!../prism-loader?language=javascript!../components/Embed'
import Code from '../Code'
import Embed from '../components/Embed'

export default class extends Component {
  render() {
    return (
      <div>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Embed component</span>
          <br />
          <Code code={`yarn add star-embed\nimport Embed from 'star-embed'`} />
        </div>
        <Embed src='https://player.vimeo.com/video/29658258' />
        <Code code={ExampleCode} />
      </div>
    )
  }
}
