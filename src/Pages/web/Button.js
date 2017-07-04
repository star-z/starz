import React, { Component } from 'react'

import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Button'
import Code from '../../Code'
import Button from '../../components/web/Button'

export default class extends Component {
  render() {
    return (
			<div className='wrapper'>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Button component</span>
          <br />
          <Code code={`yarn add star-button\nimport Button from 'star-button'`} />
        </div>
        <Button />
        <Code code={ExampleCode} />
			</div>
    )
  }
}
