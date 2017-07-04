import React, { Component } from 'react'

import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Toggle'
import Code from '../../Code'
import Toggle from '../../components/web/Toggle'

let items = ['apple', 'orange', 'lemon', 'peach']

export default class extends Component {
  toggled(value) {
    console.log(value)
  }
  render() {
    return (
			<div className='wrapper'>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Toggle component</span>
          <br />
          <Code code={`yarn add star-toggle\nimport Search from 'star-toggle'`} />
        </div>
        <Toggle
          items={items}
          checked='apple'
          name='toggleFruits'
          onToggle={::this.toggled} />
        <Code code={ExampleCode} />
			</div>
    )
  }
}
