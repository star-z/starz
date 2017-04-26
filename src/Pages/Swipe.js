import React, { Component } from 'react'

import ExampleCode from '!!../prism-loader?language=javascript!../components/Swipe'
import Code from '../Code'
import Swipe from '../components/Swipe'

let items = [ { id: 0, value: 'ruby' }, { id: 1, value: 'javascript' }, { id: 2, value: 'lua' } ]

export default class extends Component {
  render() {
    return (
			<div className='wrapper'>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Swipe component</span>
          <br />
          <Code code={`yarn add star-swipe\nimport Modal from 'star-swipe'`} />
        </div>
        <Swipe />
        <Code code={ExampleCode} />
			</div>
    )
  }
}
