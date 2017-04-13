import React, { Component } from 'react'

import ExampleCode from '!!../prism-loader?language=javascript!../components/Search'
import Code from '../Code'
import Search from '../components/Search'

let items = [ { id: 0, value: 'ruby' }, { id: 1, value: 'javascript' }, { id: 2, value: 'lua' } ]

export default class extends Component {
  render() {
    return (
			<div className='wrapper'>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Search component</span>
          <br />
          <Code code={`yarn add star-search\nimport Search from 'star-search'`} />
        </div>
        <Search items={items} />
        <Code code={ExampleCode} />
			</div>
    )
  }
}
